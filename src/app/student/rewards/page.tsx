
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, Award, ShieldCheck, ShieldOff, Star, Trophy, PiggyBank, Users } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const collectedBadges = [
  { name: "DBT Beginner", icon: ShieldCheck, description: "Checked your status for the first time." },
  { name: "Quiz Whiz", icon: Star, description: "Scored 100% on a quiz." },
  { name: "First Steps", icon: Award, description: "Completed your first activity." },
];

const lockedBadges = [
    { name: "DBT Champion", icon: ShieldOff, description: "Help 5 friends check their status." },
    { name: "Perfect Streak", icon: ShieldOff, description: "Answer 10 quiz questions correctly in a row." },
    { name: "Story Master", icon: ShieldOff, description: "Watch all cartoon stories." },
];

const schoolLeaderboard = [
    { rank: 1, name: "Shivam Upadhyay", coins: 300 },
    { rank: 2, name: "Aakarshika Tiwari", coins: 250 },
    { rank: 3, name: "Vaishnavi", coins: 200 },
    { rank: 4, name: "Ambika", coins: 200 },
    { rank: 5, name: "Raunak", coins: 200 },
    { rank: 6, name: "Akash", coins: 200 },
];

const areaLeaderboard = [
    { rank: 1, name: "Shivam Upadhyay", coins: 500 },
    { rank: 2, name: "Aakarshika Tiwari", coins: 400 },
    { rank: 3, name: "Priya K.", coins: 307 },
    { rank: 4, name: "Zoya M.", coins: 307 },
    { rank: 5, name: "Harsh P.", coins: 307 },
    { rank: 6, name: "Ravi S.", coins: 307 },
];


export default function RewardsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <div className="mb-4">
            <Button asChild variant="outline">
                <Link href="/student" className="flex items-center gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Dashboard
                </Link>
            </Button>
        </div>
        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <Trophy className="h-12 w-12 mx-auto text-yellow-500" />
            <CardTitle className="text-3xl font-bold font-headline text-primary">Your Rewards Hub</CardTitle>
            <CardDescription>
              Check out your awesome badges, leaderboard rank, and coin balance!
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-8 lg:grid-cols-2">

            {/* Badges Section */}
            <Card className="flex flex-col">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-6 w-6 text-primary" />
                  My Badge Collection
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div>
                  <h4 className="font-semibold mb-2 text-secondary-foreground">Collected ({collectedBadges.length})</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    {collectedBadges.map(badge => (
                      <div key={badge.name} className="flex flex-col items-center text-center p-2 rounded-lg bg-green-100 dark:bg-green-900/50">
                        <badge.icon className="h-10 w-10 text-green-500" />
                        <span className="text-sm font-semibold mt-1">{badge.name}</span>
                        <p className="text-xs text-muted-foreground">{badge.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-muted-foreground">Locked ({lockedBadges.length})</h4>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                     {lockedBadges.map(badge => (
                      <div key={badge.name} className="flex flex-col items-center text-center p-2 rounded-lg bg-muted/50 opacity-60">
                        <badge.icon className="h-10 w-10 text-muted-foreground" />
                        <span className="text-sm font-semibold mt-1">{badge.name}</span>
                         <p className="text-xs text-muted-foreground">{badge.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-8">
                {/* Leaderboard Section */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Trophy className="h-6 w-6 text-primary" />
                            Leaderboard
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Tabs defaultValue="school">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="school">School</TabsTrigger>
                                <TabsTrigger value="area">Area</TabsTrigger>
                            </TabsList>
                            <TabsContent value="school">
                                <LeaderboardTable data={schoolLeaderboard} currentUser="Shivam Upadhyay" />
                            </TabsContent>
                            <TabsContent value="area">
                                 <LeaderboardTable data={areaLeaderboard} currentUser="Shivam Upadhyay" />
                            </TabsContent>
                        </Tabs>
                    </CardContent>
                </Card>

                 {/* Coin Wallet Section */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <PiggyBank className="h-6 w-6 text-primary" />
                            Coin Wallet
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                            <span className="text-lg font-medium text-secondary-foreground">Your Balance:</span>
                            <span className="text-2xl font-bold text-yellow-500 flex items-center gap-2">
                                300 <Star className="h-6 w-6"/>
                            </span>
                        </div>
                        <Button className="w-full" disabled>
                            <Users className="mr-2" />
                            Customize Your Mascot (Coming Soon)
                        </Button>
                    </CardContent>
                </Card>
            </div>
            
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}


function LeaderboardTable({ data, currentUser }: { data: {rank: number, name: string, coins: number}[], currentUser: string }) {
    return (
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[50px]">Rank</TableHead>
                    <TableHead>Student</TableHead>
                    <TableHead className="text-right">Coins</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((entry) => (
                    <TableRow key={entry.rank} className={entry.name === currentUser ? 'bg-primary/10' : ''}>
                        <TableCell className="font-medium">{entry.rank}</TableCell>
                        <TableCell>
                          {entry.name}
                          {entry.name === currentUser && <Badge variant="secondary" className="ml-2">You</Badge>}
                        </TableCell>
                        <TableCell className="text-right font-bold text-yellow-600">{entry.coins}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
