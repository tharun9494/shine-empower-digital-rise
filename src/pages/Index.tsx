import { Link } from "react-router-dom";
import { ArrowRight, Check, Sun, Zap, Home, Battery, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import PageLayout from "@/components/layout/PageLayout";
import PageSeo from "@/components/common/PageSeo";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import Disclaimer from "@/components/common/Disclaimer";
import FinalCTA from "@/components/sections/FinalCTA";
import SolarCalculator from "@/components/tools/SolarCalculator";
import SubsidyCalculator from "@/components/tools/SubsidyCalculator";
import { site, disclaimers, whatsappUrl } from "@/config/site";
import { packages, inr, calculateSubsidy, assumptions } from "@/config/solar";
import {
  solutions, whySolar, systemTypes, systemComparison, processSteps,
  projects, testimonials, faqs, whyAryan, installationSteps,
} from "@/data/content";
import heroImg from "@/assets/hero-rooftop.jpg";
import commercialImg from "@/assets/commercial-solar.jpg";
import panelImg from "@/assets/panel-closeup.jpg";

const trustChips = [
  { label: "Residential Solar", icon: Home },
  { label: "Commercial Solar", icon: Building2 },
  { label: "Industrial Solar", icon: Zap },
  { label: "Subsidy Assistance", icon: Sun },
  { label: "Installation & Maintenance", icon: Battery },
];

export default function Index() {
  return (
    <PageLayout>
      <PageSeo
        title="Aaryan Solar — Rooftop Solar Company in Andhra Pradesh"
        description="Rooftop solar for homes, businesses, industries and farms across Andhra Pradesh. Free solar quote, solar calculator and PM Surya Ghar subsidy assistance."
        path="/"
      />

      {/* HERO */}
      <section className="relative min-h-[90vh] overflow-hidden pt-24 sm:pt-28">
        <img
          src={heroImg}
          alt="Modern Indian home in Andhra Pradesh with a rooftop solar panel array at sunrise"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/80 to-navy/40" aria-hidden="true" />
        <div className="container-x relative flex min-h-[65vh] flex-col justify-center py-10 sm:py-16">
          <p className="eyebrow text-secondary animate-fade-in text-xs sm:text-sm">
            Smart Solar • Clean Energy • Lower Bills
          </p>
          <h1 className="mt-4 sm:mt-5 max-w-3xl font-display text-3xl font-extrabold leading-[1.05] text-navy-foreground sm:text-5xl lg:text-[4.25rem]">
            Turn Sunlight Into Savings.
          </h1>
          <p className="mt-4 sm:mt-6 max-w-2xl text-xs sm:text-lg leading-relaxed text-navy-foreground/80">
            Power your home or business with reliable solar solutions from Aaryan Solar — from
            consultation and system design to installation, subsidy assistance and long-term support.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:flex sm:flex-row sm:items-center sm:gap-3">
            <Button asChild className="h-10 sm:h-12 text-xs sm:text-sm px-4 sm:px-8 rounded-full col-span-1">
              <Link to="/contact">Get Free Solar Quote</Link>
            </Button>
            <Button asChild variant="outline"
              className="h-10 sm:h-12 text-xs sm:text-sm px-4 sm:px-8 rounded-full col-span-1 border-navy-foreground/25 bg-transparent text-navy-foreground hover:bg-navy-foreground/10 hover:text-navy-foreground">
              <Link to="/solar-calculator">Calculate Solar</Link>
            </Button>
            <Link to="/solar-solutions" className="col-span-2 text-center inline-flex items-center justify-center gap-2 py-2 text-xs sm:text-sm font-semibold text-secondary hover:underline sm:col-span-1">
              Explore Solar Solutions <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <ul className="mt-10 grid grid-cols-2 gap-2 max-w-lg sm:flex sm:flex-wrap sm:gap-2.5 sm:max-w-none">
            {trustChips.map(({ label, icon: Icon }) => (
              <li key={label}
                className="inline-flex items-center justify-center gap-1.5 rounded-full border border-navy-foreground/15 bg-navy-foreground/5 px-3 py-1.5 text-[0.7rem] font-medium text-navy-foreground/85 backdrop-blur-sm sm:px-4 sm:py-2 sm:text-sm">
                <Icon className="h-3.5 w-3.5 text-secondary" aria-hidden="true" /> {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* STATS */}
      {site.showStats && (
        <section className="border-b border-border bg-card py-8 sm:py-14">
          <div className="container-x grid grid-cols-2 gap-5 lg:grid-cols-4">
            {site.stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80}>
                <p className="font-display text-2xl font-extrabold text-navy sm:text-4xl">
                  {s.value}
                  <span className="text-primary">{s.suffix}</span>
                </p>
                <p className="mt-1 text-[0.75rem] sm:text-sm font-medium text-foreground">{s.label}</p>
                <p className="mt-0.5 text-[0.65rem] sm:text-xs text-muted-foreground">{s.note}</p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* WHY SOLAR */}
      <section className="py-12 sm:py-24">
        <div className="container-x">
          <SectionHeading
            eyebrow="Why solar"
            title="Why Switch to Solar?"
            description="Solar changes how you buy electricity — from a monthly expense to an asset on your roof."
          />
          <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {whySolar.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 60}>
                <div className="surface-card group h-full p-4 sm:p-6 transition-all hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Sun className="h-4.5 w-4.5 sm:h-5 sm:w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-3 sm:mt-5 text-sm sm:text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-1.5 sm:mt-2 text-[0.75rem] leading-relaxed sm:text-sm text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-10 grid gap-5 md:grid-cols-2">
            <div className="surface-card p-6">
              <h3 className="text-base font-bold text-navy">Traditional electricity</h3>
              <dl className="mt-4 space-y-3 text-sm">
                {[["Monthly bill", "Recurring, tariff-linked"], ["Long-term cost", "Rises with tariff revisions"], ["Energy source", "Grid / conventional generation"], ["Environmental impact", "Higher emissions intensity"]].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-border pb-2">
                    <dt className="text-muted-foreground">{k}</dt><dd className="text-right font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-2xl bg-navy p-6 text-navy-foreground">
              <h3 className="text-base font-bold text-secondary">Solar energy</h3>
              <dl className="mt-4 space-y-3 text-sm">
                {[["Monthly bill", "Reduced by self-generation"], ["Long-term cost", "Largely upfront, then low"], ["Energy source", "Your own rooftop"], ["Environmental impact", "Clean generation on site"]].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-navy-foreground/10 pb-2">
                    <dt className="text-navy-foreground/60">{k}</dt><dd className="text-right font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-muted/50 py-12 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Solar solutions" title="Built for your kind of site"
            description="Every property has a different load pattern, roof and approval path. Pick your category to see how we approach it." />
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4">
            {solutions.map((s, i) => (
              <Reveal as="li" key={s.slug} delay={i * 70}>
                <div className="surface-card flex h-full flex-col p-4 sm:p-7 transition-all hover:-translate-y-1 hover:shadow-lift">
                  <span className="inline-flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-solar text-navy">
                    <s.icon className="h-4.5 w-4.5 sm:h-5 sm:w-5" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 sm:mt-5 text-sm sm:text-xl font-bold text-navy">{s.title}</h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground">{s.blurb}</p>
                  <ul className="mt-3 flex-wrap gap-1.5 hidden sm:flex">
                    {s.forWhom.map((f) => (
                      <li key={f} className="rounded-full bg-muted px-3 py-1 text-xs text-foreground/75">{f}</li>
                    ))}
                  </ul>
                  <Link to={`/${s.slug}`} className="mt-4 sm:mt-6 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:underline">
                    {s.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* SYSTEM TYPES */}
      <section className="py-12 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="System types" title="On-Grid, Off-Grid or Hybrid?"
            description="The right architecture depends on your grid reliability and whether you need backup." />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {systemTypes.map((t, i) => (
              <Reveal key={t.id} delay={i * 70} className={i === 2 ? "col-span-2 sm:col-span-1" : ""}>
                <div className="surface-card h-full p-4 sm:p-6">
                  <h3 className="text-sm sm:text-lg font-bold text-navy">{t.name}</h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground">{t.summary}</p>
                  <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-foreground/80">
                    {t.points.map((p) => (
                      <li key={p} className="flex gap-2 leading-snug">
                        <Check className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-primary" aria-hidden="true" /><span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse overflow-hidden rounded-2xl bg-card text-sm shadow-soft">
              <caption className="sr-only">Comparison of on-grid, off-grid and hybrid solar systems</caption>
              <thead>
                <tr className="bg-navy text-navy-foreground">
                  {systemComparison.head.map((h) => (
                    <th key={h} scope="col" className="px-4 py-3 text-left font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {systemComparison.rows.map((row) => (
                  <tr key={row[0]} className="border-b border-border last:border-0">
                    {row.map((cell, idx) => (
                      <td key={idx} className={idx === 0 ? "px-4 py-3 font-medium text-navy" : "px-4 py-3 text-muted-foreground"}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </div>
      </section>

      {/* HOW SOLAR WORKS */}
      <section className="relative overflow-hidden bg-navy py-12 text-navy-foreground sm:py-24">
        <div className="hairline-grid absolute inset-0 opacity-50" aria-hidden="true" />
        <div className="container-x relative">
          <SectionHeading onDark eyebrow="How solar works" title="From sunlight to your switchboard"
            description="Five steps, one continuous flow of energy across your rooftop system." />
          <ol className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
            {processSteps.map((s, i) => (
              <Reveal as="li" key={s.no} delay={i * 90} className={i === 4 ? "col-span-2 sm:col-span-1" : ""}>
                <div className="relative h-full rounded-2xl border border-navy-foreground/12 bg-navy-foreground/5 p-3.5 sm:p-5">
                  <span className="font-display text-[0.75rem] sm:text-sm font-bold text-secondary">{s.no}</span>
                  <h3 className="mt-1.5 sm:mt-3 text-sm sm:text-base font-bold">{s.title}</h3>
                  <p className="mt-1 sm:mt-2 text-[0.75rem] sm:text-sm text-navy-foreground/70">{s.text}</p>
                  <div className="mt-3 sm:mt-4 h-1 overflow-hidden rounded-full bg-navy-foreground/10">
                    <div className="h-full w-full bg-[linear-gradient(90deg,transparent,hsl(var(--secondary)),transparent)] bg-[length:200%_100%] animate-flow" />
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="py-12 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Solar calculator" title="Estimate Your Solar System"
            description="Enter your bill and roof area to see an indicative capacity, generation, subsidy and payback." />
          <div className="mt-8"><SolarCalculator /></div>
        </div>
      </section>

      {/* SUBSIDY */}
      <section className="bg-muted/50 py-12 sm:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow="Government support" title="Solar Subsidy in India"
              description="PM Surya Ghar: Muft Bijli Yojana provides Central Financial Assistance to eligible residential rooftop customers. Eligibility, documentation and current rates must be verified on the official portal." />
            <ul className="mt-4 sm:mt-6 space-y-2 text-xs sm:text-sm text-foreground/80">
              {["Applies to eligible residential customers only", "Installation through a registered vendor", "Net metering and inspection must be completed", "Assistance is credited as per scheme rules"].map((p) => (
                <li key={p} className="flex gap-2"><Check className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-primary" aria-hidden="true" />{p}</li>
              ))}
            </ul>
            <Button asChild className="mt-5 sm:mt-7 rounded-full px-7 text-xs sm:text-sm">
              <Link to="/solar-subsidy">Check My Subsidy Eligibility</Link>
            </Button>
          </div>
          <SubsidyCalculator />
        </div>
      </section>

      {/* PRICING */}
      <section className="py-12 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Pricing" title="What Does Solar Cost?"
            description="Indicative, editable ranges based on configured assumptions. Exact pricing follows a site assessment." />
          <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {packages.map((p, i) => {
              const min = p.kw * assumptions.costPerKw.min;
              const max = p.kw * assumptions.costPerKw.max;
              const subsidy = calculateSubsidy(p.kw);
              return (
                <Reveal as="li" key={p.capacity} delay={i * 60}>
                  <div className={`surface-card h-full p-4 sm:p-6 ${p.popular ? "ring-2 ring-primary" : ""}`}>
                    {p.popular && (
                      <span className="mb-2 sm:mb-3 inline-block rounded-full bg-primary/10 px-2.5 py-0.5 sm:px-3 sm:py-1 text-[0.65rem] sm:text-xs font-semibold text-primary">
                        Popular
                      </span>
                    )}
                    <h3 className="font-display text-lg sm:text-2xl font-extrabold text-navy">{p.capacity}</h3>
                    <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-muted-foreground">{p.audience}</p>
                    <dl className="mt-4 sm:mt-5 space-y-1.5 sm:space-y-2 text-[0.75rem] sm:text-sm">
                      {[
                        ["Est. generation", `${Math.round(p.kw * assumptions.dailyYieldPerKw * 30)} units / month`],
                        ["Panels", p.panels],
                        ["Inverter", p.inverter],
                        ["Roof area", `≈ ${p.kw * assumptions.roofAreaPerKw} sq ft`],
                        ["Price range", `${inr(min)} – ${inr(max)}`],
                        ["Possible subsidy", subsidy > 0 ? inr(subsidy) : "Not applicable"],
                        ["Est. net cost", `${inr(Math.max(min - subsidy, 0))} – ${inr(Math.max(max - subsidy, 0))}`],
                      ].map(([k, v]) => (
                        <div key={k} className="flex justify-between gap-3 border-b border-border pb-1 sm:pb-1.5">
                          <dt className="text-muted-foreground">{k}</dt>
                          <dd className="text-right font-medium">{v}</dd>
                        </div>
                      ))}
                    </dl>
                    <Button asChild variant="outline" className="mt-4 sm:mt-6 w-full rounded-xl text-xs sm:text-sm">
                      <Link to="/contact">Get Exact Quote</Link>
                    </Button>
                  </div>
                </Reveal>
              );
            })}
          </ul>
          <Disclaimer className="mt-8" text={disclaimers.estimate} />
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-muted/50 py-12 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Projects" title="Recent work across Andhra Pradesh"
            description="Project entries below are structured placeholders — replace with verified Aaryan Solar projects and photos." />
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {projects.slice(0, 3).map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 70} className={i === 2 ? "col-span-2 sm:col-span-1" : ""}>
                <article className="surface-card h-full overflow-hidden">
                  <img
                    src={p.category === "Commercial" ? commercialImg : panelImg}
                    alt={`${p.title} in ${p.location}`}
                    width={1280} height={960} loading="lazy"
                    className="h-28 sm:h-44 w-full object-cover"
                  />
                  <div className="p-3 sm:p-5">
                    <span className="text-[0.65rem] sm:text-xs font-semibold uppercase tracking-wide text-primary">{p.category}</span>
                    <h3 className="mt-1 text-sm sm:text-base font-bold text-navy">{p.title}</h3>
                    <p className="mt-0.5 text-xs sm:text-sm text-muted-foreground">{p.location} • {p.capacity}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
          <Button asChild variant="outline" className="mt-6 sm:mt-8 rounded-full text-xs sm:text-sm px-6">
            <Link to="/projects">View all projects</Link>
          </Button>
        </div>
      </section>

      {/* WHY ARYAN + PROCESS */}
      <section className="py-12 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Why Aaryan Solar" title="Engineering first, sales second" />
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {whyAryan.map((w, i) => (
              <Reveal as="li" key={w.title} delay={i * 60}>
                <div className="surface-card h-full p-4 sm:p-6">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 sm:mt-4 text-sm sm:text-base font-bold text-navy">{w.title}</h3>
                  <p className="mt-1.5 sm:mt-2 text-[0.75rem] leading-relaxed sm:text-sm text-muted-foreground">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <div className="mt-12 sm:mt-16">
            <SectionHeading eyebrow="Installation process" title="Ten steps, fully documented" />
            <ol className="mt-8 space-y-4 border-l border-border pl-4 sm:pl-6">
              {installationSteps.map((s, i) => (
                <Reveal as="li" key={s.no} delay={i * 40}>
                  <div className="relative">
                    <span className="absolute -left-[21px] sm:-left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
                    <p className="text-xs sm:text-sm font-semibold text-navy">
                      <span className="mr-2 text-primary">{s.no}</span>{s.title}
                    </p>
                    <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{s.text}</p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted/50 py-12 sm:py-24">
        <div className="container-x">
          <SectionHeading eyebrow="Customer voices" title="Testimonials"
            description="These are editable placeholders. We publish only real, consented customer feedback." />
          <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal as="li" key={i} delay={i * 70} className={i === 2 ? "col-span-2 sm:col-span-1" : ""}>
                <blockquote className="surface-card h-full p-4 sm:p-6">
                  <p className="text-accent text-xs sm:text-sm" aria-label="Five star placeholder rating">★★★★★</p>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-relaxed text-foreground/80">“{t.quote}”</p>
                  <footer className="mt-3 sm:mt-5 text-xs sm:text-sm">
                    <span className="font-semibold text-navy">{t.name}</span>
                    <span className="block text-muted-foreground text-[0.7rem] sm:text-xs">{t.location} • {t.system}</span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-24">
        <div className="container-x max-w-3xl">
          <SectionHeading align="center" eyebrow="FAQ" title="Solar questions, answered" />
          <Accordion type="single" collapsible className="mt-8 sm:mt-10">
            {faqs.slice(0, 8).map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-sm sm:text-base font-semibold text-navy">{f.q}</AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-6 sm:mt-8 flex gap-3">
            <Button asChild variant="outline" className="rounded-full text-xs sm:text-sm px-5 h-9 sm:h-11"><Link to="/faq">See all FAQs</Link></Button>
            <Button asChild className="rounded-full text-xs sm:text-sm px-5 h-9 sm:h-11">
              <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">Ask on WhatsApp</a>
            </Button>
          </div>
        </div>
      </section>

      <FinalCTA />
    </PageLayout>
  );
}
