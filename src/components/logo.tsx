import { Landmark } from "lucide-react";

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 group outline-none">
      <Landmark className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
      <span className="text-xl font-bold font-headline tracking-tight">
        DBT Portal
      </span>
    </a>
  );
}
