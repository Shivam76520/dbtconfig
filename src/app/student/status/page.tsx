
'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowLeft, Award, Bomb, Coins, QrCode, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import Confetti from 'react-confetti';
import { useWindowSize } from 'react-use';


export default function CheckStatusPage() {
    const [rollNo, setRollNo] = useState('');
    const [schoolCode, setSchoolCode] = useState('');
    const [status, setStatus] = useState<'idle' | 'enabled' | 'not-enabled'>('idle');
    const [showConfetti, setShowConfetti] = useState(false);
    const { width, height } = useWindowSize();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Mock API call - Check if roll number is the special one
        if (rollNo === '2408410100057' && schoolCode.length > 0) {
            setStatus('enabled');
            setShowConfetti(true);
        } else {
            setStatus('not-enabled');
            setShowConfetti(false);
        }
    };

    const handleReset = () => {
        setStatus('idle');
        setRollNo('');
        setSchoolCode('');
        setShowConfetti(false);
    };
    
    useEffect(() => {
        if(showConfetti) {
            const timer = setTimeout(() => setShowConfetti(false), 8000); // Stop confetti after 8 seconds
            return () => clearTimeout(timer);
        }
    }, [showConfetti]);

  const renderContent = () => {
    switch (status) {
      case 'enabled':
        return (
          <div className="text-center animate-in fade-in-50 zoom-in-95 duration-500">
            {showConfetti && <Confetti width={width} height={height} recycle={false} numberOfPieces={400}/>}
            <Sparkles className="h-24 w-24 text-yellow-400 mx-auto animate-pulse" />
            <h2 className="text-4xl font-bold text-green-500 mt-4">DBT Hero!</h2>
            <p className="text-muted-foreground mt-2">Congratulations! Your DBT is enabled.</p>
            <div className="mt-6 space-y-3">
                <Alert className="bg-green-500/10 border-green-500/50 text-green-700">
                  <Award className="h-4 w-4 !text-green-700" />
                  <AlertTitle>+5 Coins & New Badge Unlocked!</AlertTitle>
                </Alert>
                <Alert>
                  <AlertDescription>
                    A notification has been sent to your parent/guardian via WhatsApp/SMS.
                  </AlertDescription>
                </Alert>
            </div>
            <Button onClick={handleReset} className="mt-8">Check Another Status</Button>
          </div>
        );
      case 'not-enabled':
        return (
          <div className="text-center animate-in fade-in-50 zoom-in-95 duration-500">
             <div className="relative inline-block">
                <Bomb className="h-24 w-24 text-destructive mx-auto" />
                <div className="absolute top-0 left-0 h-full w-full bg-destructive rounded-full animate-ping opacity-25"></div>
            </div>
            <h2 className="text-4xl font-bold text-destructive mt-4">Not Enabled</h2>
            <p className="text-muted-foreground mt-2">Your DBT is not enabled for this account.</p>
             <div className="mt-6 space-y-3">
                <Alert variant="destructive">
                  <Coins className="h-4 w-4" />
                  <AlertTitle>You earned +2 Coins for checking!</AlertTitle>
                </Alert>
                <Alert>
                  <AlertDescription>
                    A notification with steps to enable DBT has been sent to your parent/guardian.
                  </AlertDescription>
                </Alert>
            </div>
            <Button onClick={handleReset} className="mt-8">Try Again</Button>
          </div>
        );
      case 'idle':
      default:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Check Your DBT Status</CardTitle>
              <CardDescription>
                Enter your Roll Number and School Code or scan a QR code to see if you're a DBT Hero.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="rollNo">Roll Number</Label>
                  <Input 
                    id="rollNo" 
                    placeholder="e.g., 2408410100057" 
                    value={rollNo}
                    onChange={(e) => setRollNo(e.target.value)}
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="schoolCode">School Code</Label>
                  <Input 
                    id="schoolCode" 
                    placeholder="Enter your school code"
                    value={schoolCode}
                    onChange={(e) => setSchoolCode(e.target.value)}
                    required
                  />
                </div>
                <Button type="submit" className="w-full">Check Status</Button>
              </form>
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or</span>
                </div>
              </div>
              <Button variant="outline" className="w-full">
                <QrCode className="mr-2 h-4 w-4" />
                Scan QR Code
              </Button>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12 flex flex-col items-center">
        <div className="w-full max-w-md">
            <div className="mb-4">
                <Button asChild variant="outline">
                    <Link href="/student" className="flex items-center gap-2">
                        <ArrowLeft className="h-4 w-4" />
                        Back to Dashboard
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

