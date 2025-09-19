import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold font-headline tracking-tight md:text-5xl lg:text-6xl">
          Clarity on Aadhaar &amp; DBT
        </h1>
        <p className="mt-4 text-lg text-muted-foreground md:text-xl">
          Understand the crucial difference between a simple Aadhaar-linked bank account and a DBT-enabled, Aadhaar-seeded one. Knowledge is your best defense.
        </p>
      </div>
      <div className="mt-8 flex justify-center gap-4">
        <Button size="lg" asChild>
          <a href="#learn">Start Learning</a>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <a href="#scam-checker">Check a Message</a>
        </Button>
      </div>
    </section>
  );
}
