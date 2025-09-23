import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function QuizPage() {
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
            <CardTitle>Play Quiz & Earn Badges</CardTitle>
            <CardDescription>
              This is where you can play fun quizzes to learn about DBT. This feature is coming soon!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Get ready to answer questions, earn coins, and unlock awesome badges!
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
