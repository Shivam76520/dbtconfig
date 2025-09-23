
'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from "@/components/ui/checkbox"
import { ArrowLeft, Map, Phone, ListChecks, ExternalLink, Bell, Calendar as CalendarIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ActionToolsPage() {
  const items = [
    { id: "aadhaar", label: "Aadhaar Card of Child & Parent" },
    { id: "passbook", label: "Bank Passbook of Child" },
    { id: "school-id", label: "Child's School ID Card" },
    { id: "photo", label: "Passport-size Photo" },
  ];

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

            {/* Bank / CSC Locator */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Map className="text-primary"/>
                        Bank / CSC Locator
                    </CardTitle>
                    <CardDescription>Find your nearest bank branch or Common Service Center.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="aspect-video w-full rounded-lg overflow-hidden border relative">
                        <Image src="https://picsum.photos/seed/map/600/400" alt="Map placeholder" layout="fill" objectFit="cover" data-ai-hint="map location" />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <Button variant="secondary">View on Map</Button>
                        </div>
                    </div>
                     <div className="text-sm text-muted-foreground">
                        <p><strong>Example:</strong> State Bank of India, Main Market</p>
                        <p><strong>Hours:</strong> 10:00 AM - 4:00 PM (Mon-Fri)</p>
                    </div>
                    <div className="flex gap-4">
                        <Button className="w-full">Get Directions</Button>
                        <Button variant="outline" className="w-full">
                            <Phone className="mr-2"/> Call Bank
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Document Checklist */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <ListChecks className="text-primary"/>
                        Document Checklist
                    </CardTitle>
                    <CardDescription>Make sure you have everything you need before your visit.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-3">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="flex flex-row items-center space-x-3 space-y-0 rounded-md border p-4"
                        >
                          <Checkbox id={item.id} />
                          <label
                            htmlFor={item.id}
                            className="font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {item.label}
                          </label>
                        </div>
                      ))}
                    </div>
                     <Button className="w-full">Mark All as Ready</Button>
                </CardContent>
            </Card>

            {/* Govt Portal Links */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <ExternalLink className="text-primary"/>
                        Govt. Portal Links
                    </CardTitle>
                    <CardDescription>Access official websites for more information and services.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                    <Button asChild variant="outline" className="w-full justify-between">
                        <Link href="https://uidai.gov.in/" target="_blank">
                            UIDAI Official Website <ExternalLink className="h-4 w-4"/>
                        </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full justify-between">
                        <Link href="https://dbtbharat.gov.in/" target="_blank">
                            DBT Bharat Portal <ExternalLink className="h-4 w-4"/>
                        </Link>
                    </Button>
                     <Button asChild variant="outline" className="w-full justify-between">
                        <Link href="https://www.npci.org.in/" target="_blank">
                           NPCI Website <ExternalLink className="h-4 w-4"/>
                        </Link>
                    </Button>
                </CardContent>
            </Card>

            {/* Reminders */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                        <Bell className="text-primary"/>
                        Set Reminders
                    </CardTitle>
                    <CardDescription>Get a notification for your planned bank visit.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground">Don't forget! Set a reminder to visit the bank and complete the DBT seeding process for your child.</p>
                    <Button className="w-full">
                        <Bell className="mr-2"/> Send SMS/WhatsApp Reminder
                    </Button>
                    <Button variant="outline" className="w-full">
                        <CalendarIcon className="mr-2"/> Add to Family Calendar
                    </Button>
                </CardContent>
            </Card>

        </div>
      </main>
      <Footer />
    </div>
  );
}
