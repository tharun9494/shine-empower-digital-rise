import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { calculateSubsidy, inr, subsidyConfig } from "@/config/solar";
import { disclaimers } from "@/config/site";
import Disclaimer from "@/components/common/Disclaimer";

export default function SubsidyCalculator() {
  const [kw, setKw] = useState(3);
  const subsidy = useMemo(() => calculateSubsidy(kw), [kw]);

  return (
    <div className="surface-card space-y-5 p-6 sm:p-8">
      <div>
        <h3 className="font-display text-xl font-bold text-navy">Check indicative subsidy</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Residential Central Financial Assistance under {subsidyConfig.schemeName}, based on the
          configured slab structure.
        </p>
      </div>
      <div className="max-w-xs">
        <Label htmlFor="kw">Proposed system capacity (kW)</Label>
        <Input
          id="kw"
          type="number"
          min={1}
          max={10}
          step={0.5}
          value={kw}
          onChange={(e) => setKw(Math.max(0, Math.min(10, Number(e.target.value))))}
          className="mt-1.5 h-11 rounded-xl"
        />
      </div>
      <div className="rounded-xl bg-gradient-solar p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-navy/70">
          Indicative CFA
        </p>
        <p className="mt-1 font-display text-4xl font-extrabold text-navy">{inr(subsidy)}</p>
        <p className="mt-2 text-sm text-navy/80">
          First {subsidyConfig.firstSlabKw} kW at {inr(subsidyConfig.firstSlabRatePerKw)}/kW, next{" "}
          {subsidyConfig.secondSlabKw} kW at {inr(subsidyConfig.secondSlabRatePerKw)}/kW, capped at{" "}
          {inr(subsidyConfig.maxCfa)}.
        </p>
      </div>
      <Disclaimer
        text={disclaimers.government}
        lastVerified={subsidyConfig.lastVerified}
        sourceLabel="Official PM Surya Ghar portal"
        sourceUrl={subsidyConfig.officialSource}
      />
    </div>
  );
}
