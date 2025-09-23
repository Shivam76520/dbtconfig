import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Shield, BarChart2, Map, TrendingUp, Send, Database, AlertCircle, Trophy, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const adminSections = [
    {
        title: "School-wise Reports",
        icon: BarChart2,
        description: "View summaries, filter, and export data for all schools.",
        href: "#"
    },
    {
        title: "Region & Community Mapping",
        icon: Map,
        description: "Use an interactive map to see region details and progress.",
        href: "#"
    },
    {
        title: "Progress & Trend Analysis",
        icon: TrendingUp,
        description: "Analyze historical data with graphs and charts.",
        href: "#"
    },
    {
        title: "Notifications & Campaigns",
        icon: Send,
        description: "Send notifications and manage awareness campaigns.",
        href: "#"
    },
    {
        title: "Data Management",
        icon: Database,
        description: "Upload, verify, and manage school data and profiles.",
        href: "#"
    },
    {
        title: "Issue Reporting & Support",
        icon: AlertCircle,
        description: "Flag cases and handle support requests from staff and parents.",
        href: "#"
    },
];

export default function AdminDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <Card>
          <CardHeader className="text-center">
             <div className="mx-auto bg-primary/10 w-fit p-4 rounded-full">
                <Shield className="h-12 w-12 text-primary" />
              </div>
            <CardTitle className="text-3xl font-bold font-headline text-primary">
              Administrator Dashboard
            </CardTitle>
            <CardDescription className="text-lg">
              Comprehensive tools for monitoring and managing the DBT ecosystem.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
             {adminSections.map((section) => (
              <Card key={section.title} className="group overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                <Link href={section.href} className="block h-full">
                  <div className="p-6 bg-card">
                    <section.icon className="h-10 w-10 mb-4 text-primary" />
                    <h3 className="text-xl font-bold text-card-foreground">{section.title}</h3>
                    <p className="text-muted-foreground mt-2 h-12">{section.description}</p>
                  </div>
                  <div className="px-6 py-3 bg-muted/50 flex items-center justify-between text-primary font-semibold">
                    <span>Manage</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Card>
            ))}
             <Card className="group overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out bg-secondary">
                <Link href="#" className="block h-full">
                  <div className="p-6">
                    <Trophy className="h-10 w-10 mb-4 text-secondary-foreground" />
                    <h3 className="text-xl font-bold text-secondary-foreground">Recognition & Rewards</h3>
                    <p className="text-secondary-foreground/80 mt-2 h-12">View leaderboards and award badges to top-performing schools and staff.</p>
                  </div>
                  <div className="px-6 py-3 bg-secondary-foreground/10 flex items-center justify-between text-secondary-foreground font-semibold">
                    <span>View Leaderboard</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Card>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
