
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Bot, MessageCircle, School } from 'lucide-react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';

export default function HelpSupportPage() {
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
        
        <div className="grid gap-8 md:grid-cols-2">

            {/* AI Chatbot */}
            <Card className="md:col-span-2">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Bot className="text-primary"/>
                        AI Help Assistant
                    </CardTitle>
                    <CardDescription>Ask a question and get an instant answer.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="p-4 bg-muted rounded-lg h-48 overflow-y-auto space-y-3">
                         <div className="flex items-start gap-2">
                            <div className="p-2 bg-primary rounded-full text-primary-foreground">AI</div>
                            <div className="p-3 bg-background rounded-lg">Hello! How can I help you today?</div>
                         </div>
                         <div className="flex items-start gap-2 flex-row-reverse">
                            <div className="p-2 bg-secondary rounded-full text-secondary-foreground">You</div>
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/50 rounded-lg">Why wasn't my DBT credit received?</div>
                         </div>
                    </div>
                    <div className="flex gap-2">
                        <Input placeholder="Type your question here... e.g., 'Which bank to visit?'" />
                        <Button>Send</Button>
                    </div>
                </CardContent>
            </Card>

            {/* WhatsApp Help Desk */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <MessageCircle className="text-green-500"/>
                        WhatsApp Help Desk
                    </CardTitle>
                    <CardDescription>Chat with a real human support agent in your preferred language.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                        <MessageCircle className="mr-2"/> Start Chat on WhatsApp
                    </Button>
                     <p className="text-xs text-muted-foreground mt-2 text-center">Available in 22 languages. Response within 5-10 minutes.</p>
                </CardContent>
            </Card>

            {/* Ask School */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <School className="text-primary"/>
                        Ask School
                    </CardTitle>
                    <CardDescription>Send a message directly to your child's teacher or school admin.</CardDescription>
                </CardHeader>
                <CardContent>
                     <Button variant="outline" className="w-full">
                        <School className="mr-2"/> Request Status Update from School
                    </Button>
                    <p className="text-xs text-muted-foreground mt-2 text-center">A pre-filled message will be prepared for you to send.</p>
                </CardContent>
            </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
