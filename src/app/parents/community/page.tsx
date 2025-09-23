
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, BarChartHorizontal, Map, Users, Trophy } from 'lucide-react';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';

export default function CommunityImpactPage() {
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

            {/* School Level Progress */}
            <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <BarChartHorizontal className="text-primary"/>
                        School-Level Progress
                    </CardTitle>
                    <CardDescription>See the DBT enablement percentage in your child's school.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Class 5A</span>
                            <span className="text-sm font-medium">90%</span>
                        </div>
                        <Progress value={90} />
                    </div>
                     <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Class 5B (Your Child's Class)</span>
                            <span className="text-sm font-medium">75%</span>
                        </div>
                        <Progress value={75} />
                    </div>
                     <div>
                        <div className="flex justify-between mb-1">
                            <span className="text-sm font-medium">Class 5C</span>
                            <span className="text-sm font-medium">60%</span>
                        </div>
                        <Progress value={60} />
                    </div>
                </CardContent>
            </Card>

            {/* Parent Challenges */}
            <Card className="row-span-2 flex flex-col">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Trophy className="text-yellow-500"/>
                        Parent Challenges
                    </CardTitle>
                    <CardDescription>Help the community and earn rewards!</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between space-y-4">
                   <div className="p-4 border rounded-lg text-center">
                     <h4 className="font-semibold">Community Helper</h4>
                     <p className="text-sm text-muted-foreground">Bring 2 more parents to enable DBT for their children.</p>
                     <div className="flex items-center justify-center gap-2 mt-2">
                         <Users className="h-4 w-4"/>
                         <span>0 / 2 Parents Helped</span>
                     </div>
                   </div>
                    <div className="p-4 border rounded-lg text-center bg-secondary">
                     <h4 className="font-semibold">Reward</h4>
                     <p className="text-lg font-bold text-primary">+50 Coins</p>
                     <p className="text-sm text-muted-foreground">Special "Community Champion" Badge</p>
                   </div>
                   <Button className="w-full">Accept Challenge</Button>
                </CardContent>
            </Card>

            {/* Area/State Map */}
            <Card className="lg:col-span-2">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Map className="text-primary"/>
                        Area/State Awareness Heatmap
                    </CardTitle>
                    <CardDescription>Red (low awareness) to Green (high awareness).</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="aspect-video w-full rounded-lg overflow-hidden border relative flex items-center justify-center bg-muted">
                        <Image src="https://picsum.photos/seed/heatmap/600/400" alt="Heatmap placeholder" layout="fill" objectFit="cover" data-ai-hint="map heatmap" />
                        <p className="font-bold text-2xl text-white z-10 bg-black/50 p-2 rounded">Heatmap Coming Soon</p>
                    </div>
                </CardContent>
            </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
