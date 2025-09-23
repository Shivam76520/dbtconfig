
'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { ArrowLeft, CheckCircle, XCircle, AlertTriangle, Download, Share2, Calendar, Landmark, School, HelpCircle, Sparkles, Trophy, Clock } from 'lucide-react';
import Link from 'next/link';
import { Progress } from '@/components/ui/progress';

type Status = 'idle' | 'enabled' | 'not-enabled' | 'pending';

export default function MyChildrenStatusPage() {
  const [rollNo, setRollNo] = useState('');
  const [schoolCode, setSchoolCode] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (rollNo === '2408410100057') {
      setStatus('enabled');
    } else if (rollNo === 'pending123') {
        setStatus('pending');
    } else {
      setStatus('not-enabled');
    }
  };

  const handleReset = () => {
    setStatus('idle');
    setRollNo('');
    setSchoolCode('');
  };

  const renderContent = () => {
    if (!isClient) {
      return null;
    }
    
    switch (status) {
      case 'enabled':
        return (
          <Card className="border-green-500 bg-green-500/5 animate-in fade-in-50">
            <CardHeader className="text-center">
                <div className="mx-auto bg-green-100 dark:bg-green-900/50 p-4 rounded-full w-fit">
                    <Sparkles className="h-16 w-16 text-green-500" />
                </div>
              <CardTitle className="text-3xl font-bold text-green-500">Congratulations! Your child is a DBT Hero</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-lg"><strong>Last Credit Received:</strong> ₹1,200 on 25th March 2025</p>
                <p className="text-muted-foreground">Next scholarship amount is expected by 25th March 2026.</p>
              </div>
              <div className="flex gap-4">
                  <Button variant="outline" className="w-full"><Download className="mr-2"/>Download Proof</Button>
                  <Button className="w-full"><Share2 className="mr-2" />Share Status</Button>
              </div>
              <Alert className="bg-yellow-400/20 border-yellow-500/50 text-yellow-800">
                <Trophy className="h-4 w-4 !text-yellow-800" />
                <AlertTitle>You've earned +10 Parent Coins!</AlertTitle>
              </Alert>
              <Button onClick={handleReset} variant="ghost" className="w-full">Check another child's status</Button>
            </CardContent>
          </Card>
        );
      case 'not-enabled':
        return (
          <Card className="border-destructive bg-destructive/5 animate-in fade-in-50">
            <CardHeader className="text-center">
                <div className="mx-auto bg-red-100 dark:bg-red-900/50 p-4 rounded-full w-fit">
                    <AlertTriangle className="h-16 w-16 text-destructive" />
                </div>
              <CardTitle className="text-3xl font-bold text-destructive">DBT Not Enabled</CardTitle>
              <CardDescription>Follow these steps to enable DBT for your child.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-3 text-left">
                    <div className="flex items-start gap-4 p-3 rounded-lg border">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">1</div>
                        <div>
                            <h4 className="font-semibold">Visit Your Bank Branch</h4>
                            <p className="text-sm text-muted-foreground">Go to the bank where your child has an account.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-3 rounded-lg border">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">2</div>
                        <div>
                            <h4 className="font-semibold">Submit Aadhaar Seeding Form</h4>
                            <p className="text-sm text-muted-foreground">Fill and submit the DBT/Aadhaar seeding consent form.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-3 rounded-lg border">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">3</div>
                        <div>
                            <h4 className="font-semibold">Confirmation</h4>
                            <p className="text-sm text-muted-foreground">You will receive an SMS from the bank once seeding is complete (usually within 48 hours).</p>
                        </div>
                    </div>
                </div>

              <Button className="w-full"><Calendar className="mr-2" />Set Reminder for Bank Visit</Button>
               <Alert className="bg-yellow-400/20 border-yellow-500/50 text-yellow-800">
                <Trophy className="h-4 w-4 !text-yellow-800" />
                <AlertTitle>+5 Parent Coins for starting the process!</AlertTitle>
              </Alert>
              <Button onClick={handleReset} variant="ghost" className="w-full">Check status again later</Button>
            </CardContent>
          </Card>
        );
    case 'pending':
        return (
             <Card className="border-blue-500 bg-blue-500/5 animate-in fade-in-50">
                <CardHeader className="text-center">
                     <div className="mx-auto bg-blue-100 dark:bg-blue-900/50 p-4 rounded-full w-fit">
                        <Clock className="h-16 w-16 text-blue-500" />
                    </div>
                    <CardTitle className="text-3xl font-bold text-blue-500">Status: Pending</CardTitle>
                    <CardDescription>Your request is currently under process.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div>
                        <div className="flex justify-between mb-1">
                            <Label>Progress</Label>
                            <Label>50% Complete (2 steps left)</Label>
                        </div>
                        <Progress value={50} className="w-full" />
                    </div>
                    <div className="space-y-4">
                         <div className="flex items-center gap-4">
                            <CheckCircle className="h-6 w-6 text-green-500"/>
                            <p className="font-medium">Application submitted to school</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <CheckCircle className="h-6 w-6 text-green-500"/>
                            <p className="font-medium">School verified details</p>
                        </div>
                         <div className="flex items-center gap-4 animate-pulse">
                            <Clock className="h-6 w-6 text-blue-500"/>
                            <p className="font-medium text-blue-600">Pending verification from Bank</p>
                        </div>
                        <div className="flex items-center gap-4 opacity-50">
                            <XCircle className="h-6 w-6"/>
                            <p>DBT Enabled</p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                         <Button variant="outline" className="w-full"><School className="mr-2" />Ask School</Button>
                         <Button variant="outline" className="w-full"><Landmark className="mr-2"/>Ask Bank</Button>
                    </div>
                    <Alert className="bg-yellow-400/20 border-yellow-500/50 text-yellow-800">
                        <Trophy className="h-4 w-4 !text-yellow-800" />
                        <AlertTitle>+2 Parent Coins for following up!</AlertTitle>
                    </Alert>
                    <Button onClick={handleReset} variant="ghost" className="w-full">Check another child's status</Button>
                </CardContent>
            </Card>
        );
      case 'idle':
      default:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Check Your Child's DBT Status</CardTitle>
              <CardDescription>Enter their Roll Number and School Code to see the status.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="rollNo">Roll Number</Label>
                  <Input 
                    id="rollNo" 
                    placeholder="e.g., 2408410100057 or pending123" 
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="schoolCode">School Code</Label>
                  <Input 
                    id="schoolCode" 
                    placeholder="Enter your child's school code"
                    value={schoolCode}
                    onChange={(e) => setSchoolCode(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Check Status</Button>
              </form>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12 flex flex-col items-center">
        <div className="w-full max-w-lg">
            <div className="mb-4">
                <Button asChild variant="outline">
                    <Link href="/parents" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Parent Dashboard
                    </Link>
                </Button>
            </div>
            {renderContent()}
        </div>
      </main>
      <Footer />
    </div>
  );
}
