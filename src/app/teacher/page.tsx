
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, CheckCircle, AlertTriangle, Clock, Upload, Download, Send, BarChart2, Map, BookDown, MessageSquare, Bot, LifeBuoy } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const studentStatusData = [
  { rollNo: "2408410100057", name: "Shivam Upadhyay", status: "enabled" },
  { rollNo: "2408410100076", name: "Aakarshika Tiwari", status: "not-enabled" },
  { rollNo: "2408410100059", name: "Aarav Sharma", status: "pending" },
];

export default function TeacherDashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8 sm:py-12">
        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-3xl font-headline">
                <User className="h-8 w-8 text-primary" />
                Teacher & School Staff Dashboard
              </CardTitle>
              <CardDescription>Tools to manage and monitor student DBT status efficiently.</CardDescription>
            </CardHeader>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Check Student Status</CardTitle>
                  <CardDescription>Enter a Roll No or upload a CSV to see status.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Select>
                      <SelectTrigger className="w-full sm:w-[180px]">
                        <SelectValue placeholder="Select Class" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="class-5a">Class 5A</SelectItem>
                        <SelectItem value="class-5b">Class 5B</SelectItem>
                        <SelectItem value="class-5c">Class 5C</SelectItem>
                      </SelectContent>
                    </Select>
                    <Input placeholder="Enter Roll No..." className="flex-grow" />
                    <Button>Check</Button>
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-background px-2 text-muted-foreground">Or</span>
                  </div>
                  <Button variant="outline" className="w-full">
                    <Upload className="mr-2 h-4 w-4" /> Upload Student CSV
                  </Button>
                  
                  <div className="mt-6">
                    <h3 className="font-semibold mb-2">Results:</h3>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Roll No</TableHead>
                          <TableHead>Student Name</TableHead>
                          <TableHead className="text-right">Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {studentStatusData.map(student => (
                          <TableRow key={student.rollNo}>
                            <TableCell>{student.rollNo}</TableCell>
                            <TableCell>{student.name}</TableCell>
                            <TableCell className="text-right">
                              {student.status === 'enabled' && <Badge variant="default" className="bg-green-500"><CheckCircle className="mr-1 h-3 w-3"/>Enabled</Badge>}
                              {student.status === 'not-enabled' && <Badge variant="destructive"><AlertTriangle className="mr-1 h-3 w-3"/>Not Enabled</Badge>}
                              {student.status === 'pending' && <Badge variant="secondary" className="bg-blue-500 text-white"><Clock className="mr-1 h-3 w-3"/>Pending</Badge>}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                  <div className="flex gap-4 pt-4">
                      <Button variant="outline" className="w-full"><Download className="mr-2"/>Export Report</Button>
                      <Button className="w-full"><Send className="mr-2"/>Send Reminders</Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                  <CardHeader>
                      <CardTitle className="flex items-center gap-2"><BarChart2 className="text-primary"/>Reports & Analytics</CardTitle>
                      <CardDescription>Visualize DBT enablement across your school and region.</CardDescription>
                  </CardHeader>
                  <CardContent className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <h4 className="font-semibold">Class Performance</h4>
                        <div className="h-40 bg-muted rounded-lg flex items-center justify-center text-sm text-muted-foreground">Class/School Graphs Placeholder</div>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold">Geo Heatmap</h4>
                        <div className="h-40 bg-muted rounded-lg flex items-center justify-center">
                            <Image src="https://picsum.photos/seed/heatmap/600/400" alt="Heatmap placeholder" width={300} height={150} className="rounded-lg object-cover" data-ai-hint="map heatmap"/>
                        </div>
                      </div>
                      <div className="md:col-span-2 space-y-2">
                        <h4 className="font-semibold">Lagging Schools List</h4>
                        <ul className="list-disc pl-5 text-sm text-muted-foreground">
                            <li>Govt. Primary School, Sector 12 (45% Enabled)</li>
                            <li>Public Model School, Village North (52% Enabled)</li>
                        </ul>
                      </div>
                  </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><BookDown className="text-primary"/>Awareness Toolkit</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">Download posters, videos, and guides to share.</p>
                  <Button className="w-full">Download Resources</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2"><LifeBuoy className="text-primary"/>Help & Support</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start"><Bot className="mr-2"/> AI FAQs</Button>
                  <Button variant="outline" className="w-full justify-start"><MessageSquare className="mr-2"/>Helpdesk Ticketing</Button>
                  <Button variant="secondary" className="w-full justify-start"><Send className="mr-2"/>Live Chat</Button>
                </CardContent>
              </Card>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
