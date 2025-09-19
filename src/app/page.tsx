import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Hero } from '@/components/sections/hero';
import { RoleSelection } from '@/components/sections/role-selection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <div className="space-y-16 md:space-y-24">
          <Hero />
          <RoleSelection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
