/**
 * ARYAN SOLAR — single source of truth for business information.
 * Replace every PLACEHOLDER value with the client's verified details before publishing.
 */

export const site = {
  name: "Aryan Solar",
  tagline: "Power Your Future with the Sun.",
  category: "Solar Energy Company",
  shortDescription:
    "Smart rooftop solar solutions designed for homes, businesses and industries across Andhra Pradesh.",
  url: "https://shine-empower-digital-rise.lovable.app",

  /** PLACEHOLDER — replace with verified contact details */
  phone: "+91 90000 00000",
  phoneRaw: "+919000000000",
  whatsapp: "919000000000",
  email: "hello@aryansolar.example",

  /** PLACEHOLDER — replace with the actual office address supplied by the client */
  address: {
    line1: "Aryan Solar — Office address to be provided",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    pincode: "520000",
    country: "India",
  },

  /** PLACEHOLDER — replace with the actual Google Maps place/embed for the client office */
  maps: {
    embedQuery: "Vijayawada, Andhra Pradesh, India",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=Vijayawada%2C%20Andhra%20Pradesh",
  },

  workingHours: [
    { days: "Monday – Saturday", hours: "9:30 AM – 7:00 PM" },
    { days: "Sunday", hours: "By appointment" },
  ],

  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
    linkedin: "#",
  },

  /** Statistics are editable placeholders — replace with verified business data or hide. */
  showStats: true,
  stats: [
    { value: 500, suffix: "+", label: "Solar installations", note: "Placeholder — verify" },
    { value: 25, suffix: "+ yrs", label: "Expected panel life", note: "Typical product literature" },
    { value: 25, suffix: "+ yrs", label: "Clean energy potential", note: "Indicative" },
    { value: 10, suffix: "+", label: "Service locations", note: "Placeholder — verify" },
  ],
} as const;

export const disclaimers = {
  estimate:
    "Indicative estimate only. Final system size, generation, pricing, subsidy eligibility and savings depend on site conditions, DISCOM rules, government guidelines and technical assessment.",
  government:
    "Government schemes, subsidy amounts, eligibility and regulations are subject to change. Please verify the latest information through the official government portal or with Aryan Solar before making financial decisions.",
  brands:
    "Brand names are shown to indicate product options we can source. Technical specifications, warranties and availability must be verified with the manufacturer before purchase. Aryan Solar does not claim authorised dealership unless explicitly stated.",
  financing:
    "Financing availability depends on the lender, customer eligibility and current banking policies. Aryan Solar does not provide loans directly.",
};

export const whatsappUrl = (message?: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    message ??
      "Hello Aryan Solar, I would like to know more about installing a solar system. Please help me with a suitable system and quotation."
  )}`;

export const telUrl = `tel:${site.phoneRaw}`;
