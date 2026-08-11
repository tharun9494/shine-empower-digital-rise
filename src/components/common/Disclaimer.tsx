import { Info } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Disclaimer({
  text,
  className,
  sourceLabel,
  sourceUrl,
  lastVerified,
}: {
  text: string;
  className?: string;
  sourceLabel?: string;
  sourceUrl?: string;
  lastVerified?: string;
}) {
  return (
    <div
      className={cn(
        "flex gap-3 rounded-xl border border-border bg-muted/60 p-4 text-sm text-muted-foreground",
        className
      )}
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
      <div className="space-y-1">
        <p>{text}</p>
        {lastVerified && (
          <p className="text-xs">
            <span className="font-medium text-foreground">Last verified:</span> {lastVerified}
          </p>
        )}
        {sourceUrl && (
          <a
            href={sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-xs font-semibold text-primary underline underline-offset-4"
          >
            {sourceLabel ?? "Official source"}
          </a>
        )}
      </div>
    </div>
  );
}
