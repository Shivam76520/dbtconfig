import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, User, Users, GraduationCap, Shield, HeartHandshake } from "lucide-react";

const roles = [
  {
    href: "/student",
    icon: GraduationCap,
    title: "Kid / Student",
    description: "Check your status, play quizzes, and earn badges!",
    color: "bg-blue-500 hover:bg-blue-600",
  },
  {
    href: "/parents",
    icon: Users,
    title: "Parent / Guardian",
    description: "Manage your children's DBT status and learn more.",
    color: "bg-green-500 hover:bg-green-600",
  },
  {
    href: "/teacher",
    icon: User,
    title: "Teacher / School Staff",
    description: "Track student status and access awareness toolkits.",
    color: "bg-purple-500 hover:bg-purple-600",
  },
  {
    href: "/admin",
    icon: Shield,
    title: "Admin / Official",
    description: "Oversee reports, analytics, and data management.",
    color: "bg-red-500 hover:bg-red-600",
  },
  {
    href: "/volunteer",
    icon: HeartHandshake,
    title: "Volunteer / Other",
    description: "Help your community and spread awareness.",
    color: "bg-yellow-500 hover:bg-yellow-600",
  }
];

export function RoleSelection() {
  return (
    <section id="roles" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold font-headline tracking-tight">Select Your Role</h2>
        <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">
          Access information and resources tailored to your role in the DBT ecosystem.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map((role) => (
          <Card key={role.href} className="group overflow-hidden text-center hover:shadow-xl transition-shadow">
            <Link href={role.href} className="block h-full">
              <CardHeader className="p-6">
                  <div className={`mx-auto w-fit p-4 rounded-full text-white ${role.color} transition-colors`}>
                      <role.icon className="h-10 w-10" />
                  </div>
                <CardTitle className="pt-4 text-2xl font-bold">{role.title}</CardTitle>
                <CardDescription>{role.description}</CardDescription>
              </CardHeader>
              <div className={`px-6 py-3 text-white ${role.color} transition-colors flex items-center justify-center`}>
                <span className="font-semibold">Proceed</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
