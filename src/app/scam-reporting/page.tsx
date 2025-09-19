import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ScamChecker } from '@/components/sections/scam-checker';

export default function ScamReportingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <ScamChecker />
      </main>
      <Footer />
    </div>
  );
}
