import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileCheck, Gamepad2, PlayCircle, Trophy, Share2, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getImagePlaceholder } from '@/lib/placeholder-images';

const dashboardItems = [
  {
    title: "Check My Status",
    description: "See if your DBT is active and earn rewards!",
    icon: FileCheck,
    href: "/student/status",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Play Quiz & Earn Badges",
    description: "Test your knowledge, unlock cool badges, and get coins.",
    icon: Gamepad2,
    href: "/student/quiz",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Watch Cartoon Story",
    description: "Learn about DBT with Bunty and Pinky's adventure.",
    icon: PlayCircle,
    href: "/student/story",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Badges, Leaderboard & Coins",
    description: "Check your rewards, see your rank, and customize your mascot.",
    icon: Trophy,
    href: "/student/rewards",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    title: "Share with Parents",
    description: "Show your parents your cool badges and scores!",
    icon: Share2,
    href: "/student/share",
    color: "from-red-500 to-red-600",
  },
];

export default function StudentDashboardPage() {
  const mascotImage = getImagePlaceholder('student-mascot');
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <div className="flex justify-center items-center gap-4">
               {mascotImage && (
                <Image
                  src={mascotImage.imageUrl}
                  alt={mascotImage.description}
                  width={100}
                  height={100}
                  className="rounded-full border-4 border-primary"
                  data-ai-hint={mascotImage.imageHint}
                />
              )}
              <div>
                <CardTitle className="text-3xl font-bold font-headline text-primary">
                  Welcome, DBT Hero!
                </CardTitle>
                <CardDescription className="text-lg">
                  Choose an activity below to start your adventure.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {dashboardItems.map((item) => (
              <Card key={item.title} className="group overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
                <Link href={item.href} className="block h-full">
                  <div className={`p-6 text-white bg-gradient-to-br ${item.color}`}>
                    <item.icon className="h-12 w-12 mb-4" />
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="opacity-90">{item.description}</p>
                  </div>
                  <div className="px-6 py-3 bg-card flex items-center justify-between text-primary font-semibold">
                    <span>Let's Go!</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Card>
            ))}
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
