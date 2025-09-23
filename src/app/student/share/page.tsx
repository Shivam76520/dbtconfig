
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, Badge, Coins, MessageSquare, Share2 } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Alert, AlertTitle } from '@/components/ui/alert';

export default function SharePage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-2xl mx-auto">
            <div className="mb-4">
                <Button asChild variant="outline">
                    <Link href="/student" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Dashboard
                    </Link>
                </Button>
            </div>
            <Card>
            <CardHeader className="text-center">
                <Share2 className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-3xl font-bold font-headline">Share with Parents</CardTitle>
                <CardDescription>
                Show off your achievements! This feature is coming soon.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <p className="text-muted-foreground text-center">
                Soon, you'll be able to share your cool DBT status, quiz scores, and unlocked badges directly with your parents!
                </p>
                
                <div className="space-y-4">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center gap-2">
                                <Badge className="h-5 w-5" />
                                What you can share:
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground list-disc list-inside space-y-1">
                            <li>Your "DBT Hero" status</li>
                            <li>High scores from the quiz</li>
                            <li>Badges you've collected</li>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                             <CardTitle className="text-lg flex items-center gap-2">
                                <MessageSquare className="h-5 w-5" />
                                How it will work:
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-muted-foreground">
                            A message will be sent to your parent's phone via WhatsApp or SMS with your achievements.
                        </CardContent>
                    </Card>
                </div>

                <Alert className="bg-yellow-400/20 border-yellow-500/50 text-yellow-800">
                    <Coins className="h-4 w-4 !text-yellow-800" />
                    <AlertTitle className="font-bold">You'll get +3 Coins for every share!</AlertTitle>
                </Alert>

                <Button className="w-full" disabled>
                    Sharing Feature Coming Soon
                </Button>

            </CardContent>
            </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
