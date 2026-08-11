/**
 * ARYAN SOLAR — single source of truth for business information.
 * Replace every PLACEHOLDER value with the client's verified details before publishing.
 */

export const site = {
  name: "Aaryan Solar",
  tagline: "Power Your Future with the Sun.",
  category: "Solar Energy Company",
  shortDescription:
    "Smart rooftop solar solutions designed for homes, businesses and industries across Andhra Pradesh.",
  url: "https://shine-empower-digital-rise.lovable.app",

  /** PLACEHOLDER — replace with verified contact details */
  phone: "+91 90000 00000",
  phoneRaw: "+919000000000",
  whatsapp: "919000000000",
  email: "hello@aaryansolar.example",

  /** Actual office address */
  address: {
    line1: "vrl backside, 21-139/58, Urmila Subbarao Nagar, Gollapudi",
    city: "Vijayawada",
    state: "Andhra Pradesh",
    pincode: "521225",
    country: "India",
  },

  /** Google Maps location config for Gollapudi office */
  maps: {
    embedQuery: "vrl backside, 21-139/58, Urmila Subbarao Nagar, Gollapudi, Vijayawada, Andhra Pradesh 521225",
    directionsUrl: "https://www.google.com/maps/search/?api=1&query=vrl+backside%2C+21-139%2F58%2C+Urmila+Subbarao+Nagar%2C+Gollapudi%2C+Vijayawada%2C+Andhra+Pradesh+521225",
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
    "Government schemes, subsidy amounts, eligibility and regulations are subject to change. Please verify the latest information through the official government portal or with Aaryan Solar before making financial decisions.",
  brands:
    "Brand names are shown to indicate product options we can source. Technical specifications, warranties and availability must be verified with the manufacturer before purchase. Aaryan Solar does not claim authorised dealership unless explicitly stated.",
  financing:
    "Financing availability depends on the lender, customer eligibility and current banking policies. Aaryan Solar does not provide loans directly.",
};

export const whatsappUrl = (message?: string) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    message ??
      "Hello Aaryan Solar, I would like to know more about installing a solar system. Please help me with a suitable system and quotation."
  )}`;

export const telUrl = `tel:${site.phoneRaw}`;
