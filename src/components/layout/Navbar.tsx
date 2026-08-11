import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks } from "@/data/content";
import { whatsappUrl, telUrl, site } from "@/config/site";
import Logo from "@/components/common/Logo";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/90 py-2 backdrop-blur-xl shadow-soft"
          : "py-4 bg-background/70 backdrop-blur-md"
      )}
    >
      <div className="container-x flex items-center justify-between gap-4">
        <Link to="/" aria-label={`${site.name} home`} className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Main" className="hidden xl:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              aria-current={isActive(link.path) ? "page" : undefined}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive(link.path)
                  ? "text-primary bg-primary/8"
                  : "text-foreground/75 hover:text-primary hover:bg-muted"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="text-navy">
            <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1.5 h-4 w-4" aria-hidden="true" />
              WhatsApp Us
            </a>
          </Button>
          <Button asChild size="sm" className="rounded-full px-5">
            <Link to="/contact">Get Free Solar Quote</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-navy"
        >
          {open ? <Menu className="hidden" /> : null}
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="hidden md:inline-flex xl:hidden h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-navy"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden animate-fade-in">
          <div className="container-x mt-3">
            <div className="surface-card max-h-[75vh] overflow-y-auto p-3">
              <nav aria-label="Mobile" className="flex flex-col">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "rounded-xl px-4 py-3 text-[0.95rem] font-medium transition-colors",
                      isActive(link.path) ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>
              <div className="mt-3 grid gap-2 border-t border-border pt-3">
                <Button asChild className="w-full rounded-xl">
                  <Link to="/contact">Get Free Solar Quote</Link>
                </Button>
                <div className="grid grid-cols-2 gap-2">
                  <Button asChild variant="outline" className="rounded-xl">
                    <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="mr-1.5 h-4 w-4" aria-hidden="true" /> WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-xl">
                    <a href={telUrl}>
                      <Phone className="mr-1.5 h-4 w-4" aria-hidden="true" /> Call
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
