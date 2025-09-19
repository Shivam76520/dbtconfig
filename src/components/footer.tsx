import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t bg-secondary/50">
      <div className="container py-8 flex items-center justify-between">
        <Logo />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} DBT Portal, Government of India. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
