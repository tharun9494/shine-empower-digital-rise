import { Link } from "react-router-dom";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Logo from "@/components/common/Logo";
import { site, whatsappUrl, telUrl } from "@/config/site";

const columns = [
  {
    title: "Company",
    links: [
      { name: "About", path: "/about" },
      { name: "Projects", path: "/projects" },
      { name: "Contact", path: "/contact" },
      { name: "Careers", path: "/contact" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Residential", path: "/residential-solar" },
      { name: "Commercial", path: "/commercial-solar" },
      { name: "Industrial", path: "/industrial-solar" },
      { name: "Agricultural", path: "/agricultural-solar" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Solar Calculator", path: "/solar-calculator" },
      { name: "Subsidy", path: "/solar-subsidy" },
      { name: "Solar Guide", path: "/solar-guide" },
      { name: "FAQs", path: "/faq" },
      { name: "Blog", path: "/blog" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground">
      <div className="container-x grid gap-12 py-16 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:gap-8">
        <div className="max-w-xs">
          <Logo onDark />
          <p className="mt-5 text-sm leading-relaxed text-navy-foreground/70">
            Powering homes, businesses and a cleaner future across Andhra Pradesh.
          </p>
          <p className="mt-4 text-sm font-medium text-secondary">{site.tagline}</p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title}>
            <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.name + l.path}>
                  <Link
                    to={l.path}
                    className="text-sm text-navy-foreground/75 transition-colors hover:text-navy-foreground"
                  >
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-secondary">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-navy-foreground/75">
            <li>
              <a href={telUrl} className="flex items-start gap-2 hover:text-navy-foreground">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {site.phone}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-navy-foreground"
              >
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${site.email}`} className="flex items-start gap-2 hover:text-navy-foreground">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" /> {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                {site.address.line1}, {site.address.city}, {site.address.state}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="container-x flex flex-col gap-3 py-6 text-xs text-navy-foreground/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Aryan Solar. All Rights Reserved.</p>
          <div className="flex gap-5">
            <Link to="/contact" className="hover:text-navy-foreground">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-navy-foreground">Terms &amp; Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
