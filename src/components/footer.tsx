import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container py-8 flex items-center justify-between">
        <Logo />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} AadhaarAware. A student initiative.
        </p>
      </div>
    </footer>
  );
}
