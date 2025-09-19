import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  const navLinks = [
    { name: "About DBT", href: "#learn" },
    { name: "Key Benefits", href: "#benefits" },
    { name: "Scam Reporting", href: "#scam-checker" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
            <Button asChild>
                <a href="#resources">
                    Official Links
                </a>
            </Button>
            <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
