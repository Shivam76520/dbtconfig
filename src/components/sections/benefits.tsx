import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, ShieldCheck, Eye, ReceiptText } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Direct & Fast Payments",
    description: "Receive scholarship, pension, and subsidy funds directly into your account, minimizing delays.",
  },
  {
    icon: ShieldCheck,
    title: "Reduced Leakages",
    description: "Funds are transferred directly, eliminating intermediaries and reducing the chances of corruption or fraud.",
  },
  {
    icon: Eye,
    title: "Enhanced Transparency",
    description: "Easily track the transfer of funds from the government to your account, ensuring accountability.",
  },
  {
    icon: ReceiptText,
    title: "Simplified Process",
    description: "A single Aadhaar-seeded account serves as the default for all government schemes you are eligible for.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headline tracking-tight">Why Seeding Matters</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          The benefits of an Aadhaar-seeded account extend beyond just receiving funds.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <Card key={index} className="text-center hover:scale-105 transition-transform">
            <CardHeader className="items-center">
              <div className="p-3 rounded-full bg-primary/10">
                <benefit.icon className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="pt-2">{benefit.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
