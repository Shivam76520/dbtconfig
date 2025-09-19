// This file is machine-generated - edit at your own risk.

'use server';

/**
 * @fileOverview An AI agent to detect and protect users from Aadhaar and DBT related scams.
 *
 * - aadhaarScamProtection - A function that analyzes a message or scenario to determine if it's a scam and provides advice.
 * - AadhaarScamProtectionInput - The input type for the aadhaarScamProtection function.
 * - AadhaarScamProtectionOutput - The return type for the aadhaarScamProtection function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AadhaarScamProtectionInputSchema = z.object({
  message: z
    .string()
    .describe(
      'A suspicious message or scenario related to Aadhaar or DBT that the user wants to check for potential scams.'
    ),
});
export type AadhaarScamProtectionInput = z.infer<typeof AadhaarScamProtectionInputSchema>;

const AadhaarScamProtectionOutputSchema = z.object({
  isScam: z
    .boolean()
    .describe(
      'Whether the message or scenario is likely a scam (true) or not (false).'
    ),
  explanation: z
    .string()
    .describe(
      'An explanation of why the message or scenario is likely a scam or not.'
    ),
  advice: z
    .string()
    .describe(
      'Advice on how to protect oneself from the potential scam, including steps to take and resources to consult.'
    ),
});
export type AadhaarScamProtectionOutput = z.infer<typeof AadhaarScamProtectionOutputSchema>;

export async function aadhaarScamProtection(input: AadhaarScamProtectionInput): Promise<AadhaarScamProtectionOutput> {
  return aadhaarScamProtectionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'aadhaarScamProtectionPrompt',
  input: {schema: AadhaarScamProtectionInputSchema},
  output: {schema: AadhaarScamProtectionOutputSchema},
  prompt: `You are an AI assistant specialized in detecting scams related to Aadhaar and Direct Benefit Transfer (DBT) schemes. 

  Analyze the following message or scenario provided by the user and determine if it is likely a scam. Provide a detailed explanation of your reasoning and offer practical advice on how the user can protect themselves.

  Message or Scenario: {{{message}}}

  Consider the following aspects in your analysis:
  - Whether the message asks for sensitive personal information (Aadhaar number, bank account details, OTP, etc.).
  - Whether the message creates a sense of urgency or threatens negative consequences if the user doesn't act immediately.
  - Whether the message comes from an unverified source or impersonates a government official or agency.
  - Whether the promised benefits or offers seem too good to be true.

  Output the response in JSON format with the following keys:
  - isScam: true if the message is likely a scam, false otherwise.
  - explanation: A detailed explanation of why you think it's a scam or not.
  - advice: Practical advice on how the user can protect themselves from the scam.
  `,
});

const aadhaarScamProtectionFlow = ai.defineFlow(
  {
    name: 'aadhaarScamProtectionFlow',
    inputSchema: AadhaarScamProtectionInputSchema,
    outputSchema: AadhaarScamProtectionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
