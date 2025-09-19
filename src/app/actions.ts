'use server';

import { aadhaarScamProtection, AadhaarScamProtectionOutput } from "@/ai/flows/aadhaar-scam-protection";
import { z } from "zod";

const ScamCheckSchema = z.object({
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export type ScamCheckState = {
  message?: string;
  errors?: {
    message?: string[];
  };
  result?: AadhaarScamProtectionOutput;
};

export async function checkScam(
  prevState: ScamCheckState,
  formData: FormData,
): Promise<ScamCheckState> {
  const validatedFields = ScamCheckSchema.safeParse({
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Invalid message. Please check your input.',
    };
  }

  try {
    const result = await aadhaarScamProtection({ message: validatedFields.data.message });
    return { result };
  } catch (error) {
    console.error(error);
    return { message: "An error occurred while analyzing the message. Please try again." };
  }
}
