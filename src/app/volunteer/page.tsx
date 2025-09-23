
'use client';

import { useState, useEffect } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeartHandshake, FileCheck, BookOpen, Bell, ArrowRight, KeyRound, User } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function VolunteerDashboardPage() {
    const [step, setStep] = useState<'login' | 'otp' | 'dashboard'>('login');
    const [aadhaar, setAadhaar] = useState('');
    const [otp, setOtp] = useState('');
    const [activeTool, setActiveTool] = useState<string | null>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would send the Aadhaar number to your backend to trigger an OTP
        if (aadhaar.length === 12) {
            setStep('otp');
        } else {
            alert("Please enter a valid 12-digit Aadhaar number.");
        }
    };

    const handleOtpSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, you would verify the OTP
        if (otp === '123456') { // Mock OTP
            setStep('dashboard');
        } else {
            alert("Invalid OTP. Please try again.");
        }
    };
    
    const renderLogin = () => (
        <form onSubmit={handleLogin} className="space-y-4">
            <Input 
                type="text" 
                placeholder="Enter 12-digit Aadhaar Number" 
                value={aadhaar}
                onChange={(e) => setAadhaar(e.target.value.replace(/\D/g, ''))}
                maxLength={12}
                required
            />
            <Button type="submit" className="w-full">
                <KeyRound className="mr-2"/>
                Send OTP
            </Button>
        </form>
    );

    const renderOtp = () => (
        <form onSubmit={handleOtpSubmit} className="space-y-4">
             <Alert>
                <AlertDescription>An OTP has been sent to the mobile number linked with your Aadhaar. (Hint: Use 123456)</AlertDescription>
            </Alert>
            <Input 
                type="text" 
                placeholder="Enter 6-digit OTP" 
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                maxLength={6}
                required
            />
            <Button type="submit" className="w-full">
                Login
            </Button>
             <Button variant="link" onClick={() => setStep('login')} className="w-full">
                Back to Aadhaar Entry
            </Button>
        </form>
    );

    const renderDashboard = () => (
        <div className="space-y-6">
            {!activeTool ? (
                 <div className="grid gap-6 md:grid-cols-3">
                    <Card className="group overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out cursor-pointer" onClick={() => setActiveTool('check-status')}>
                        <div className="p-6 bg-card text-center">
                            <FileCheck className="h-10 w-10 mb-4 text-primary mx-auto" />
                            <h3 className="text-xl font-bold text-card-foreground">Check DBT Status</h3>
                            <p className="text-muted-foreground mt-2 h-16">Help community members check their DBT status.</p>
                        </div>
                        <div className="px-6 py-3 bg-muted/50 flex items-center justify-between text-primary font-semibold">
                            <span>Open</span><ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </div>
                    </Card>
                    <Card className="group overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out cursor-pointer" onClick={() => setActiveTool('awareness-content')}>
                        <div className="p-6 bg-card text-center">
                            <BookOpen className="h-10 w-10 mb-4 text-primary mx-auto" />
                            <h3 className="text-xl font-bold text-card-foreground">Awareness Content</h3>
                            <p className="text-muted-foreground mt-2 h-16">Browse and download posters and guides to share.</p>
                        </div>
                        <div className="px-6 py-3 bg-muted/50 flex items-center justify-between text-primary font-semibold">
                            <span>Open</span><ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </div>
                    </Card>
                    <Card className="group overflow-hidden transform hover:-translate-y-1 transition-transform duration-300 ease-in-out cursor-pointer" onClick={() => setActiveTool('notifications')}>
                        <div className="p-6 bg-card text-center">
                            <Bell className="h-10 w-10 mb-4 text-primary mx-auto" />
                            <h3 className="text-xl font-bold text-card-foreground">Notifications</h3>
                            <p className="text-muted-foreground mt-2 h-16">View the latest updates, campaigns, and notices.</p>
                        </div>
                        <div className="px-6 py-3 bg-muted/50 flex items-center justify-between text-primary font-semibold">
                            <span>Open</span><ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </div>
                    </Card>
                </div>
            ) : (
                <div className="space-y-4">
                    <Button onClick={() => setActiveTool(null)} variant="outline">Back to Dashboard</Button>
                    {activeTool === 'check-status' && (
                        <Card>
                            <CardHeader>
                                <CardTitle>Check Community Member's DBT Status</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                 <Input placeholder="Enter member's Aadhaar number..." />
                                 <Button>Check Status</Button>
                            </CardContent>
                        </Card>
                    )}
                    {activeTool === 'awareness-content' && (
                        <Card>
                             <CardHeader>
                                <CardTitle>Browse & Read Content</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Awareness content section coming soon...</p>
                            </CardContent>
                        </Card>
                    )}
                     {activeTool === 'notifications' && (
                        <Card>
                            <CardHeader>
                                <CardTitle>View Latest Updates</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Latest updates section coming soon...</p>
                            </CardContent>
                        </Card>
                    )}
                </div>
            )}
        </div>
    );

    const renderContent = () => {
        if (!isClient) return null;

        switch (step) {
            case 'login':
                return renderLogin();
            case 'otp':
                return renderOtp();
            case 'dashboard':
                return renderDashboard();
            default:
                return renderLogin();
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
                <Card className="shadow-lg max-w-4xl mx-auto">
                    <CardHeader className="text-center">
                        <div className="mx-auto bg-primary/10 w-fit p-4 rounded-full">
                           {step === 'dashboard' ? <User className="h-12 w-12 text-primary" /> : <HeartHandshake className="h-12 w-12 text-primary" />}
                        </div>
                        <CardTitle className="text-3xl font-bold font-headline text-primary">
                            {step === 'dashboard' ? 'Volunteer Hub' : 'Volunteer Login'}
                        </CardTitle>
                        <CardDescription className="text-lg">
                           {step === 'login' && 'Please enter your Aadhaar number to receive an OTP.'}
                           {step === 'otp' && 'Enter the OTP to complete your login.'}
                           {step === 'dashboard' && 'Thank you for helping our community! Here are your tools.'}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        {renderContent()}
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
}
