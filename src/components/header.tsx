import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";

export function Header() {
  const navLinks = [
    { name: "Learn", href: "#learn" },
    { name: "Benefits", href: "#benefits" },
    { name: "Scam Checker", href: "#scam-checker" },
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
        <div className="hidden md:flex items-center space-x-2">
            <Button asChild>
                <a href="#resources">
                    Resources
                </a>
            </Button>
        </div>
      </div>
    </header>
  );
}
