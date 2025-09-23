
'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Video, Newspaper, Share2, Volume2, Download, RefreshCw, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const videoTopics = [
  {
    title: "Why DBT matters for your child?",
    videoId: "LXlA4fA232I", // Placeholder Video: "What is Direct Benefit Transfer?"
    hint: "child smiling"
  },
  {
    title: "How to link Aadhaar in 3 steps",
    videoId: "O_5gKy251i4", // Placeholder Video: "How to Seed Aadhaar with Bank Account"
    hint: "person phone"
  },
  {
    title: "Common mistakes parents make",
    videoId: "R40aMh3iT4E", // Placeholder Video: "Financial Mistakes to Avoid"
    hint: "confused person"
  }
];

const infographicCards = [
  {
    title: "Step 1: Visit Your Bank",
    img: "https://picsum.photos/seed/infographic1/400/400",
    hint: "bank building"
  },
  {
    title: "Step 2: Fill Seeding Form",
    img: "https://picsum.photos/seed/infographic2/400/400",
    hint: "filling form"
  },
  {
    title: "Step 3: Get Confirmation SMS",
    img: "https://picsum.photos/seed/infographic3/400/400",
    hint: "phone notification"
  }
];

export default function LearnAndAwarePage() {

  const playAudio = (lang: string) => {
    // In a real app, you would use the Web Speech API or an audio file
    const utterance = new SpeechSynthesisUtterance(`This is a voice guide in ${lang}. Please link your Aadhaar with your bank account for DBT.`);
    utterance.lang = lang === 'Hindi' ? 'hi-IN' : 'en-US';
    speechSynthesis.speak(utterance);
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <div className="mb-6">
            <Button asChild variant="outline">
                <Link href="/parents" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Parent Dashboard
                </Link>
            </Button>
        </div>
        
        <div className="space-y-12">
            {/* Short Explainer Videos */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                        <Video className="text-primary"/>
                        Short Explainer Videos (1-2 min)
                    </CardTitle>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-3">
                    {videoTopics.map(video => (
                        <div key={video.title} className="space-y-2">
                            <div className="aspect-video w-full rounded-lg overflow-hidden border">
                                <iframe
                                    className="w-full h-full"
                                    src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
                                    title={video.title}
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                            <h3 className="font-semibold text-center">{video.title}</h3>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Infographic Cards */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                        <Newspaper className="text-primary"/>
                        Infographic Cards
                    </CardTitle>
                    <CardDescription>Swipe to see the steps. Click the share button to send to WhatsApp or Facebook.</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                    <Carousel className="w-full max-w-xs" opts={{loop: true}}>
                      <CarouselContent>
                        {infographicCards.map((card, index) => (
                          <CarouselItem key={index}>
                            <div className="p-1">
                              <Card>
                                <CardContent className="relative flex aspect-square items-center justify-center p-6">
                                    <Image src={card.img} alt={card.title} layout="fill" objectFit="cover" className="rounded-lg" data-ai-hint={card.hint}/>
                                  <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center p-4">
                                    <span className="text-xl font-semibold text-white text-center">{card.title}</span>
                                    <Button size="sm" variant="outline" className="mt-4 bg-transparent text-white border-white hover:bg-white hover:text-black">
                                        <Share2 className="mr-2"/> Share
                                    </Button>
                                  </div>
                                </CardContent>
                              </Card>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2" />
                      <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2" />
                    </Carousel>
                </CardContent>
            </Card>

            {/* Voice Guides */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-2xl">
                        <Volume2 className="text-primary"/>
                        Voice Guides
                    </CardTitle>
                    <CardDescription>Listen to guides in your preferred language.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row items-center justify-center gap-4">
                     <Button size="lg" className="w-full sm:w-auto" onClick={() => playAudio('Hindi')}>Play in Hindi</Button>
                     <Button size="lg" className="w-full sm:w-auto" onClick={() => playAudio('English')}>Play in English</Button>
                     <Button size="lg" variant="outline" className="w-full sm:w-auto"><RefreshCw className="mr-2"/>Listen Again</Button>
                     <Button size="lg" variant="outline" className="w-full sm:w-auto"><Download className="mr-2"/>Download Audio</Button>
                </CardContent>
            </Card>

        </div>
      </main>
      <Footer />
    </div>
  );
}
