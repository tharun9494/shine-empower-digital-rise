/**
 * Configurable solar assumptions, subsidy structure and pricing.
 * All values are editable and must be verified before publishing.
 */

export const assumptions = {
  /** Average specific yield for Andhra Pradesh rooftops (kWh per kWp per day). Editable. */
  dailyYieldPerKw: 4.2,
  /** Default electricity tariff (₹ per unit) used when the visitor does not enter one. */
  defaultTariff: 8,
  /** Approximate shadow-free roof area needed per kW (sq ft). Editable. */
  roofAreaPerKw: 100,
  /** Typical panel wattage used to estimate panel count. Editable. */
  panelWattage: 545,
  /** Indicative installed cost range (₹ per kW) before subsidy. Editable placeholders. */
  costPerKw: { min: 55000, max: 70000 },
  lastVerified: "Not yet verified — update this date after checking official sources",
};

/**
 * PM Surya Ghar: Muft Bijli Yojana — residential Central Financial Assistance structure.
 * Values are configurable; verify against the National Rooftop Solar Portal before publishing.
 */
export const subsidyConfig = {
  schemeName: "PM Surya Ghar: Muft Bijli Yojana",
  officialSource: "https://pmsuryaghar.gov.in/",
  mnreSource: "https://mnre.gov.in/",
  lastVerified: "To be verified",
  firstSlabKw: 2,
  firstSlabRatePerKw: 30000,
  secondSlabKw: 1,
  secondSlabRatePerKw: 18000,
  maxCfa: 78000,
  residentialOnly: true,
};

export function calculateSubsidy(capacityKw: number) {
  const c = Math.max(0, capacityKw);
  const first = Math.min(c, subsidyConfig.firstSlabKw) * subsidyConfig.firstSlabRatePerKw;
  const second =
    Math.min(Math.max(c - subsidyConfig.firstSlabKw, 0), subsidyConfig.secondSlabKw) *
    subsidyConfig.secondSlabRatePerKw;
  return Math.min(first + second, subsidyConfig.maxCfa);
}

export const inr = (value: number) =>
  `₹${Math.round(value).toLocaleString("en-IN")}`;

/** Editable pricing packages — replace ranges with verified Aaryan Solar pricing. */
export const packages = [
  {
    capacity: "1 kW",
    kw: 1,
    audience: "Small residential requirement",
    panels: "≈ 2 panels",
    inverter: "String / hybrid inverter",
    popular: false,
  },
  {
    capacity: "2 kW",
    kw: 2,
    audience: "Medium residential requirement",
    panels: "≈ 4 panels",
    inverter: "String / hybrid inverter",
    popular: false,
  },
  {
    capacity: "3 kW",
    kw: 3,
    audience: "Popular residential configuration",
    panels: "≈ 6 panels",
    inverter: "String / hybrid inverter",
    popular: true,
  },
  {
    capacity: "5 kW",
    kw: 5,
    audience: "Large homes / small commercial",
    panels: "≈ 9–10 panels",
    inverter: "String inverter",
    popular: false,
  },
  {
    capacity: "10 kW",
    kw: 10,
    audience: "Commercial applications",
    panels: "≈ 18–20 panels",
    inverter: "Three-phase string inverter",
    popular: false,
  },
];

export const districts = [
  "Vijayawada",
  "Guntur",
  "Visakhapatnam",
  "Tirupati",
  "Nellore",
  "Kurnool",
  "Kadapa",
  "Anantapur",
  "Madanapalle",
  "Chittoor",
  "Rajahmundry",
  "Eluru",
  "Machilipatnam",
  "Ongole",
  "Srikakulam",
  "Vizianagaram",
];

export const discoms = [
  {
    code: "APEPDCL",
    name: "Eastern Power Distribution Company of AP",
    area: "Visakhapatnam, Vizianagaram, Srikakulam, Rajahmundry and surrounding areas",
  },
  {
    code: "APSPDCL",
    name: "Southern Power Distribution Company of AP",
    area: "Tirupati, Nellore, Kadapa, Chittoor, Anantapur and surrounding areas",
  },
  {
    code: "APCPDCL",
    name: "Central Power Distribution Company of AP",
    area: "Vijayawada, Guntur, Eluru, Machilipatnam and surrounding areas",
  },
];

export function districtDiscom(district: string) {
  const east = ["Visakhapatnam", "Vizianagaram", "Srikakulam", "Rajahmundry"];
  const south = ["Tirupati", "Nellore", "Kadapa", "Chittoor", "Anantapur", "Madanapalle", "Kurnool"];
  if (east.includes(district)) return discoms[0];
  if (south.includes(district)) return discoms[1];
  return discoms[2];
}
