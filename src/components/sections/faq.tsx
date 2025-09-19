import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  import { HelpCircle } from "lucide-react";
  
  const faqs = [
    {
      question: "Can I have multiple Aadhaar-seeded bank accounts?",
      answer: "No, you can only have one Aadhaar-seeded account at any given time for receiving DBT benefits. If you seed a new account, the old one is automatically de-linked from the NPCI mapper.",
    },
    {
      question: "How do I check which account is seeded with my Aadhaar?",
      answer: "You can check your Aadhaar-seeded account status on the official UIDAI website or through the m-Aadhaar app. Your bank can also provide this information.",
    },
    {
      question: "Is linking my Aadhaar number to my bank account enough for DBT?",
      answer: "No, simple linking is not enough. You must explicitly give consent to your bank to 'seed' your Aadhaar number for receiving DBT benefits. This process maps your account with the NPCI.",
    },
    {
      question: "Will the government ever ask for my OTP or PIN over phone/SMS?",
      answer: "Never. Government agencies or banks will never ask for your OTP, PIN, password, or other sensitive details. Any such request is a scam.",
    },
    {
        question: "What should I do if I receive a suspicious message?",
        answer: "Do not click on any links, download attachments, or share personal information. You can report it to your bank and the National Cyber Crime Reporting Portal. You can also use our Scam Checker tool above for a quick analysis.",
    }
  ];
  
  export function Faq() {
    return (
      <section id="faq" className="space-y-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold font-headline tracking-tight flex items-center justify-center gap-2">
                <HelpCircle className="h-8 w-8 text-primary"/>
                Frequently Asked Questions
            </h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common doubts and concerns.
            </p>
        </div>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    );
  }
  