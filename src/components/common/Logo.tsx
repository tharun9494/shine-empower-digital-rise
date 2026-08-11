import { Sun } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Logo({ onDark = false, className }: { onDark?: boolean; className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-solar shadow-soft">
        <Sun className="h-5 w-5 text-navy" strokeWidth={2.4} aria-hidden="true" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-display text-[1.05rem] font-extrabold tracking-[0.14em]",
            onDark ? "text-navy-foreground" : "text-navy"
          )}
        >
          AARYAN SOLAR
        </span>
        <span
          className={cn(
            "mt-0.5 text-[0.6rem] font-medium uppercase tracking-[0.2em]",
            onDark ? "text-secondary" : "text-primary"
          )}
        >
          Clean energy, engineered
        </span>
      </span>
    </span>
  );
}
