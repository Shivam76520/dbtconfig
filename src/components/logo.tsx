import { ShieldCheck } from "lucide-react";

export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 group outline-none">
      <ShieldCheck className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
      <span className="text-xl font-bold font-headline tracking-tight">
        AadhaarAware
      </span>
    </a>
  );
}
