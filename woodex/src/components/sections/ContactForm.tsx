"use client";

import { useState } from "react";
import { services } from "@/lib/content/services";
import { cta } from "@/lib/brand";

/**
 * Enquiry form.
 * Conversion decisions that matter:
 *  · Underline fields, not boxes — reads as a form to fill, not a wall to face.
 *  · Budget / timeline / service are chips, not selects: one tap, no dropdown
 *    anxiety, and every option is visible so nobody has to guess the range.
 *  · Only four fields are required, and the required ones are the four that
 *    let us actually reply.
 *  · The submit label is a deliverable ("Get a fit-out estimate"), never "Send".
 *  · Chips use aria-pressed so the state is announced, not just coloured.
 */

const BUDGETS = ["Under 5M PKR", "5–15M", "15–40M", "40M+", "Not sure yet"];
const TIMELINES = ["ASAP", "1–3 months", "3–6 months", "Just exploring"];

const FIELDS = [
  { id: "name", label: "Your name", type: "text", req: true, auto: "name" },
  { id: "email", label: "Email", type: "email", req: true, auto: "email" },
  { id: "company", label: "Company (optional)", type: "text", req: false, auto: "organization" },
  { id: "phone", label: "Phone", type: "tel", req: true, auto: "tel" },
];

function Chips({
  legend,
  options,
  value,
  onChange,
  name,
}: {
  legend: string;
  options: readonly string[];
  value: string;
  onChange: (v: string) => void;
  name: string;
}) {
  return (
    <fieldset>
      <legend className="t-label text-clay/70">{legend}</legend>
      <div className="mt-4 flex flex-wrap gap-2">
        {options.map((o) => (
          <button
            key={o}
            type="button"
            aria-pressed={value === o}
            onClick={() => onChange(value === o ? "" : o)}
            data-cursor="link"
            className="chip"
          >
            {o}
          </button>
        ))}
      </div>
      <input type="hidden" name={name} value={value} />
    </fieldset>
  );
}

export default function ContactForm() {
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [service, setService] = useState("");
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBusy(true);
    // No backend wired yet — point this at your form endpoint (a route
    // handler, Resend, Formspark, HubSpot, whatever the stack uses).
    await new Promise((r) => setTimeout(r, 900));
    setBusy(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="mt-10 border-t border-sand pt-10" role="status">
        <p className="t-label text-brass">Received</p>
        <p className="t-h2 mt-5">Thank you — that&apos;s enough to start.</p>
        <p className="t-body mt-5 max-w-[46ch] text-clay">
          A human will reply within one working day. If you have a floor plan, reply to that
          email with it attached and we&apos;ll turn a banded estimate around in three.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="mt-10 space-y-10">
      <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2">
        {FIELDS.map((f) => (
          <div key={f.id} className="field-wrap">
            <input
              id={f.id}
              name={f.id}
              type={f.type}
              required={f.req}
              autoComplete={f.auto}
              placeholder=" "
              className="field"
            />
            <label htmlFor={f.id} className="field-label">
              {f.label}
              {f.req && <span className="text-brass"> *</span>}
            </label>
          </div>
        ))}
      </div>

      <Chips
        legend="What do you need?"
        options={services.map((s) => s.short)}
        value={service}
        onChange={setService}
        name="service"
      />
      <Chips legend="Indicative budget" options={BUDGETS} value={budget} onChange={setBudget} name="budget" />
      <Chips legend="When do you want to start?" options={TIMELINES} value={timeline} onChange={setTimeline} name="timeline" />

      <div className="field-wrap">
        <textarea id="brief" name="brief" rows={4} required placeholder=" " className="field resize-none" />
        <label htmlFor="brief" className="field-label">
          What&apos;s not working? <span className="text-brass">*</span>
        </label>
      </div>

      <div className="flex flex-wrap items-center gap-6 border-t border-sand pt-8">
        <button type="submit" disabled={busy} className="btn btn-light disabled:opacity-50" data-cursor="link">
          <span className="btn-roll">
            <span>{busy ? "Sending…" : cta.primary}</span>
            <span aria-hidden>{busy ? "Sending…" : cta.primary}</span>
          </span>
          <svg className="btn-arrow shrink-0" width="16" height="10" viewBox="0 0 16 10" fill="none" aria-hidden>
            <path d="M0 5h14M10 1l4 4-4 4" stroke="currentColor" strokeWidth="1.2" />
          </svg>
        </button>
        <p className="t-meta max-w-[30ch] text-clay/70">
          We reply to every enquiry. No mailing list, no follow-up sequence.
        </p>
      </div>
    </form>
  );
}
