import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Lightbulb } from "lucide-react";

const resources = [
  {
    title: "UIDAI Official Website",
    description: "The primary source for all Aadhaar-related information and services.",
    href: "https://uidai.gov.in/",
  },
  {
    title: "DBT Bharat Portal",
    description: "Official portal for Direct Benefit Transfer schemes and information.",
    href: "https://dbtbharat.gov.in/",
  },
  {
    title: "National Payments Corporation of India (NPCI)",
    description: "Learn about the technology behind Aadhaar-based payments.",
    href: "https://www.npci.org.in/",
  },
  {
    title: "Cyber Crime Reporting Portal",
    description: "Report online financial fraud and other cybercrimes.",
    href: "https://cybercrime.gov.in/",
  },
];

export function Resources() {
  return (
    <section id="resources">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-primary" />
            Official Resources
          </CardTitle>
          <CardDescription>
            For further information, always refer to official sources.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {resources.map((resource) => (
            <div key={resource.title} className="p-4 border rounded-lg flex items-center justify-between">
              <div>
                <h4 className="font-semibold">{resource.title}</h4>
                <p className="text-sm text-muted-foreground">{resource.description}</p>
              </div>
              <Button variant="ghost" size="icon" asChild>
                <a href={resource.href} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${resource.title}`}>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
