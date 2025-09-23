
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, BookOpen, Wrench, LayoutDashboard, Trophy, HelpCircle, HeartHandshake, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const dashboardItems = [
  {
    title: "My Children (DBT Status)",
    description: "Check the DBT status for all your children in one place.",
    icon: Users,
    href: "/parents/status",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Learn & Aware",
    description: "Access simple guides, videos, and resources about DBT.",
    icon: BookOpen,
    href: "/parents/learn",
    color: "from-green-500 to-green-600",
  },
  {
    title: "Action Tools",
    description: "Find tools to seed Aadhaar, check bank links, and more.",
    icon: Wrench,
    href: "/parents/tools",
    color: "from-purple-500 to-purple-600",
  },
  {
    title: "Family Dashboard",
    description: "View a complete financial overview of government benefits.",
    icon: LayoutDashboard,
    href: "/parents/dashboard",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    title: "Rewards & Motivation",
    description: "See your children's badges and encourage their learning.",
    icon: Trophy,
    href: "/parents/rewards",
    color: "from-red-500 to-red-600",
  },
  {
    title: "Help & Support",
    description: "Get answers to your questions and find contact information.",
    icon: HelpCircle,
    href: "/parents/help",
    color: "from-indigo-500 to-indigo-600",
  },
  {
    title: "Community Impact",
    description: "Learn how DBT is transforming your local community.",
    icon: HeartHandshake,
    href: "/parents/community",
    color: "from-pink-500 to-pink-600",
  },
];

export default function ParentsDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <Card className="shadow-lg">
          <CardHeader className="text-center">
             <div className="mx-auto bg-primary/10 w-fit p-4 rounded-full">
                <Users className="h-12 w-12 text-primary" />
              </div>
            <CardTitle className="text-3xl font-bold font-headline text-primary">
              Parent & Guardian Dashboard
            </CardTitle>
            <CardDescription className="text-lg">
              Your central hub for managing your family's DBT benefits.
            </CardDescription>
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
                    <span>Explore</span>
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
