import { Link } from "react-router-dom";
import { MessageCircle, Phone, FileText } from "lucide-react";
import { whatsappUrl, telUrl } from "@/config/site";

export default function FloatingCTA() {
  return (
    <>
      {/* Desktop floating stack */}
      <div className="pointer-events-none fixed bottom-6 right-6 z-40 hidden flex-col items-end gap-3 md:flex">
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Aryan Solar on WhatsApp"
          className="pointer-events-auto inline-flex h-12 items-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-lift transition-transform hover:scale-[1.03]"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
        </a>
        <a
          href={telUrl}
          aria-label="Call Aryan Solar"
          className="pointer-events-auto inline-flex h-12 items-center gap-2 rounded-full bg-navy px-5 text-sm font-semibold text-navy-foreground shadow-lift transition-transform hover:scale-[1.03]"
        >
          <Phone className="h-4 w-4" aria-hidden="true" /> Call
        </a>
        <Link
          to="/contact"
          className="pointer-events-auto inline-flex h-12 items-center gap-2 rounded-full bg-accent px-5 text-sm font-semibold text-accent-foreground shadow-lift transition-transform hover:scale-[1.03]"
        >
          <FileText className="h-4 w-4" aria-hidden="true" /> Get Quote
        </Link>
      </div>

      {/* Mobile sticky bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-3 border-t border-border bg-card/95 backdrop-blur-xl md:hidden">
        <a href={telUrl} className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-navy">
          <Phone className="h-4 w-4" aria-hidden="true" /> Call
        </a>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 border-x border-border py-3 text-xs font-semibold text-primary"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" /> WhatsApp
        </a>
        <Link to="/contact" className="flex flex-col items-center gap-1 py-3 text-xs font-semibold text-navy">
          <FileText className="h-4 w-4" aria-hidden="true" /> Get Quote
        </Link>
      </div>
    </>
  );
}
