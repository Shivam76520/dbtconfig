import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/hero';
import { InfoCards } from '@/components/sections/info-cards';
import { Benefits } from '@/components/sections/benefits';
import { Faq } from '@/components/sections/faq';
import { ScamChecker } from '@/components/sections/scam-checker';
import { Resources } from '@/components/sections/resources';
import { Updates } from '@/components/sections/updates';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <div className="space-y-16 md:space-y-24">
          <Hero />
          <InfoCards />
          <Benefits />
          <ScamChecker />
          <Faq />
          <div className="grid gap-12 md:grid-cols-2 md:gap-8 lg:gap-12">
            <Updates />
            <Resources />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
