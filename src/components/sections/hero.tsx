import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold font-headline tracking-tight md:text-5xl lg:text-6xl">
          Direct Benefit Transfer Portal
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          Government of India's initiative for transparent and efficient transfer of benefits and subsidies.
        </p>
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <Button size="lg" asChild>
          <a href="#learn">Learn About DBT</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#scam-checker">Report a Scam</a>
        </Button>
      </div>
    </section>
  );
}
