import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Faq } from '@/components/sections/faq';

export default function FaqPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
