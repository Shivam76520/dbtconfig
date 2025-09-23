
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeartHandshake, FileCheck, BookOpen, Bell, LifeBuoy, User, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const volunteerSections = [
    {
        title: "Check DBT Status",
        icon: FileCheck,
        description: "Help community members check their DBT status using their roll number.",
        href: "#",
    },
    {
        title: "Awareness Content",
        icon: BookOpen,
        description: "Browse and download posters, videos, and guides to share.",
        href: "#",
    },
    {
        title: "Notifications & Announcements",
        icon: Bell,
        description: "View the latest updates, campaigns, and notices.",
        href: "#",
    },
    {
        title: "Feedback & Support",
        icon: LifeBuoy,
        description: "Submit issues or feedback to help improve the system.",
        href: "#",
    },
     {
        title: "Profile & Settings",
        icon: User,
        description: "Update your information and preferences.",
        href: "#",
    },
];


export default function VolunteerDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <Card className="shadow-lg">
           <CardHeader className="text-center">
             <div className="mx-auto bg-primary/10 w-fit p-4 rounded-full">
                <HeartHandshake className="h-12 w-12 text-primary" />
              </div>
            <CardTitle className="text-3xl font-bold font-headline text-primary">
              Volunteer Dashboard
            </CardTitle>
             <CardDescription className="text-lg">
              Thank you for helping our community! Here are your tools.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="text-center p-4 border rounded-lg bg-secondary">
                <h3 className="font-semibold">Login via Aadhaar + OTP</h3>
                <p className="text-sm text-muted-foreground mb-2">This feature will be available soon. For now, you can access the tools below.</p>
                <Button disabled>Login with Aadhaar</Button>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {volunteerSections.map((section) => (
                <Card key={section.title} className="group overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out">
                    <Link href={section.href} className="block h-full">
                    <div className="p-6 bg-card">
                        <section.icon className="h-10 w-10 mb-4 text-primary" />
                        <h3 className="text-xl font-bold text-card-foreground">{section.title}</h3>
                        <p className="text-muted-foreground mt-2 h-12">{section.description}</p>
                    </div>
                    <div className="px-6 py-3 bg-muted/50 flex items-center justify-between text-primary font-semibold">
                        <span>Access</span>
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </div>
                    </Link>
                </Card>
                ))}
            </div>

          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
