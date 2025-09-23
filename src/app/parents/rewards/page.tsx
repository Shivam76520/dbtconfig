
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Coins, Award, Users, Map, Trophy, Star } from 'lucide-react';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const parentLeaderboard = [
  { rank: 1, name: "Anita Sharma", points: 250 },
  { rank: 2, name: "You", points: 215 },
  { rank: 3, name: "Rajesh Kumar", points: 180 },
];

export default function RewardsMotivationPage() {
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
        
        <div className="grid gap-8 lg:grid-cols-3">

            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
                {/* Parent Coins & Badges */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Trophy className="text-primary"/> Your Rewards</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-6 md:grid-cols-2">
                        <div className="p-4 bg-secondary rounded-lg">
                            <h3 className="font-semibold text-lg flex items-center gap-2"><Coins className="text-yellow-500"/> Parent Coins</h3>
                            <p className="text-4xl font-bold">215</p>
                            <p className="text-xs text-muted-foreground mt-1">Earned for: Enabling DBT (+20), Watching guide (+5), Sharing (+10)</p>
                        </div>
                        <div className="p-4 bg-secondary rounded-lg">
                            <h3 className="font-semibold text-lg flex items-center gap-2"><Award className="text-yellow-600"/> Smart Parent Badge</h3>
                            <p className="text-2xl font-bold">Silver</p>
                             <Progress value={60} className="h-2 mt-2" />
                            <p className="text-xs text-muted-foreground mt-1">Next: Gold Badge</p>
                        </div>
                    </CardContent>
                </Card>

                {/* My Child's Progress */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Star className="text-primary"/> My Child’s Progress</CardTitle>
                        <CardDescription>See your children's achievements from the Student Portal.</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                           <p>Shivam Upadhyay's Quiz Score: <span className="font-bold">95%</span></p>
                           <Badge>Top Performer</Badge>
                        </div>
                         <div className="flex items-center justify-between p-3 bg-muted rounded-lg">
                           <p>Aakarshika Tiwari's New Badge: <span className="font-bold">"Quiz Whiz"</span></p>
                           <Button size="sm" variant="outline">View Badge</Button>
                        </div>
                    </CardContent>
                </Card>

                {/* Impact Map */}
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Map className="text-primary"/> Community Impact Map</CardTitle>
                        <CardDescription>See how your actions contribute to a larger movement.</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                         <div className="aspect-video w-full rounded-lg overflow-hidden border relative bg-muted flex items-center justify-center">
                            <Image src="https://picsum.photos/seed/impactmap/600/300" alt="Impact Map" layout="fill" objectFit="cover" data-ai-hint="impact map"/>
                             <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
                                <h3 className="text-2xl font-bold">75% DBT Enabled</h3>
                                <p>in your child's school</p>
                             </div>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Right Column (Leaderboard) */}
            <div className="lg:col-span-1">
                 <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Users className="text-primary"/> Parent Leaderboard</CardTitle>
                        <CardDescription>Top parents in your school community.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Rank</TableHead>
                                    <TableHead>Name</TableHead>
                                    <TableHead className="text-right">Points</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {parentLeaderboard.map(p => (
                                    <TableRow key={p.rank} className={p.name === 'You' ? 'bg-primary/10' : ''}>
                                        <TableCell className="font-bold">{p.rank}</TableCell>
                                        <TableCell>
                                            {p.name}
                                            {p.name === 'You' && <Badge variant="secondary" className="ml-2">You</Badge>}
                                            {p.rank === 1 && <Badge variant="default" className="ml-2 bg-yellow-500">Ambassador</Badge>}
                                        </TableCell>
                                        <TableCell className="text-right font-bold">{p.points}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
