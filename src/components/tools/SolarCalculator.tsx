import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MessageCircle } from "lucide-react";
import { assumptions, calculateSubsidy, inr, districts } from "@/config/solar";
import { disclaimers, whatsappUrl } from "@/config/site";
import Disclaimer from "@/components/common/Disclaimer";

const select =
  "h-11 w-full rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

export default function SolarCalculator() {
  const [bill, setBill] = useState(5000);
  const [tariff, setTariff] = useState(assumptions.defaultTariff);
  const [district, setDistrict] = useState(districts[0]);
  const [property, setProperty] = useState("Residential");
  const [roofArea, setRoofArea] = useState(600);
  const [desired, setDesired] = useState<string>("auto");

  const result = useMemo(() => {
    const units = bill > 0 && tariff > 0 ? bill / tariff : 0;
    const requiredKw = units / (assumptions.dailyYieldPerKw * 30);
    const roofLimitKw = roofArea / assumptions.roofAreaPerKw;
    const autoKw = Math.max(1, Math.min(requiredKw, roofLimitKw));
    const capacity = desired === "auto" ? Math.round(autoKw * 2) / 2 : Number(desired);
    const monthly = capacity * assumptions.dailyYieldPerKw * 30;
    const annual = monthly * 12;
    const savings = Math.min(monthly * tariff, bill);
    const costMin = capacity * assumptions.costPerKw.min;
    const costMax = capacity * assumptions.costPerKw.max;
    const subsidy = property === "Residential" ? calculateSubsidy(capacity) : 0;
    const netMin = Math.max(costMin - subsidy, 0);
    const netMax = Math.max(costMax - subsidy, 0);
    const payback = savings > 0 ? (netMin + netMax) / 2 / (savings * 12) : 0;
    return { units, capacity, monthly, annual, savings, costMin, costMax, subsidy, netMin, netMax, payback };
  }, [bill, tariff, roofArea, desired, property]);

  const waMessage = `Hello Aryan Solar, I used your solar calculator. Monthly bill: ₹${bill}. Location: ${district}, Andhra Pradesh. Property: ${property}. Estimated capacity: ${result.capacity} kW. Please share a suitable system and quotation.`;

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <div className="surface-card p-6 sm:p-8">
        <h3 className="font-display text-xl font-bold text-navy">Estimate Your Solar System</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Enter a few details and we will estimate an indicative system for you.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-2">
          <div>
            <Label htmlFor="bill">Monthly electricity bill (₹)</Label>
            <Input
              id="bill"
              type="number"
              min={0}
              max={1000000}
              value={bill}
              onChange={(e) => setBill(Math.max(0, Math.min(1000000, Number(e.target.value))))}
              className="mt-1.5 h-11 rounded-xl"
            />
          </div>
          <div>
            <Label htmlFor="tariff">Electricity tariff (₹ / unit)</Label>
            <Input
              id="tariff"
              type="number"
              min={1}
              max={50}
              step={0.5}
              value={tariff}
              onChange={(e) => setTariff(Math.max(1, Math.min(50, Number(e.target.value))))}
              className="mt-1.5 h-11 rounded-xl"
            />
          </div>
          <div>
            <Label htmlFor="district">Location (district)</Label>
            <select
              id="district"
              className={`mt-1.5 ${select}`}
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            >
              {districts.map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="property">Property type</Label>
            <select
              id="property"
              className={`mt-1.5 ${select}`}
              value={property}
              onChange={(e) => setProperty(e.target.value)}
            >
              {["Residential", "Commercial", "Industrial", "Agricultural"].map((p) => (
                <option key={p}>{p}</option>
              ))}
            </select>
          </div>
          <div>
            <Label htmlFor="roof">Shadow-free roof area (sq ft)</Label>
            <Input
              id="roof"
              type="number"
              min={50}
              max={100000}
              value={roofArea}
              onChange={(e) => setRoofArea(Math.max(50, Math.min(100000, Number(e.target.value))))}
              className="mt-1.5 h-11 rounded-xl"
            />
          </div>
          <div>
            <Label htmlFor="desired">Desired capacity</Label>
            <select
              id="desired"
              className={`mt-1.5 ${select}`}
              value={desired}
              onChange={(e) => setDesired(e.target.value)}
            >
              <option value="auto">Suggest for me</option>
              {[1, 2, 3, 5, 10, 20, 50].map((k) => (
                <option key={k} value={k}>{k} kW</option>
              ))}
            </select>
          </div>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          Estimated consumption: <strong className="text-foreground">{Math.round(result.units)} units / month</strong>{" "}
          at {tariff} ₹/unit. Assumptions are editable in the project configuration.
        </p>
      </div>

      <div className="space-y-4">
        <div className="rounded-2xl bg-navy p-6 text-navy-foreground shadow-lift sm:p-8">
          <p className="eyebrow text-secondary">Your indicative estimate</p>
          <div className="mt-4 flex items-end gap-2">
            <span className="font-display text-5xl font-extrabold leading-none">{result.capacity}</span>
            <span className="mb-1 text-lg font-semibold text-secondary">kW suggested</span>
          </div>
          <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3.5 sm:gap-x-6 sm:gap-y-4 text-xs sm:text-sm">
            {[
              ["Monthly generation", `${Math.round(result.monthly)} units`],
              ["Annual generation", `${Math.round(result.annual).toLocaleString("en-IN")} units`],
              ["Estimated bill savings", `${inr(result.savings)} / month`],
              ["Roof area needed", `≈ ${Math.round(result.capacity * assumptions.roofAreaPerKw)} sq ft`],
              ["System cost range", `${inr(result.costMin)} – ${inr(result.costMax)}`],
              ["Estimated subsidy", result.subsidy > 0 ? inr(result.subsidy) : "Not applicable"],
              ["Your contribution", `${inr(result.netMin)} – ${inr(result.netMax)}`],
              ["Estimated payback", result.payback > 0 ? `${result.payback.toFixed(1)} years` : "—"],
            ].map(([label, value]) => (
              <div key={label as string}>
                <dt className="text-navy-foreground/60">{label}</dt>
                <dd className="mt-0.5 font-semibold">{value}</dd>
              </div>
            ))}
          </dl>
          <Button asChild className="mt-7 w-full rounded-xl">
            <a href={whatsappUrl(waMessage)} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" /> Send this estimate on WhatsApp
            </a>
          </Button>
        </div>
        <Disclaimer text={disclaimers.estimate} lastVerified={assumptions.lastVerified} />
      </div>
    </div>
  );
}
