
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, PlayCircle, MessageSquare, Coins } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { getImagePlaceholder } from '@/lib/placeholder-images';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function StoryPage() {
  const mascotImage = getImagePlaceholder('student-mascot');

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
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
                <PlayCircle className="h-12 w-12 mx-auto text-primary" />
                <CardTitle className="text-3xl font-bold font-headline">The Story of Bunty vs Pinky</CardTitle>
                <CardDescription>Watch the cartoon to learn about DBT and earn cool rewards!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="aspect-video w-full rounded-lg overflow-hidden border">
                    <iframe
                        className="w-full h-full"
                        src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0" // Placeholder video
                        title="Bunty vs Pinky Cartoon"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>

                <div className="flex flex-col sm:flex-row items-center gap-4 p-4 bg-secondary/50 rounded-lg">
                    {mascotImage && (
                        <Image
                        src={mascotImage.imageUrl}
                        alt={mascotImage.description}
                        width={80}
                        height={80}
                        className="rounded-full border-4 border-primary"
                        />
                    )}
                    <div className="flex-1 text-center sm:text-left">
                        <h4 className="font-bold text-lg flex items-center gap-2 justify-center sm:justify-start">
                            <MessageSquare className="h-5 w-5 text-primary" />
                            A Message from your Mascot!
                        </h4>
                        <p className="text-muted-foreground">
                            "Hey DBT Hero! After watching, don't forget to tell your parents to enable your DBT account so you get your benefits on time!"
                        </p>
                    </div>
                </div>

                <Alert className="bg-yellow-400/20 border-yellow-500/50 text-yellow-800">
                    <Coins className="h-4 w-4 !text-yellow-800" />
                    <AlertTitle className="font-bold">Watch & Win!</AlertTitle>
                    <AlertDescription>
                        You'll get <span className="font-bold">+2 Coins</span> for watching and unlock <span className="font-bold">Bonus Quiz Coins</span>!
                    </AlertDescription>
                </Alert>

            </CardContent>
            </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
