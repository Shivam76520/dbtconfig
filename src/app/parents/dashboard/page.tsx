
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, XCircle, Clock, BarChart2, Download, Share2 } from 'lucide-react';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Timeline, TimelineItem, TimelineConnector, TimelineHeader, TimelineTitle, TimelineIcon, TimelineDescription } from '@/components/ui/timeline';


const children = [
    { name: "Shivam Upadhyay", status: "enabled", rollNo: "2408410100057" },
    { name: "Aakarshika Tiwari", status: "not-enabled", rollNo: "2408410100076" },
    { name: "Aarav Sharma", status: "pending", rollNo: "2408410100059" },
]

const timelineEvents = [
    { date: "March 2025", event: "DBT Enabled for Shivam Upadhyay", status: "enabled" },
    { date: "February 2025", event: "Aadhaar Seeding for Aarav", status: "pending" },
    { date: "December 2024", event: "Last scholarship credit received for Shivam Upadhyay", status: "enabled" },
]


export default function FamilyDashboardPage() {
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
        
        <div className="grid gap-8 lg:grid-cols-2">

            {/* All Children View */}
            <Card>
                <CardHeader>
                    <CardTitle>All Children in One View</CardTitle>
                    <CardDescription>Quickly see the DBT status for each of your children.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {children.map(child => (
                        <Card key={child.name} className="p-4 flex items-center justify-between">
                            <div>
                                <h4 className="font-semibold">{child.name}</h4>
                                <p className="text-sm text-muted-foreground">Roll No: {child.rollNo}</p>
                            </div>
                            {child.status === 'enabled' && <Badge variant="default" className="bg-green-500"><CheckCircle className="mr-1 h-3 w-3"/>Enabled</Badge>}
                            {child.status === 'not-enabled' && <Badge variant="destructive"><XCircle className="mr-1 h-3 w-3"/>Not Enabled</Badge>}
                            {child.status === 'pending' && <Badge variant="secondary" className="bg-blue-500 text-white"><Clock className="mr-1 h-3 w-3"/>Pending</Badge>}
                        </Card>
                    ))}
                    <Button className="w-full">Check Detailed Status</Button>
                </CardContent>
            </Card>

            {/* Progress Timeline */}
            <Card>
                <CardHeader>
                    <CardTitle>Progress Timeline (Last 12 Months)</CardTitle>
                     <CardDescription>Track key events and milestones for your family's DBT journey.</CardDescription>
                </CardHeader>
                <CardContent>
                   <Timeline>
                        {timelineEvents.map((item, index) => (
                        <TimelineItem key={index}>
                            <TimelineConnector />
                            <TimelineHeader>
                            <TimelineIcon>
                                {item.status === 'enabled' && <CheckCircle className="h-4 w-4 text-green-500"/>}
                                {item.status === 'pending' && <Clock className="h-4 w-4 text-blue-500"/>}
                            </TimelineIcon>
                            <TimelineTitle>{item.event}</TimelineTitle>
                            </TimelineHeader>
                            <TimelineDescription>{item.date}</TimelineDescription>
                        </TimelineItem>
                        ))}
                    </Timeline>
                </CardContent>
            </Card>

            {/* Export/Share Option */}
            <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle>Export & Share</CardTitle>
                    <CardDescription>Download a complete DBT report for your family or share it.</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row gap-4">
                    <Button className="w-full">
                        <Share2 className="mr-2"/> Send Report to WhatsApp
                    </Button>
                    <Button variant="outline" className="w-full">
                        <Download className="mr-2"/> Download as PDF
                    </Button>
                </CardContent>
            </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
