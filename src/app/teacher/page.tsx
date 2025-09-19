import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User } from 'lucide-react';

export default function TeacherPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl font-headline">
              <User className="h-8 w-8 text-primary" />
              Teacher Portal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Welcome to the teacher portal. Access resources and information relevant to your role in the DBT ecosystem.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
