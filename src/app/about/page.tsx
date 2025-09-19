import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { InfoCards } from '@/components/sections/info-cards';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <InfoCards />
      </main>
      <Footer />
    </div>
  );
}
