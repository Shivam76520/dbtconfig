import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const updates = [
  {
    title: "New Scholarship DBT Scheme Announced",
    date: "July 2024",
    category: "New Scheme",
  },
  {
    title: "Aadhaar e-KYC Update Deadline Extended",
    date: "June 2024",
    category: "Announcement",
  },
  {
    title: "Security Advisory: Beware of Fake Aadhaar Update SMS",
    date: "June 2024",
    category: "Security",
  },
];

export function Updates() {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-6 w-6 text-primary" />
            Latest Updates
          </CardTitle>
          <CardDescription>
            Recent news and announcements related to Aadhaar and DBT.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {updates.map((update) => (
            <div key={update.title} className="flex items-start gap-4">
              <div className="p-2 bg-muted rounded-full">
                <FileText className="h-5 w-5 text-muted-foreground" />
              </div>
              <div>
                <h4 className="font-semibold">{update.title}</h4>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <p>{update.date}</p>
                    <Badge variant={update.category === "Security" ? "destructive" : "secondary"}>
                      {update.category}
                    </Badge>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
