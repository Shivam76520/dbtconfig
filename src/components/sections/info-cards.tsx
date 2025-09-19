import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, Banknote } from "lucide-react";

export function InfoCards() {
  return (
    <section id="learn" className="space-y-8">
        <div className="text-center">
            <h2 className="text-3xl font-bold font-headline tracking-tight">The Core Concepts</h2>
            <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
                It's more than just linking. Seeding your account for DBT is key to receiving government benefits directly.
            </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
            <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Link className="h-8 w-8 text-primary" />
                        Aadhaar-Linked Account
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                    <p>
                        This is a basic link where your Aadhaar number is connected to your bank account primarily for e-KYC (Know Your Customer) purposes.
                    </p>
                    <p>
                        <strong>What it does:</strong> Verifies your identity with the bank.
                    </p>
                    <p>
                        <strong>Limitation:</strong> It does NOT automatically mean you can receive government subsidies or benefits (DBT) into this account.
                    </p>
                </CardContent>
            </Card>
            <Card className="border-primary hover:shadow-lg transition-shadow">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Banknote className="h-8 w-8 text-accent" />
                        DBT-Enabled, Aadhaar-Seeded Account
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-muted-foreground">
                    <p>
                        This is a special status where your Aadhaar is not just linked, but also "seeded" with your bank account and mapped to the National Payments Corporation of India (NPCI).
                    </p>
                    <p>
                        <strong>What it does:</strong> Explicitly marks this account as the designated destination for all your government benefits and subsidies.
                    </p>
                    <p>
                        <strong>Benefit:</strong> Ensures you receive funds from schemes like scholarships, pensions, and LPG subsidies directly and without delay.
                    </p>
                </CardContent>
            </Card>
        </div>
    </section>
  );
}
