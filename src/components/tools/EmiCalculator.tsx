import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { inr } from "@/config/solar";
import { disclaimers } from "@/config/site";
import Disclaimer from "@/components/common/Disclaimer";

export default function EmiCalculator() {
  const [amount, setAmount] = useState(200000);
  const [rate, setRate] = useState(10.5);
  const [years, setYears] = useState(5);

  const { emi, total, interest } = useMemo(() => {
    const n = years * 12;
    const r = rate / 12 / 100;
    const e = r === 0 ? amount / n : (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    return { emi: e, total: e * n, interest: e * n - amount };
  }, [amount, rate, years]);

  return (
    <div className="surface-card space-y-5 p-6 sm:p-8">
      <h3 className="font-display text-xl font-bold text-navy">Solar EMI calculator</h3>
      <div className="grid gap-4 sm:grid-cols-3">
        <div>
          <Label htmlFor="amt">Loan amount (₹)</Label>
          <Input id="amt" type="number" min={10000} max={10000000} value={amount}
            onChange={(e) => setAmount(Math.max(0, Number(e.target.value)))}
            className="mt-1.5 h-11 rounded-xl" />
        </div>
        <div>
          <Label htmlFor="rate">Interest rate (% p.a.)</Label>
          <Input id="rate" type="number" min={1} max={30} step={0.1} value={rate}
            onChange={(e) => setRate(Math.max(0, Number(e.target.value)))}
            className="mt-1.5 h-11 rounded-xl" />
        </div>
        <div>
          <Label htmlFor="years">Tenure (years)</Label>
          <Input id="years" type="number" min={1} max={20} value={years}
            onChange={(e) => setYears(Math.max(1, Number(e.target.value)))}
            className="mt-1.5 h-11 rounded-xl" />
        </div>
      </div>
      <dl className="grid gap-4 sm:grid-cols-3">
        {[
          ["Monthly EMI", inr(emi)],
          ["Total interest", inr(interest)],
          ["Total repayment", inr(total)],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl bg-muted p-4">
            <dt className="text-xs uppercase tracking-wide text-muted-foreground">{k}</dt>
            <dd className="mt-1 font-display text-xl font-bold text-navy">{v}</dd>
          </div>
        ))}
      </dl>
      <Disclaimer text={disclaimers.financing} />
    </div>
  );
}
