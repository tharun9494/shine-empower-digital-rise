import { Link, useParams } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageShell from "@/components/layout/PageShell";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import Disclaimer from "@/components/common/Disclaimer";
import SolarCalculator from "@/components/tools/SolarCalculator";
import SubsidyCalculator from "@/components/tools/SubsidyCalculator";
import EmiCalculator from "@/components/tools/EmiCalculator";
import QuoteForm from "@/components/tools/QuoteForm";
import { site, disclaimers, whatsappUrl, telUrl } from "@/config/site";
import { packages, inr, calculateSubsidy, assumptions, districts, discoms, districtDiscom, subsidyConfig } from "@/config/solar";
import {
  solutions, panelTech, brands, inverters, systemComponents, systemTypes, systemComparison,
  processSteps, projects, faqs, whyAryan, installationSteps, maintenanceItems, servicePlans,
  blogPosts, blogCategories,
} from "@/data/content";
import { useState } from "react";
import commercialImg from "@/assets/commercial-solar.jpg";
import panelImg from "@/assets/panel-closeup.jpg";
import teamImg from "@/assets/install-team.jpg";

const Grid = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <ul className={`grid grid-cols-2 gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 ${className || ""}`}>{children}</ul>
);

export function SolarSolutions() {
  return (
    <PageShell
      eyebrow="Solar solutions" title="Solar solutions for every kind of property"
      description="Residential, commercial, industrial and agricultural systems, designed around your load and site."
      seoTitle="Solar Solutions in Andhra Pradesh | Aaryan Solar"
      seoDescription="Residential, commercial, industrial and agricultural rooftop solar solutions across Andhra Pradesh from Aaryan Solar."
      path="/solar-solutions"
    >
      <div className="container-x">
        <Grid>
          {solutions.map((s, i) => (
            <Reveal as="li" key={s.slug} delay={i * 60}>
              <div className="surface-card h-full p-4 sm:p-6">
                <s.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" aria-hidden="true" />
                <h2 className="mt-3 sm:mt-4 text-sm sm:text-lg font-bold text-navy">{s.title}</h2>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground">{s.blurb}</p>
                <Link to={`/${s.slug}`} className="mt-4 sm:mt-5 inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-primary hover:underline">
                  {s.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          ))}
        </Grid>
      </div>
    </PageShell>
  );
}

export function SolutionDetail({ slug }: { slug: string }) {
  const s = solutions.find((x) => x.slug === slug)!;
  return (
    <PageShell
      eyebrow="Solar solutions" title={s.title} description={s.detail}
      seoTitle={`${s.title} in Andhra Pradesh | Aaryan Solar`}
      seoDescription={`${s.title} design, installation and maintenance across Andhra Pradesh by Aaryan Solar. ${s.blurb}`}
      path={`/${s.slug}`}
    >
      <div className="container-x grid gap-10 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Who it suits" title="Designed for" />
          <ul className="mt-6 flex flex-wrap gap-2">
            {s.forWhom.map((f) => (
              <li key={f} className="rounded-full bg-muted px-4 py-2 text-sm">{f}</li>
            ))}
          </ul>
          <h3 className="mt-8 sm:mt-10 text-base sm:text-lg font-bold text-navy">What we include</h3>
          <ul className="mt-4 grid grid-cols-2 gap-3 sm:flex sm:flex-col sm:gap-0 sm:space-y-2">
            {s.highlights.map((h) => (
              <li key={h} className="flex gap-2 text-xs sm:text-sm text-foreground/80 leading-snug">
                <Check className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-primary" aria-hidden="true" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-6 sm:mt-8 rounded-full px-7 text-xs sm:text-sm"><Link to="/contact">Request site survey</Link></Button>
        </div>
        <img src={teamImg} alt={`${s.title} installation by Aaryan Solar technicians`} width={1280} height={960} loading="lazy"
          className="h-full w-full rounded-2xl object-cover shadow-soft" />
      </div>
    </PageShell>
  );
}

export function SolarPanelsPage() {
  return (
    <PageShell
      eyebrow="Technology" title="Solar panel technology, explained"
      description="Understand the differences between panel technologies before you compare quotations."
      seoTitle="Solar Panels & Panel Technology | Aaryan Solar Andhra Pradesh"
      seoDescription="Monocrystalline, polycrystalline, bifacial and N-Type TOPCon solar panels compared, plus available panel brands in Andhra Pradesh."
      path="/solar-panels"
    >
      <div className="container-x space-y-16">
        <div>
          <SectionHeading eyebrow="Panel types" title="Compare panel technologies" />
          <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-5">
            {panelTech.map((p, i) => (
              <Reveal key={p.name} delay={i * 60}>
                <div className="surface-card h-full p-4 sm:p-6">
                  <h3 className="text-sm sm:text-lg font-bold text-navy">{p.name}</h3>
                  <dl className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                    {[["Efficiency", p.efficiency], ["Technology", p.tech], ["Typical use", p.use], ["Space requirement", p.space], ["Cost category", p.cost]].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-3 border-b border-border pb-1 sm:pb-1.5">
                        <dt className="text-muted-foreground">{k}</dt><dd className="text-right font-medium">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <ul className="mt-3 sm:mt-4 space-y-1 sm:space-y-1.5">
                    {p.notes.map((n) => (
                      <li key={n} className="flex gap-1.5 text-xs sm:text-sm text-foreground/75">
                        <Check className="mt-0.5 h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 text-primary" aria-hidden="true" />{n}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="Technology partners" title="Available / preferred brands"
            description="Brands we can source for your project, subject to availability." />
          <Grid className="mt-8">
            {brands.map((b, i) => (
              <Reveal as="li" key={b.name} delay={i * 50}>
                <div className="surface-card h-full p-4 sm:p-6">
                  <p className="font-display text-sm sm:text-lg font-bold text-navy">{b.name}</p>
                  <dl className="mt-2.5 sm:mt-3 space-y-1 sm:space-y-1.5 text-xs sm:text-sm text-muted-foreground">
                    <div><dt className="inline font-medium text-foreground">Technology: </dt><dd className="inline">{b.tech}</dd></div>
                    <div><dt className="inline font-medium text-foreground">Efficiency: </dt><dd className="inline">{b.efficiency}</dd></div>
                    <div><dt className="inline font-medium text-foreground">Warranty: </dt><dd className="inline">{b.warranty}</dd></div>
                  </dl>
                  <Button asChild variant="outline" size="sm" className="mt-4 sm:mt-5 rounded-xl text-xs sm:text-sm">
                    <a href={whatsappUrl(`Hello Aaryan Solar, I would like to know more about ${b.name} solar panels.`)} target="_blank" rel="noopener noreferrer">
                      Ask About Brand
                    </a>
                  </Button>
                </div>
              </Reveal>
            ))}
          </Grid>
          <Disclaimer className="mt-8" text={disclaimers.brands} />
        </div>

        <img src={panelImg} alt="Close-up of a monocrystalline solar panel surface" width={1280} height={960} loading="lazy"
          className="w-full rounded-2xl object-cover shadow-soft" />
      </div>
    </PageShell>
  );
}

export function InvertersPage() {
  const [active, setActive] = useState<string | null>(null);
  return (
    <PageShell
      eyebrow="Technology" title="Inverters and system components"
      description="The inverter defines how your system behaves. Here is how the main types differ."
      seoTitle="Solar Inverters & System Components | Aaryan Solar"
      seoDescription="String, hybrid and microinverters compared, plus every component in a rooftop solar system explained."
      path="/inverters"
    >
      <div className="container-x space-y-16">
        <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {inverters.map((inv, i) => (
            <Reveal key={inv.name} delay={i * 60} className={i === 2 ? "col-span-2 sm:col-span-1" : ""}>
              <div className="surface-card h-full p-4 sm:p-6">
                <h2 className="text-sm sm:text-lg font-bold text-navy">{inv.name}</h2>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground">{inv.what}</p>
                <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm"><span className="font-semibold text-navy">Where: </span>{inv.where}</p>
                <p className="mt-2.5 sm:mt-3 text-[0.65rem] sm:text-xs font-semibold uppercase tracking-wide text-primary">Advantages</p>
                <ul className="mt-1 space-y-0.5 text-xs sm:text-sm text-foreground/80">{inv.pros.map((p) => <li key={p}>• {p}</li>)}</ul>
                <p className="mt-2.5 sm:mt-3 text-[0.65rem] sm:text-xs font-semibold uppercase tracking-wide text-muted-foreground">Limitations</p>
                <ul className="mt-1 space-y-0.5 text-xs sm:text-sm text-muted-foreground">{inv.cons.map((c) => <li key={c}>• {c}</li>)}</ul>
                <p className="mt-3.5 sm:mt-4 text-xs sm:text-sm font-semibold text-navy">Suitable: {inv.system}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div>
          <SectionHeading eyebrow="System components" title="Explore a complete solar system"
            description="Select a component to see what it does in your installation." />
          <div className="mt-8 flex flex-wrap gap-2">
            {systemComponents.map((c) => (
              <button key={c.name} type="button" onClick={() => setActive(active === c.name ? null : c.name)}
                aria-expanded={active === c.name}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${active === c.name ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary/50"}`}>
                {c.name}
              </button>
            ))}
          </div>
          {active && (
            <div className="surface-card mt-5 p-6 animate-fade-in">
              <h3 className="text-base font-bold text-navy">{active}</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {systemComponents.find((c) => c.name === active)?.text}
              </p>
            </div>
          )}
        </div>
      </div>
    </PageShell>
  );
}

export function SolarCalculatorPage() {
  return (
    <PageShell
      eyebrow="Tools" title="Solar calculator"
      description="Estimate your system size, generation, subsidy, cost and payback in under a minute."
      seoTitle="Solar Calculator for Andhra Pradesh | Aaryan Solar"
      seoDescription="Calculate your rooftop solar requirement, estimated generation, subsidy and payback period for homes and businesses in Andhra Pradesh."
      path="/solar-calculator"
    >
      <div className="container-x space-y-14">
        <SolarCalculator />
        <div>
          <SectionHeading eyebrow="Financing" title="Make solar affordable"
            description="Possible routes include bank solar loans, home improvement loans, renewable energy financing and EMI options." />
          <div className="mt-8"><EmiCalculator /></div>
        </div>
      </div>
    </PageShell>
  );
}

export function SolarSubsidyPage() {
  return (
    <PageShell
      eyebrow="Government support" title="Solar Subsidy in India"
      description={`${subsidyConfig.schemeName} provides Central Financial Assistance to eligible residential rooftop customers.`}
      seoTitle="Solar Subsidy & PM Surya Ghar in Andhra Pradesh | Aaryan Solar"
      seoDescription="How PM Surya Ghar: Muft Bijli Yojana residential solar subsidy works, the CFA slab structure, eligibility and how to verify current rules."
      path="/solar-subsidy"
    >
      <div className="container-x grid gap-10 lg:grid-cols-2 lg:items-start">
        <div className="space-y-4 sm:space-y-6">
          <div className="surface-card p-4 sm:p-6">
            <h2 className="text-sm sm:text-lg font-bold text-navy">Commonly applicable residential structure</h2>
            <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-foreground/80">
              <li>First {subsidyConfig.firstSlabKw} kW — {inr(subsidyConfig.firstSlabRatePerKw)} per kW</li>
              <li>Additional {subsidyConfig.secondSlabKw} kW — {inr(subsidyConfig.secondSlabRatePerKw)} per kW</li>
              <li>Maximum CFA — {inr(subsidyConfig.maxCfa)} for eligible residential systems up to 3 kW under this structure</li>
            </ul>
          </div>
          <div className="surface-card p-4 sm:p-6">
            <h2 className="text-sm sm:text-lg font-bold text-navy">Eligibility and verification</h2>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground">
              Subsidy is not automatic. Applicants must register on the national portal, be a residential
              consumer of the DISCOM, install through a registered vendor, and complete inspection and
              net-metering. Requirements are verified by the authorities, not by Aaryan Solar.
            </p>
          </div>
          <Disclaimer text={disclaimers.government} lastVerified={subsidyConfig.lastVerified}
            sourceLabel="pmsuryaghar.gov.in" sourceUrl={subsidyConfig.officialSource} />
          <Button asChild className="rounded-full px-7 text-xs sm:text-sm"><Link to="/contact">Check My Subsidy Eligibility</Link></Button>
        </div>
        <SubsidyCalculator />
      </div>
    </PageShell>
  );
}

export function SolarPricingPage() {
  return (
    <PageShell
      eyebrow="Pricing" title="What does solar cost?"
      description="Indicative ranges from configured assumptions. Final pricing follows a site assessment."
      seoTitle="Solar Panel Price & System Cost in Andhra Pradesh | Aaryan Solar"
      seoDescription="Indicative 1 kW to 10 kW rooftop solar pricing, panel count, inverter type, subsidy and estimated net cost for Andhra Pradesh."
      path="/solar-pricing"
    >
      <div className="container-x">
        <Grid>
          {packages.map((p, i) => {
            const min = p.kw * assumptions.costPerKw.min;
            const max = p.kw * assumptions.costPerKw.max;
            const subsidy = calculateSubsidy(p.kw);
            return (
              <Reveal as="li" key={p.capacity} delay={i * 60}>
                <div className={`surface-card h-full p-4 sm:p-6 ${p.popular ? "ring-2 ring-primary" : ""}`}>
                  <h2 className="font-display text-base sm:text-2xl font-extrabold text-navy">{p.capacity}</h2>
                  <p className="mt-0.5 sm:mt-1 text-[0.7rem] sm:text-sm text-muted-foreground">{p.audience}</p>
                  <dl className="mt-3.5 sm:mt-5 space-y-1.5 sm:space-y-2 text-xs sm:text-sm">
                    {[
                      ["Est. generation", `${Math.round(p.kw * assumptions.dailyYieldPerKw * 30)} units / month`],
                      ["Panel quantity", p.panels],
                      ["Inverter", p.inverter],
                      ["Installation", "Included"],
                      ["Mounting structure", "Galvanised, site specific"],
                      ["Price range", `${inr(min)} – ${inr(max)}`],
                      ["Applicable subsidy", subsidy > 0 ? inr(subsidy) : "Not applicable"],
                      ["Est. net cost", `${inr(Math.max(min - subsidy, 0))} – ${inr(Math.max(max - subsidy, 0))}`],
                    ].map(([k, v]) => (
                      <div key={k} className="flex justify-between gap-3 border-b border-border pb-1.5">
                        <dt className="text-muted-foreground">{k}</dt><dd className="text-right font-medium">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <Button asChild className="mt-4 sm:mt-6 w-full rounded-xl text-xs sm:text-sm"><Link to="/contact">Get Exact Quote</Link></Button>
                </div>
              </Reveal>
            );
          })}
        </Grid>
        <Disclaimer className="mt-8" text={disclaimers.estimate} />
      </div>
    </PageShell>
  );
}

export function ProjectsPage() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", "Residential", "Commercial", "Industrial", "Agricultural"];
  const list = filter === "All" ? projects : projects.filter((p) => p.category === filter);
  return (
    <PageShell
      eyebrow="Projects" title="Our solar projects"
      description="Structured placeholder entries — replace with verified Aaryan Solar projects and photographs."
      seoTitle="Solar Projects in Andhra Pradesh | Aaryan Solar"
      seoDescription="Residential, commercial, industrial and agricultural solar projects delivered across Andhra Pradesh by Aaryan Solar."
      path="/projects"
    >
      <div className="container-x">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button key={c} type="button" onClick={() => setFilter(c)}
              aria-pressed={filter === c}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition-colors ${filter === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-primary/50"}`}>
              {c}
            </button>
          ))}
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 50}>
              <article className="surface-card h-full overflow-hidden">
                <img src={p.category === "Commercial" || p.category === "Industrial" ? commercialImg : panelImg}
                  alt={`${p.title} at ${p.location}`} width={1280} height={960} loading="lazy"
                  className="h-28 sm:h-44 w-full object-cover" />
                <div className="p-3 sm:p-5">
                  <span className="text-[0.65rem] sm:text-xs font-semibold uppercase tracking-wide text-primary">{p.category}</span>
                  <h2 className="mt-1 text-sm sm:text-base font-bold text-navy">{p.title}</h2>
                  <dl className="mt-2.5 sm:mt-3 space-y-1 text-xs sm:text-sm text-muted-foreground">
                    <div><dt className="inline font-medium text-foreground">Location: </dt><dd className="inline">{p.location}</dd></div>
                    <div><dt className="inline font-medium text-foreground">Capacity: </dt><dd className="inline">{p.capacity}</dd></div>
                    <div><dt className="inline font-medium text-foreground">Panel brand: </dt><dd className="inline">{p.brand}</dd></div>
                    <div><dt className="inline font-medium text-foreground">Inverter: </dt><dd className="inline">{p.inverter}</dd></div>
                    <div><dt className="inline font-medium text-foreground">Installation: </dt><dd className="inline">{p.type}</dd></div>
                    <div><dt className="inline font-medium text-foreground">Generation: </dt><dd className="inline">{p.generation}</dd></div>
                  </dl>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}

export function SolarGuidePage() {
  const [district, setDistrict] = useState(districts[0]);
  const discom = districtDiscom(district);
  return (
    <PageShell
      eyebrow="Solar guide" title="How solar works — and how it works in Andhra Pradesh"
      description="A plain-language walkthrough of generation, system types, the AP DISCOM process and maintenance."
      seoTitle="How Solar Works & Rooftop Solar in Andhra Pradesh | Aaryan Solar"
      seoDescription="How rooftop solar works, on-grid vs off-grid vs hybrid, net metering with APCPDCL, APEPDCL and APSPDCL, and solar maintenance in Andhra Pradesh."
      path="/solar-guide"
    >
      <div className="container-x space-y-16">
        <div>
          <SectionHeading eyebrow="Energy flow" title="From sunlight to your switchboard" />
          <ol className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-5">
            {processSteps.map((s, i) => (
              <Reveal as="li" key={s.no} delay={i * 70} className={i === 4 ? "col-span-2 sm:col-span-1" : ""}>
                <div className="surface-card h-full p-4 sm:p-5">
                  <span className="font-display text-xs sm:text-sm font-bold text-primary">{s.no}</span>
                  <h3 className="mt-1.5 sm:mt-2 text-sm sm:text-base font-bold text-navy">{s.title}</h3>
                  <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-muted-foreground">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <div>
          <SectionHeading eyebrow="System types" title="On-grid, off-grid and hybrid" />
          <div className="mt-8 overflow-x-auto rounded-2xl border border-border">
            <table className="w-full min-w-[560px] border-collapse overflow-hidden bg-card text-sm shadow-soft">
              <caption className="sr-only">Solar system type comparison</caption>
              <thead><tr className="bg-navy text-navy-foreground">
                {systemComparison.head.map((h) => <th key={h} scope="col" className="px-4 py-3 text-left font-semibold">{h}</th>)}
              </tr></thead>
              <tbody>
                {systemComparison.rows.map((r) => (
                  <tr key={r[0]} className="border-b border-border last:border-0">
                    {r.map((c, i) => <td key={i} className={i === 0 ? "px-4 py-3 font-medium text-navy" : "px-4 py-3 text-muted-foreground"}>{c}</td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {systemTypes.map((t, i) => (
              <li key={t.id} className={`surface-card p-4 sm:p-5 ${i === 2 ? "col-span-2 sm:col-span-1" : ""}`}>
                <h3 className="text-sm sm:text-base font-bold text-navy">{t.name}</h3>
                <p className="mt-1 sm:mt-1.5 text-xs sm:text-sm text-muted-foreground">{t.summary}</p>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <SectionHeading eyebrow="Andhra Pradesh" title="Solar in Andhra Pradesh"
            description="Rooftop solar in AP involves your DISCOM for feasibility, net metering and inspection. Regulations are set by APERC and the DISCOMs." />
          <div className="mt-8 max-w-sm">
            <label htmlFor="district" className="text-sm font-medium">Select your district</label>
            <select id="district" value={district} onChange={(e) => setDistrict(e.target.value)}
              className="mt-1.5 h-11 w-full rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
              {districts.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>
          <div className="surface-card mt-5 p-4 sm:p-6">
            <p className="text-xs sm:text-sm text-muted-foreground">Service information for</p>
            <h3 className="mt-0.5 sm:mt-1 text-sm sm:text-lg font-bold text-navy">{district}, Andhra Pradesh</h3>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm"><span className="font-semibold text-navy">Likely DISCOM: </span>{discom.code} — {discom.name}</p>
            <p className="mt-0.5 sm:mt-1 text-xs sm:text-sm text-muted-foreground">{discom.area}</p>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground">
              Residential, commercial, industrial and agricultural installations are undertaken in this
              region. Net-metering steps, feasibility and applicable charges are as per your DISCOM and
              APERC regulations — we do not publish district-specific subsidy rules.
            </p>
            <Button asChild className="mt-4 sm:mt-5 rounded-full px-6 text-xs sm:text-sm">
              <a href={whatsappUrl(`Hello Aaryan Solar, I am in ${district}, Andhra Pradesh and would like solar information for my property.`)} target="_blank" rel="noopener noreferrer">
                Ask about {district}
              </a>
            </Button>
          </div>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {discoms.map((d, i) => (
              <li key={d.code} className={`surface-card p-4 sm:p-5 ${i === 2 ? "col-span-2 sm:col-span-1" : ""}`}>
                <h3 className="text-sm sm:text-base font-bold text-navy">{d.code}</h3>
                <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{d.name}</p>
              </li>
            ))}
          </ul>
          <Disclaimer className="mt-6" text={disclaimers.government}
            sourceLabel="MNRE — official source" sourceUrl="https://mnre.gov.in/" />
        </div>

        <div>
          <SectionHeading eyebrow="Maintenance" title="Solar care & maintenance" />
          <Grid className="mt-6">
            {maintenanceItems.map((m, i) => (
              <Reveal as="li" key={m.title} delay={i * 50}>
                <div className="surface-card h-full p-4 sm:p-5">
                  <h3 className="text-sm sm:text-base font-bold text-navy">{m.title}</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-muted-foreground">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </Grid>
          <ul className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
            {servicePlans.map((p, i) => (
              <li key={p.name} className={`surface-card p-4 sm:p-6 ${i === 2 ? "col-span-2 sm:col-span-1" : ""}`}>
                <h3 className="text-sm sm:text-base font-bold text-navy">{p.name}</h3>
                <p className="text-[0.65rem] sm:text-xs uppercase tracking-wide text-muted-foreground">{p.period}</p>
                <ul className="mt-2.5 sm:mt-3 space-y-1 sm:space-y-1.5 text-xs sm:text-sm text-foreground/80">
                  {p.items.map((it) => <li key={it}>• {it}</li>)}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageShell>
  );
}

export function BlogPage() {
  return (
    <PageShell
      eyebrow="Knowledge hub" title="Learn about solar"
      description="Guides on solar basics, cost, subsidy, technology and maintenance."
      seoTitle="Solar Knowledge Hub & Blog | Aaryan Solar Andhra Pradesh"
      seoDescription="Guides on solar cost, PM Surya Ghar subsidy, on-grid vs hybrid systems, panel counts and maintenance for Andhra Pradesh homes and businesses."
      path="/blog"
    >
      <div className="container-x">
        <ul className="flex flex-wrap gap-2">
          {blogCategories.map((c) => (
            <li key={c} className="rounded-full bg-muted px-4 py-2 text-sm text-foreground/75">{c}</li>
          ))}
        </ul>
        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3">
          {blogPosts.map((p, i) => (
            <Reveal as="li" key={p.slug} delay={i * 50}>
              <article className="surface-card h-full p-4 sm:p-6">
                <span className="text-[0.65rem] sm:text-xs font-semibold uppercase tracking-wide text-primary">{p.category}</span>
                <h2 className="mt-1.5 sm:mt-2 text-sm sm:text-base font-bold text-navy">{p.title}</h2>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground">{p.excerpt}</p>
                <p className="mt-3.5 sm:mt-4 text-[0.65rem] sm:text-xs text-muted-foreground">Article content at /blog/{p.slug}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </PageShell>
  );
}

export function FaqPage() {
  return (
    <PageShell
      eyebrow="FAQ" title="Frequently asked questions"
      description="Everything customers usually ask before going solar."
      seoTitle="Solar FAQs — Cost, Subsidy, Net Metering | Aaryan Solar"
      seoDescription="Answers to common rooftop solar questions on cost, panel count, net metering, PM Surya Ghar subsidy, maintenance and installation timelines."
      path="/faq"
    >
      <div className="container-x max-w-3xl">
        <dl className="space-y-6">
          {faqs.map((f) => (
            <div key={f.q} className="surface-card p-6">
              <dt className="text-base font-bold text-navy">{f.q}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </PageShell>
  );
}

export function AboutPage() {
  return (
    <PageShell
      eyebrow="About us" title="Building a Brighter Energy Future"
      description="Aaryan Solar is a solar rooftop company serving homes, businesses, industries and farms across Andhra Pradesh."
      seoTitle="About Aaryan Solar — Solar Company in Andhra Pradesh"
      seoDescription="Aaryan Solar's mission, vision, values and approach to rooftop solar consultation, design, installation and support in Andhra Pradesh."
      path="/about"
    >
      <div className="container-x space-y-14">
        <div className="grid grid-cols-2 gap-3 sm:gap-5">
          {[
            ["Our Mission", "Make well-engineered solar accessible to households and businesses in Andhra Pradesh, with transparent advice at every step."],
            ["Our Vision", "A state where rooftops carry a meaningful share of the electricity people use every day."],
            ["Our Values", "Transparency in pricing, honesty about what solar can and cannot do, and accountability after commissioning."],
            ["Our Approach", "Bill analysis, site survey, engineered design, documented installation and long-term support — in that order."],
          ].map(([title, text], i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="surface-card h-full p-4 sm:p-6">
                <h2 className="text-sm sm:text-lg font-bold text-navy">{title}</h2>
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground">{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground">
          Company history, founding year, team size and certifications are intentionally left blank
          until verified details are supplied by Aaryan Solar.
        </p>
        <div>
          <SectionHeading eyebrow="Why choose us" title="Why choose Aaryan Solar" />
          <Grid className="mt-6">
            {whyAryan.map((w, i) => (
              <Reveal as="li" key={w.title} delay={i * 50}>
                <div className="surface-card h-full p-4 sm:p-6">
                  <Check className="h-4 w-4 sm:h-5 sm:w-5 text-primary" aria-hidden="true" />
                  <h3 className="mt-3 text-sm sm:text-base font-bold text-navy">{w.title}</h3>
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground">{w.text}</p>
                </div>
              </Reveal>
            ))}
          </Grid>
        </div>
        <div>
          <SectionHeading eyebrow="Process" title="Our installation process" />
          <ol className="mt-8 space-y-4 border-l border-border pl-6">
            {installationSteps.map((s) => (
              <li key={s.no} className="relative">
                <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
                <p className="text-sm font-semibold text-navy"><span className="mr-2 text-primary">{s.no}</span>{s.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </PageShell>
  );
}

export function ContactPage() {
  return (
    <PageShell
      eyebrow="Contact" title="Talk to a solar expert"
      description="Share a few details and we will get back with a suitable system and quotation."
      seoTitle="Contact Aaryan Solar — Free Solar Quote in Andhra Pradesh"
      seoDescription="Request a free solar quote, book a rooftop site assessment or reach Aaryan Solar on WhatsApp and phone in Andhra Pradesh."
      path="/contact"
    >
      <div className="container-x grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:items-start">
        <QuoteForm />
        <div className="space-y-6">
          <div className="surface-card p-4 sm:p-6">
            <h2 className="text-sm sm:text-lg font-bold text-navy">Visit Aaryan Solar</h2>
            <dl className="mt-4 grid grid-cols-2 gap-3 text-xs sm:text-sm">
              <div className="col-span-2">
                <dt className="inline font-semibold">Address: </dt>
                <dd className="inline text-muted-foreground">{site.address.line1}, {site.address.city}, {site.address.state} {site.address.pincode}</dd>
              </div>
              <div className="col-span-1">
                <dt className="block font-semibold">Phone: </dt>
                <dd className="block mt-0.5"><a href={telUrl} className="text-primary underline underline-offset-4">{site.phone}</a></dd>
              </div>
              <div className="col-span-1">
                <dt className="block font-semibold">WhatsApp: </dt>
                <dd className="block mt-0.5"><a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">Chat with us</a></dd>
              </div>
              <div className="col-span-2">
                <dt className="block font-semibold">Email: </dt>
                <dd className="block mt-0.5"><a href={`mailto:${site.email}`} className="text-primary underline underline-offset-4">{site.email}</a></dd>
              </div>
            </dl>
            <ul className="mt-4 space-y-1 text-xs sm:text-sm text-muted-foreground">
              {site.workingHours.map((w) => <li key={w.days}>{w.days}: {w.hours}</li>)}
            </ul>
            <p className="mt-3 text-[0.7rem] sm:text-xs text-muted-foreground">
              Address and map are placeholders until the client's verified office location is supplied.
            </p>
          </div>

          <div className="surface-card overflow-hidden">
            <iframe
              title="Aaryan Solar location on Google Maps"
              src={`https://www.google.com/maps?q=${encodeURIComponent(site.maps.embedQuery)}&output=embed`}
              className="h-72 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="p-4">
              <Button asChild variant="outline" className="w-full rounded-xl">
                <a href={site.maps.directionsUrl} target="_blank" rel="noopener noreferrer">Open in Google Maps</a>
              </Button>
            </div>
          </div>

          <div className="surface-card p-4 sm:p-6">
            <h2 className="text-sm sm:text-lg font-bold text-navy">Not sure what you need?</h2>
            <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-muted-foreground">
              Let our solar experts assess your property. Share your details on WhatsApp with your
              preferred appointment date and we will schedule a free site assessment.
            </p>
            <Button asChild className="mt-4 sm:mt-5 rounded-full px-6 text-xs sm:text-sm">
              <a href={whatsappUrl("Hello Aaryan Solar, I would like to book a free rooftop site assessment. Name: , Location: , Monthly electricity bill: , Property type: , Roof area: , Preferred date: ")}
                target="_blank" rel="noopener noreferrer">Book Free Site Assessment</a>
            </Button>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
