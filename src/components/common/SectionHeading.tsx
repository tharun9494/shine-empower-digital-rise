import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  onDark = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-3", onDark && "text-secondary")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-[2.75rem] font-bold leading-[1.1]",
          onDark ? "text-navy-foreground" : "text-navy"
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 text-base sm:text-lg leading-relaxed",
            onDark ? "text-navy-foreground/70" : "text-muted-foreground"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
