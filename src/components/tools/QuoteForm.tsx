import { useState } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";
import { districts } from "@/config/solar";
import { whatsappUrl, disclaimers } from "@/config/site";
import { toast } from "@/hooks/use-toast";
import Disclaimer from "@/components/common/Disclaimer";

const select =
  "h-11 w-full rounded-xl border border-input bg-background px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  phone: z.string().trim().regex(/^[0-9+\s-]{10,15}$/, "Enter a valid mobile number"),
  location: z.string().trim().min(2).max(80),
  bill: z.string().trim().max(12),
  property: z.string(),
  roof: z.string().trim().max(12),
  requirement: z.string(),
  contactTime: z.string(),
});

type FormState = z.infer<typeof schema>;

const steps = ["Contact", "Location", "Electricity bill", "Property", "Roof area", "Requirement", "Best time"];

export default function QuoteForm() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    location: districts[0],
    bill: "",
    property: "Residential",
    roof: "",
    requirement: "Suggest for me",
    contactTime: "Anytime",
  });

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const submit = () => {
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast({
        title: "Please check your details",
        description: parsed.error.issues[0].message,
        variant: "destructive",
      });
      return;
    }
    const d = parsed.data;
    const message = `Hello Aryan Solar, I would like a solar quotation.\nName: ${d.name}\nMobile: ${d.phone}\nLocation: ${d.location}\nMonthly bill: ₹${d.bill || "not shared"}\nProperty: ${d.property}\nRoof area: ${d.roof || "not shared"} sq ft\nRequirement: ${d.requirement}\nPreferred contact time: ${d.contactTime}`;
    // Architecture note: swap this for a backend/CRM submission when a database is connected.
    window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
    toast({ title: "Request ready", description: "We have opened WhatsApp with your details." });
  };

  const next = () => setStep((s) => Math.min(s + 1, steps.length - 1));
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="surface-card p-6 sm:p-8">
      <div className="flex items-center justify-between gap-4">
        <div>
          <h3 className="font-display text-xl font-bold text-navy">Get your solar estimate</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            Step {step + 1} of {steps.length} — {steps[step]}
          </p>
        </div>
        <span className="font-display text-3xl font-extrabold text-primary/25">
          {String(step + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-muted">
        <div
          className="h-full rounded-full bg-gradient-solar transition-all duration-500"
          style={{ width: `${((step + 1) / steps.length) * 100}%` }}
        />
      </div>

      <div className="mt-6 space-y-4">
        {step === 0 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label htmlFor="q-name">Your name</Label>
              <Input id="q-name" maxLength={80} value={form.name} onChange={(e) => set("name", e.target.value)} className="mt-1.5 h-11 rounded-xl" />
            </div>
            <div>
              <Label htmlFor="q-phone">Mobile number</Label>
              <Input id="q-phone" inputMode="tel" maxLength={15} value={form.phone} onChange={(e) => set("phone", e.target.value)} className="mt-1.5 h-11 rounded-xl" />
            </div>
          </div>
        )}
        {step === 1 && (
          <div>
            <Label htmlFor="q-loc">Location</Label>
            <select id="q-loc" className={`mt-1.5 ${select}`} value={form.location} onChange={(e) => set("location", e.target.value)}>
              {districts.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>
        )}
        {step === 2 && (
          <div>
            <Label htmlFor="q-bill">Average monthly electricity bill (₹)</Label>
            <Input id="q-bill" type="number" min={0} max={1000000} value={form.bill} onChange={(e) => set("bill", e.target.value)} className="mt-1.5 h-11 rounded-xl" />
          </div>
        )}
        {step === 3 && (
          <div>
            <Label htmlFor="q-prop">Property type</Label>
            <select id="q-prop" className={`mt-1.5 ${select}`} value={form.property} onChange={(e) => set("property", e.target.value)}>
              {["Residential", "Commercial", "Industrial", "Agricultural"].map((p) => <option key={p}>{p}</option>)}
            </select>
          </div>
        )}
        {step === 4 && (
          <div>
            <Label htmlFor="q-roof">Approximate shadow-free roof area (sq ft)</Label>
            <Input id="q-roof" type="number" min={0} max={100000} value={form.roof} onChange={(e) => set("roof", e.target.value)} className="mt-1.5 h-11 rounded-xl" />
          </div>
        )}
        {step === 5 && (
          <div>
            <Label htmlFor="q-req">Solar requirement</Label>
            <select id="q-req" className={`mt-1.5 ${select}`} value={form.requirement} onChange={(e) => set("requirement", e.target.value)}>
              {["Suggest for me", "On-grid", "Off-grid", "Hybrid with backup", "Solar pump"].map((p) => <option key={p}>{p}</option>)}
            </select>
          </div>
        )}
        {step === 6 && (
          <div>
            <Label htmlFor="q-time">Preferred contact time</Label>
            <select id="q-time" className={`mt-1.5 ${select}`} value={form.contactTime} onChange={(e) => set("contactTime", e.target.value)}>
              {["Anytime", "Morning (9 AM – 12 PM)", "Afternoon (12 – 4 PM)", "Evening (4 – 8 PM)"].map((p) => <option key={p}>{p}</option>)}
            </select>
          </div>
        )}
      </div>

      <div className="mt-7 flex flex-col gap-3 sm:flex-row">
        {step > 0 && (
          <Button variant="outline" onClick={back} className="rounded-xl sm:w-auto">
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" /> Back
          </Button>
        )}
        {step < steps.length - 1 ? (
          <Button onClick={next} className="rounded-xl sm:flex-1">
            Continue <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Button>
        ) : (
          <Button onClick={submit} className="rounded-xl sm:flex-1">
            <MessageCircle className="mr-2 h-4 w-4" aria-hidden="true" /> Get My Solar Estimate
          </Button>
        )}
      </div>

      <Disclaimer className="mt-5" text={disclaimers.estimate} />
    </div>
  );
}
