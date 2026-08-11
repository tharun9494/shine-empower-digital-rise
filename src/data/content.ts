import { Home, Building2, Factory, Sprout } from "lucide-react";

export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Solar Solutions", path: "/solar-solutions" },
  { name: "Solar Panels", path: "/solar-panels" },
  { name: "How Solar Works", path: "/solar-guide" },
  { name: "Subsidy", path: "/solar-subsidy" },
  { name: "Pricing", path: "/solar-pricing" },
  { name: "Projects", path: "/projects" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export const solutions = [
  {
    slug: "residential-solar",
    title: "Residential Solar",
    icon: Home,
    blurb: "Rooftop systems designed around your family's daily consumption and roof layout.",
    forWhom: ["Independent houses", "Villas", "Apartments", "Residential buildings"],
    cta: "Explore Residential Solar",
    detail:
      "Residential rooftop solar is sized against your monthly consumption, shadow-free roof area and sanctioned load. Eligible residential customers may also apply for benefits under applicable government subsidy programmes.",
    highlights: [
      "Bill analysis and load study before design",
      "Structure engineered for local wind conditions",
      "Subsidy documentation assistance where eligible",
      "Net-metering coordination with your DISCOM",
    ],
  },
  {
    slug: "commercial-solar",
    title: "Commercial Solar",
    icon: Building2,
    blurb: "Daytime-heavy businesses can offset a large share of their energy spend.",
    forWhom: ["Shops", "Offices", "Schools", "Hospitals", "Hotels", "Warehouses"],
    cta: "Explore Commercial Solar",
    detail:
      "Commercial rooftops usually consume power during generation hours, which makes solar a strong operational fit. System design accounts for tariff category, roof type and future expansion.",
    highlights: [
      "Tariff-category aware sizing",
      "Metal sheet, RCC and elevated structure options",
      "Monitoring for multi-site operators",
      "Planned annual maintenance options",
    ],
  },
  {
    slug: "industrial-solar",
    title: "Industrial Solar",
    icon: Factory,
    blurb: "Large-format rooftop and ground-mount capacity for manufacturing loads.",
    forWhom: ["Factories", "Manufacturing units", "Large facilities", "Industrial buildings"],
    cta: "Explore Industrial Solar",
    detail:
      "Industrial systems require careful electrical integration with existing HT/LT infrastructure, protection coordination and structural assessment of large sheds.",
    highlights: [
      "Structural and electrical feasibility study",
      "Three-phase inverter architecture",
      "Protection and earthing design",
      "Performance monitoring and reporting",
    ],
  },
  {
    slug: "agricultural-solar",
    title: "Agricultural Solar",
    icon: Sprout,
    blurb: "Solar for pumping, irrigation and rural sites with weak grid supply.",
    forWhom: ["Farms", "Irrigation", "Agricultural pumps", "Rural applications"],
    cta: "Explore Agricultural Solar",
    detail:
      "Agricultural applications often run off-grid or hybrid because of unreliable supply. Pump capacity, water head and daily running hours drive the design.",
    highlights: [
      "Pump and borewell load assessment",
      "Off-grid and hybrid configurations",
      "Rugged mounting for open land",
      "Guidance on applicable government programmes",
    ],
  },
];

export const systemTypes = [
  {
    id: "on-grid",
    name: "On-Grid Solar",
    summary: "A solar system connected to the electricity grid, without a battery bank.",
    points: [
      "Lower upfront cost compared with battery-based systems",
      "Suitable for many homes and businesses",
      "Net-metering possibilities subject to applicable regulations",
      "No large battery bank required",
    ],
  },
  {
    id: "off-grid",
    name: "Off-Grid Solar",
    summary: "A solar system designed to operate independently from the electricity grid.",
    points: [
      "Components: solar panels, battery storage, inverter, charge controller",
      "Suited to remote locations",
      "Useful where grid supply is unreliable",
      "Independent energy requirements",
    ],
  },
  {
    id: "hybrid",
    name: "Hybrid Solar",
    summary: "Solar panels combined with grid supply and battery storage.",
    points: [
      "Backup power during outages",
      "Better energy management",
      "Grid independence when needed",
      "Higher initial cost than on-grid",
    ],
  },
];

export const systemComparison = {
  head: ["Feature", "On-Grid", "Off-Grid", "Hybrid"],
  rows: [
    ["Grid connection", "Yes", "No", "Yes"],
    ["Battery", "Usually no", "Yes", "Yes"],
    ["Backup power", "Limited", "Yes", "Yes"],
    ["Best for", "Homes / businesses", "Remote areas", "Homes needing backup"],
    ["Initial cost", "Lower", "Higher", "Higher"],
  ],
};

export const processSteps = [
  { no: "01", title: "Sunlight", text: "Sunlight reaches the solar panels installed on your roof." },
  { no: "02", title: "Solar Panels", text: "PV cells convert sunlight into DC electricity." },
  { no: "03", title: "Inverter", text: "The inverter converts DC electricity into usable AC electricity." },
  { no: "04", title: "Home / Business", text: "Electricity powers your appliances and equipment." },
  { no: "05", title: "Grid / Battery", text: "Excess energy can be exported to the grid or stored where applicable." },
];

export const panelTech = [
  {
    name: "Monocrystalline",
    efficiency: "Higher efficiency class",
    tech: "Single-crystal silicon cells",
    use: "Most rooftop projects",
    space: "Lower area per kW",
    cost: "Premium",
    notes: [
      "High efficiency relative to older technologies",
      "Better space utilisation on compact rooftops",
      "Commonly used for residential and commercial rooftops",
    ],
  },
  {
    name: "Polycrystalline",
    efficiency: "Lower efficiency class",
    tech: "Multi-crystal silicon cells",
    use: "Cost-sensitive projects with spare area",
    space: "Higher area per kW",
    cost: "Economical",
    notes: [
      "Traditional technology, widely understood",
      "Generally lower efficiency than modern monocrystalline products",
      "Availability is reducing as mono technology dominates",
    ],
  },
  {
    name: "Bifacial",
    efficiency: "Depends on mounting and albedo",
    tech: "Light capture from both faces",
    use: "Elevated structures, reflective surfaces",
    space: "Similar to mono",
    cost: "Premium",
    notes: [
      "Can generate from both sides under suitable conditions",
      "Gain depends on mounting height and surface reflectivity",
      "Useful for appropriate mounting environments only",
    ],
  },
  {
    name: "N-Type / TOPCon",
    efficiency: "Modern high-efficiency class",
    tech: "N-type wafer with tunnel-oxide passivated contacts",
    use: "Space-constrained or performance-focused projects",
    space: "Lowest area per kW",
    cost: "Premium",
    notes: [
      "Current-generation high-efficiency cell architecture",
      "Manufacturer datasheets should be reviewed for exact figures",
      "Availability varies by supplier and batch",
    ],
  },
];

/** Brands shown as available/preferred options — no partnership claim. */
export const brands = [
  { name: "Waaree", tech: "Mono PERC / N-Type", efficiency: "As per datasheet", warranty: "As per manufacturer" },
  { name: "Tata Power Solar", tech: "Mono PERC", efficiency: "As per datasheet", warranty: "As per manufacturer" },
  { name: "Adani Solar", tech: "Mono PERC / TOPCon", efficiency: "As per datasheet", warranty: "As per manufacturer" },
  { name: "Vikram Solar", tech: "Mono PERC / Bifacial", efficiency: "As per datasheet", warranty: "As per manufacturer" },
  { name: "RenewSys", tech: "Mono PERC", efficiency: "As per datasheet", warranty: "As per manufacturer" },
  { name: "Other approved brands", tech: "On request", efficiency: "As per datasheet", warranty: "As per manufacturer" },
];

export const inverters = [
  {
    name: "String Inverter",
    what: "Connects a series (string) of panels and converts DC to AC at a single point.",
    where: "Standard on-grid residential, commercial and industrial rooftops.",
    pros: ["Cost-effective per kW", "Simple maintenance point", "Widely available service support"],
    cons: ["Shading on one panel can affect the string", "No battery backup unless hybrid-capable"],
    system: "On-grid",
  },
  {
    name: "Hybrid Inverter",
    what: "Manages solar, grid and battery in one unit.",
    where: "Homes and facilities that need backup during outages.",
    pros: ["Battery-ready", "Backup during power cuts", "Better energy management"],
    cons: ["Higher cost", "Battery adds replacement cycles"],
    system: "Hybrid / off-grid",
  },
  {
    name: "Microinverter",
    what: "One small inverter per panel or panel pair, converting DC to AC at the module.",
    where: "Complex roofs with partial shading or multiple orientations.",
    pros: ["Panel-level performance", "Shade tolerance", "Module-level monitoring"],
    cons: ["Higher cost per kW", "More units on the roof"],
    system: "On-grid",
  },
];

export const systemComponents = [
  { name: "Solar Panels", text: "Photovoltaic modules that convert sunlight into DC electricity." },
  { name: "Inverter", text: "Converts DC output from panels into AC electricity for your loads." },
  { name: "Mounting Structure", text: "Galvanised structure that holds panels at the correct tilt and resists wind load." },
  { name: "DC Cables", text: "Solar-rated cables carrying DC power from panels to the inverter." },
  { name: "AC Cables", text: "Cables carrying AC output from inverter to your distribution board." },
  { name: "DCDB", text: "DC distribution box with protection devices on the DC side." },
  { name: "ACDB", text: "AC distribution box with protection devices on the AC side." },
  { name: "Earthing", text: "Earth pits and conductors that safely route fault currents to ground." },
  { name: "Lightning Protection", text: "Arrester and earthing arrangement to reduce lightning-related risk." },
  { name: "Net Meter", text: "Bi-directional meter installed by the DISCOM to record import and export." },
  { name: "Battery", text: "Energy storage used in hybrid and off-grid systems for backup." },
];

export const whySolar = [
  { title: "Lower Electricity Bills", text: "Generate your own electricity and reduce dependence on grid power." },
  { title: "Energy Independence", text: "Produce clean energy directly from your rooftop." },
  { title: "Long-Term Savings", text: "Solar systems can provide value over many years." },
  { title: "Sustainable Future", text: "Reduce dependence on conventional energy sources." },
  { title: "Government Support", text: "Eligible residential customers may benefit from applicable government subsidy programmes." },
  { title: "Property Value", text: "A professionally installed solar system can improve the energy profile of a property." },
];

export const whyAryan = [
  { title: "Professional Consultation", text: "We start with your bill, your loads and your roof — not a fixed package." },
  { title: "Quality Components", text: "Panels, inverters and balance-of-system selected on datasheet merit." },
  { title: "Customised System Design", text: "Layout, tilt and string design prepared for your specific site." },
  { title: "Expert Installation", text: "Structured installation with attention to earthing, cabling and safety." },
  { title: "Subsidy Assistance", text: "Guidance through applicable government portals and documentation." },
  { title: "After-Sales Support", text: "Performance checks, cleaning guidance and service coordination." },
];

export const installationSteps = [
  { no: "01", title: "Consultation", text: "Understand your requirement, site and expectations." },
  { no: "02", title: "Electricity Bill Analysis", text: "Study consumption pattern, tariff and sanctioned load." },
  { no: "03", title: "Site Survey", text: "Measure shadow-free area, roof condition and cable routes." },
  { no: "04", title: "System Design", text: "Prepare layout, string design and single-line diagram." },
  { no: "05", title: "Quotation", text: "Share a transparent, itemised proposal." },
  { no: "06", title: "Subsidy / Documentation", text: "Assist with applicable portal registration and paperwork." },
  { no: "07", title: "Installation", text: "Structure, modules, inverter, cabling and earthing." },
  { no: "08", title: "Inspection / Grid Process", text: "Coordinate DISCOM inspection and net-metering steps." },
  { no: "09", title: "Commissioning", text: "Testing, energisation and handover with documentation." },
  { no: "10", title: "After-Sales Support", text: "Monitoring, maintenance guidance and service response." },
];

export const maintenanceItems = [
  { title: "Panel Cleaning", text: "Dust and bird droppings reduce output; periodic cleaning restores performance." },
  { title: "Performance Monitoring", text: "Compare actual generation against expected generation for the season." },
  { title: "Electrical Inspection", text: "Check terminations, protection devices and isolators." },
  { title: "Inverter Checks", text: "Review error logs, ventilation and firmware status." },
  { title: "Cable Inspection", text: "Look for rodent damage, UV degradation and loose clamps." },
  { title: "Earthing Inspection", text: "Verify earth continuity and pit condition." },
];

export const servicePlans = [
  { name: "Basic Care", period: "Annual", items: ["2 visits per year", "Panel cleaning guidance", "Visual electrical check"] },
  { name: "Standard Care", period: "Annual", items: ["4 visits per year", "Panel cleaning", "Inverter and cable checks", "Generation report"] },
  { name: "Comprehensive Care", period: "Annual", items: ["6 visits per year", "Full electrical inspection", "Earthing check", "Priority service response"] },
];

/** Placeholder projects — replace with real Aaryan Solar project data and photos. */
export const projects = [
  { title: "5 kW Residential Rooftop", category: "Residential", location: "Vijayawada, AP", capacity: "5 kW", brand: "To be confirmed", inverter: "String inverter", type: "RCC elevated structure", generation: "Indicative — site dependent", status: "Placeholder" },
  { title: "3 kW Residential Rooftop", category: "Residential", location: "Guntur, AP", capacity: "3 kW", brand: "To be confirmed", inverter: "String inverter", type: "RCC standard structure", generation: "Indicative — site dependent", status: "Placeholder" },
  { title: "20 kW Commercial Rooftop", category: "Commercial", location: "Visakhapatnam, AP", capacity: "20 kW", brand: "To be confirmed", inverter: "Three-phase string", type: "Metal sheet roof", generation: "Indicative — site dependent", status: "Placeholder" },
  { title: "10 kW Office Rooftop", category: "Commercial", location: "Tirupati, AP", capacity: "10 kW", brand: "To be confirmed", inverter: "Three-phase string", type: "RCC structure", generation: "Indicative — site dependent", status: "Placeholder" },
  { title: "100 kW Industrial Shed", category: "Industrial", location: "Nellore, AP", capacity: "100 kW", brand: "To be confirmed", inverter: "Three-phase string", type: "Sheet roof, purlin mounted", generation: "Indicative — site dependent", status: "Placeholder" },
  { title: "7.5 HP Solar Pump", category: "Agricultural", location: "Kurnool, AP", capacity: "7.5 HP", brand: "To be confirmed", inverter: "Pump controller", type: "Ground mount", generation: "Indicative — site dependent", status: "Placeholder" },
];

/** Placeholder testimonials — replace only with real, consented customer feedback. */
export const testimonials = [
  { quote: "Customer feedback placeholder. Replace with a real, consented testimonial before publishing.", name: "Customer name placeholder", location: "District, AP", system: "3 kW residential" },
  { quote: "Customer feedback placeholder. Replace with a real, consented testimonial before publishing.", name: "Customer name placeholder", location: "District, AP", system: "10 kW commercial" },
  { quote: "Customer feedback placeholder. Replace with a real, consented testimonial before publishing.", name: "Customer name placeholder", location: "District, AP", system: "5 kW residential" },
];

export const faqs = [
  { q: "What is rooftop solar?", a: "Rooftop solar is a photovoltaic system installed on your roof that converts sunlight into electricity for your own use, with excess energy exported to the grid or stored, depending on the system type." },
  { q: "How much does a solar system cost?", a: "Cost depends on capacity, panel and inverter selection, structure type and site conditions. We publish indicative ranges and share exact pricing after a site assessment." },
  { q: "How many solar panels do I need?", a: "Panel count depends on the system capacity and the wattage of the selected module. A 3 kW system using 545 W panels needs roughly six panels." },
  { q: "Which solar system is best for my home?", a: "On-grid suits homes with stable supply, hybrid suits homes needing backup, and off-grid suits locations without reliable grid access." },
  { q: "What is net metering?", a: "Net metering is a DISCOM arrangement where a bi-directional meter records the units you import and the units you export, and your bill is settled accordingly as per applicable regulations." },
  { q: "What is PM Surya Ghar?", a: "PM Surya Ghar: Muft Bijli Yojana is a Government of India residential rooftop solar programme that provides Central Financial Assistance to eligible households. Verify current terms on the official portal." },
  { q: "How does solar subsidy work?", a: "Eligible residential customers apply through the national portal, get the system installed by a registered vendor, complete inspection and net-metering, and then receive the applicable assistance as per scheme rules." },
  { q: "How long do solar panels last?", a: "Manufacturers typically publish performance warranties spanning around 25 years. Refer to the specific product datasheet for exact terms." },
  { q: "What maintenance is required?", a: "Mainly periodic panel cleaning, plus periodic electrical, inverter, cable and earthing inspections." },
  { q: "Does solar work during cloudy weather?", a: "Yes, but output is reduced because generation depends on the amount of solar irradiance reaching the panels." },
  { q: "What happens during a power cut?", a: "On-grid systems shut down for safety during a grid outage. Hybrid and off-grid systems with batteries can continue supplying selected loads." },
  { q: "Can solar reduce my electricity bill to zero?", a: "Some customers see very low bills, but this depends on system size, consumption pattern, tariff structure and DISCOM settlement rules. Fixed charges usually remain." },
  { q: "How long does installation take?", a: "Physical installation for a typical residential system is usually a few days. Overall timelines depend on approvals, meter installation and material availability." },
  { q: "What documents are required?", a: "Typically identity proof, address proof, a recent electricity bill and property ownership details. Requirements vary by scheme and DISCOM." },
  { q: "Can I finance my solar system?", a: "Several banks and NBFCs offer solar or home-improvement loans. Availability and terms depend on the lender and your eligibility." },
  { q: "Is solar suitable for apartments?", a: "Yes, commonly for common-area loads or through shared arrangements, subject to society approval and DISCOM rules." },
];

export const blogPosts = [
  { slug: "3kw-solar-system-cost", title: "How Much Does a 3 kW Solar System Cost?", category: "Solar Cost", excerpt: "What drives the price of a 3 kW rooftop system, and how subsidy changes your net outlay." },
  { slug: "understanding-pm-surya-ghar-subsidy", title: "Understanding PM Surya Ghar Subsidy", category: "Solar Subsidy", excerpt: "How the residential CFA structure works, who is eligible, and how to verify current terms." },
  { slug: "on-grid-vs-off-grid-vs-hybrid-solar", title: "On-Grid vs Off-Grid vs Hybrid Solar", category: "Solar Basics", excerpt: "A plain-language comparison to help you pick the right architecture." },
  { slug: "how-many-solar-panels-does-your-home-need", title: "How Many Solar Panels Does Your Home Need?", category: "Solar Basics", excerpt: "Working backwards from your monthly units to panel count and roof area." },
  { slug: "is-solar-worth-it-in-andhra-pradesh", title: "Is Solar Worth It in Andhra Pradesh?", category: "Solar Cost", excerpt: "Irradiance, tariffs and DISCOM processes that shape returns in AP." },
  { slug: "solar-panel-maintenance-guide", title: "Solar Panel Maintenance Guide", category: "Solar Maintenance", excerpt: "A practical routine for keeping generation close to design expectations." },
];

export const blogCategories = [
  "Solar Basics",
  "Solar Subsidy",
  "Solar Cost",
  "Solar Technology",
  "Government Schemes",
  "Solar Maintenance",
  "Solar Financing",
  "Solar for Businesses",
  "Solar for Farmers",
];
