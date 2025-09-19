import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <section className="text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold font-headline tracking-tight md:text-5xl lg:text-6xl">
          Direct Benefit Transfer Portal
        </h1>
        <div className="mt-4 flex justify-center">
          <p className="mt-4 text-lg text-muted-foreground md:text-xl overflow-hidden whitespace-nowrap border-r-4 border-r-orange-500 animate-typing">
            Government of India's initiative for efficient transfer of benefits and subsidies.
          </p>
        </div>
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <Button size="lg" asChild>
          <Link href="/about">Learn About DBT</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/scam-reporting">Report a Scam</Link>
        </Button>
      </div>
    </section>
  );
}
