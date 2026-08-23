import logoImg from "@/assets/logo.png";
import { cn } from "@/lib/utils";

export default function Logo({ onDark = false, className }: { onDark?: boolean; className?: string }) {
  return (
    <span className={cn("flex items-center", className)}>
      <img
        src={logoImg}
        alt="Aaryan Solar"
        className={cn(
          "h-10 w-auto object-contain transition-all duration-200",
          onDark ? "brightness-100" : ""
        )}
      />
    </span>
  );
}
