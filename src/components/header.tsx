import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";

export function Header() {
  const navLinks = [
    { name: "About DBT", href: "/about" },
    { name: "Key Benefits", href: "/benefits" },
    { name: "Scam Reporting", href: "/scam-reporting" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center space-x-2 text-sm font-medium">
          {navLinks.map((link) => (
            <Button asChild variant="ghost" key={link.href}>
              <Link
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.name}
              </Link>
            </Button>
          ))}
        </nav>
        <div className="flex items-center space-x-2">
            <Button asChild>
                <Link href="/#resources">
                    Official Links
                </Link>
            </Button>
            <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
