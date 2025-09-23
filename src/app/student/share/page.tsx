import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function SharePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <div className="mb-4">
            <Button asChild variant="outline">
                <Link href="/student" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Dashboard
                </Link>
            </Button>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Share with Parents</CardTitle>
            <CardDescription>
              Show off your achievements! This feature is coming soon!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Soon you'll be able to easily share your quiz scores and unlocked badges with your parents via WhatsApp or SMS.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
