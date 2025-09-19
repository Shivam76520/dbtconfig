import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users } from 'lucide-react';

export default function ParentsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-headline">
              <Users className="h-8 w-8 text-primary" />
              Parents Portal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Welcome to the parents portal. Find information on DBT schemes and benefits available for your children.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
