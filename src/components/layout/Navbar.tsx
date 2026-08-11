import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  MessageCircle,
  Phone,
  ChevronDown,
  Sun,
  Home as HomeIcon,
  Building2,
  Factory,
  Sprout,
  Cpu,
  BookOpen,
  Calculator,
  Gift,
  Tag,
  Users,
  Briefcase,
  FileText,
  HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl, telUrl, site } from "@/config/site";
import Logo from "@/components/common/Logo";
import { cn } from "@/lib/utils";

interface SubLink {
  name: string;
  path: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface MenuLink {
  name: string;
  path?: string;
  dropdown?: SubLink[];
}

const navMenu: MenuLink[] = [
  {
    name: "Solutions",
    dropdown: [
      { name: "Residential Solar", path: "/residential-solar", description: "Solar rooftop systems for villas & homes", icon: HomeIcon },
      { name: "Commercial Solar", path: "/commercial-solar", description: "Reduce power bills for offices & shops", icon: Building2 },
      { name: "Industrial Solar", path: "/industrial-solar", description: "High-capacity systems for factories & sheds", icon: Factory },
      { name: "Agricultural Solar", path: "/agricultural-solar", description: "Solar pumps and rural off-grid power", icon: Sprout },
      { name: "View All Solutions", path: "/solar-solutions", description: "Overview of all our solar installation services", icon: Sun },
    ]
  },
  {
    name: "Resources",
    dropdown: [
      { name: "Solar Calculator", path: "/solar-calculator", description: "Estimate system size & savings potential", icon: Calculator },
      { name: "Solar Subsidy", path: "/solar-subsidy", description: "PM Surya Ghar subsidy guidelines & applications", icon: Gift },
      { name: "Solar Pricing", path: "/solar-pricing", description: "Check current system rates & pricing details", icon: Tag },
      { name: "Solar Panels", path: "/solar-panels", description: "Compare monocrystalline, TOPCon & bifacial panels", icon: Sun },
      { name: "Inverters & Tech", path: "/inverters", description: "Explore string, hybrid & microinverters", icon: Cpu },
      { name: "How Solar Works", path: "/solar-guide", description: "Simple guide to solar energy & net metering", icon: BookOpen },
    ]
  },
  {
    name: "Company",
    dropdown: [
      { name: "About Us", path: "/about", description: "Who we are and our solar mission", icon: Users },
      { name: "Projects", path: "/projects", description: "Check out our portfolio of solar installations", icon: Briefcase },
      { name: "Blog", path: "/blog", description: "Solar insights, tips, and news for Andhra Pradesh", icon: FileText },
      { name: "FAQ", path: "/faq", description: "Find answers to frequently asked questions", icon: HelpCircle },
    ]
  },
  { name: "Contact", path: "/contact" }
];

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
    setMobileExpandedSection(null);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  const isGroupActive = (item: MenuLink) => {
    if (item.path) return isActive(item.path);
    if (item.dropdown) {
      return item.dropdown.some((sub) => isActive(sub.path));
    }
    return false;
  };

  const toggleMobileSection = (sectionName: string) => {
    setMobileExpandedSection(prev => prev === sectionName ? null : sectionName);
  };

  const isLightHeader = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isLightHeader
          ? "border-b border-border/50 bg-background/95 py-2.5 backdrop-blur-xl shadow-soft"
          : "bg-transparent py-4.5"
      )}
    >
      <div className="container-x flex items-center justify-between gap-8">
        <Link to="/" aria-label={`${site.name} home`} className="shrink-0">
          <Logo onDark={!isLightHeader} />
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main" className="hidden lg:flex items-center gap-2">
          {navMenu.map((item) => {
            if (item.dropdown) {
              const isOpen = activeDropdown === item.name;
              const isGroupHighlight = isGroupActive(item);
              return (
                <div
                  key={item.name}
                  className="relative py-1.5"
                  onMouseEnter={() => setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button
                    type="button"
                    className={cn(
                      "inline-flex items-center gap-1.5 rounded-xl px-3.5 py-2 text-sm font-semibold transition-all duration-200 focus:outline-none whitespace-nowrap",
                      isLightHeader
                        ? isGroupHighlight
                          ? "text-primary bg-primary/8"
                          : "text-foreground/80 hover:text-primary hover:bg-muted"
                        : isGroupHighlight
                          ? "text-secondary bg-navy-foreground/10"
                          : "text-navy-foreground/85 hover:text-secondary hover:bg-navy-foreground/5"
                    )}
                  >
                    {item.name}
                    <ChevronDown className={cn("h-3.5 w-3.5 transition-transform duration-200", isOpen && "rotate-180")} />
                  </button>

                  {isOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 z-50 w-[420px] rounded-2xl border border-border bg-card p-3 shadow-lift backdrop-blur-xl animate-fade-in">
                      <div className="grid gap-1">
                        {item.dropdown.map((sub) => {
                          const SubIcon = sub.icon;
                          const isSubActive = isActive(sub.path);
                          return (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className={cn(
                                "flex items-start gap-3 rounded-xl p-2.5 transition-all duration-200 hover:bg-primary/5 group/sub",
                                isSubActive ? "bg-primary/5" : ""
                              )}
                            >
                              <span className={cn(
                                "flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted text-navy group-hover/sub:bg-primary/10 group-hover/sub:text-primary transition-colors",
                                isSubActive ? "bg-primary/10 text-primary" : ""
                              )}>
                                <SubIcon className="h-4.5 w-4.5" />
                              </span>
                              <div className="flex flex-col gap-0.5">
                                <span className={cn(
                                  "text-sm font-semibold transition-colors",
                                  isSubActive ? "text-primary" : "text-navy group-hover/sub:text-primary"
                                )}>
                                  {sub.name}
                                </span>
                                <span className="text-xs text-muted-foreground leading-normal">
                                  {sub.description}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            const isItemHighlight = isActive(item.path!);
            return (
              <Link
                key={item.path}
                to={item.path!}
                className={cn(
                  "rounded-xl px-3.5 py-2 text-sm font-semibold transition-all duration-200 whitespace-nowrap",
                  isLightHeader
                    ? isItemHighlight
                      ? "text-primary bg-primary/8"
                      : "text-foreground/80 hover:text-primary hover:bg-muted"
                    : isItemHighlight
                      ? "text-secondary bg-navy-foreground/10"
                      : "text-navy-foreground/85 hover:text-secondary hover:bg-navy-foreground/5"
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* Right Section (CTA + Hamburger) */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center">
            <Button
              asChild
              size="sm"
              className={cn(
                "rounded-full px-6 font-semibold transition-all shadow-soft hover:shadow-md whitespace-nowrap",
                isLightHeader
                  ? "bg-primary hover:bg-primary/95 text-primary-foreground"
                  : "bg-secondary hover:bg-secondary/95 text-secondary-foreground"
              )}
            >
              <Link to="/contact">Get Free Quote</Link>
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={cn(
              "lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-colors shrink-0",
              isLightHeader
                ? "border-border bg-card text-navy hover:bg-muted"
                : "border-navy-foreground/20 bg-navy-foreground/5 text-navy-foreground hover:bg-navy-foreground/10"
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {open && (
        <div className="lg:hidden animate-fade-in">
          <div className="container-x mt-3">
            <div className="surface-card max-h-[75vh] overflow-y-auto p-4 border border-border/80 shadow-lift bg-card">
              <nav aria-label="Mobile" className="flex flex-col gap-1.5">
                {navMenu.map((item) => {
                  if (item.dropdown) {
                    const isExpanded = mobileExpandedSection === item.name;
                    return (
                      <div key={item.name} className="flex flex-col">
                        <button
                          type="button"
                          onClick={() => toggleMobileSection(item.name)}
                          className={cn(
                            "flex w-full items-center justify-between rounded-xl px-4 py-3 text-[0.95rem] font-semibold transition-colors focus:outline-none",
                            isGroupActive(item) ? "bg-primary/5 text-primary" : "text-foreground/80 hover:bg-muted"
                          )}
                        >
                          {item.name}
                          <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", isExpanded && "rotate-180")} />
                        </button>
                        {isExpanded && (
                          <div className="flex flex-col pl-4 border-l border-border/80 ml-4 my-1 gap-1">
                            {item.dropdown.map((sub) => (
                              <Link
                                key={sub.path}
                                to={sub.path}
                                className={cn(
                                  "rounded-lg px-3 py-2 text-sm font-semibold transition-colors",
                                  isActive(sub.path) ? "text-primary" : "text-foreground/75 hover:text-primary hover:bg-muted"
                                )}
                              >
                                {sub.name}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.path}
                      to={item.path!}
                      className={cn(
                        "rounded-xl px-4 py-3 text-[0.95rem] font-semibold transition-colors",
                        isActive(item.path!) ? "bg-primary/10 text-primary" : "text-foreground/80 hover:bg-muted"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-4 grid gap-2 border-t border-border pt-4">
                <Button asChild className="w-full rounded-xl">
                  <Link to="/contact">Get Free Quote</Link>
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
