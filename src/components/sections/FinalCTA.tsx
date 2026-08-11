import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/config/site";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 sm:py-28">
      <div className="hairline-grid absolute inset-0 opacity-60" aria-hidden="true" />
      <div
        className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-accent/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-primary/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-x relative text-center">
        <p className="eyebrow text-secondary">Aryan Solar</p>
        <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold leading-[1.1] text-navy-foreground sm:text-4xl lg:text-5xl">
          Ready to Switch to Solar?
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base text-navy-foreground/75 sm:text-lg">
          Let Aryan Solar design a smarter energy solution for your home or business.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" className="w-full rounded-full px-8 sm:w-auto">
            <Link to="/contact">
              Get Free Solar Quote <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full rounded-full border-navy-foreground/25 bg-transparent px-8 text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground sm:w-auto"
          >
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" /> Talk to a Solar Expert
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
