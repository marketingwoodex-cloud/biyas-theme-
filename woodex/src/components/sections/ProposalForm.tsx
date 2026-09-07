"use client";

import { useState } from "react";
import { cities, qualifier } from "@/lib/siteConfig";
import { BtnSubmit } from "@/components/ui/Btn";

/**
 * REQUEST A PROPOSAL — the primary conversion surface.
 *
 * Qualification decisions, and why:
 *  · Budget is REQUIRED. It is the single highest-value gatekeeping field. A
 *    "Not sure yet" option is included so genuine early-stage enquiries are not
 *    blocked — but that segment should be tracked separately.
 *  · Area is required and carries the 1,000 sq ft qualifier inline, so the
 *    filtering happens before submission rather than in a phone call.
 *  · Single column. Two columns measurably halves completion on mobile.
 *  · No progress bar. For twelve fields it only advertises the length.
 *  · Submit says "Request Proposal", never "Submit" or "Send".
 *
 * The submit handler is intentionally a stub. Swap SUBMIT_ENDPOINT for a route
 * handler / Resend / HubSpot and the rest of the component is unchanged.
 */

const PROPERTY_TYPES = [
  "Office",
  "Retail / Showroom",
  "Pharmacy / Healthcare",
  "Education",
  "Hospitality",
  "Other",
];

const SCOPES = ["Design only", "Design + Build", "Fit-out only"];

const BUDGETS = [
  "Under PKR 2.5M",
  "PKR 2.5M – 6M",
  "PKR 6M – 15M",
  "PKR 15M – 40M",
  "PKR 40M+",
  "Not sure yet",
];

type Errors = Record<string, string>;

function Field({
  id,
  label,
  type = "text",
  required,
  autoComplete,
  inputMode,
  hint,
  error,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  inputMode?: "text" | "tel" | "numeric" | "email";
  hint?: string;
  error?: string;
}) {
  return (
    <div>
      <div className="field-wrap">
        <input
          id={id}
          name={id}
          type={type}
          inputMode={inputMode}
          required={required}
          autoComplete={autoComplete}
          aria-invalid={error ? "true" : undefined}
          aria-describedby={hint || error ? `${id}-note` : undefined}
          placeholder=" "
          className="field"
        />
        <label htmlFor={id} className="field-label">
          {label}
          {required && <span className="text-bronze"> *</span>}
        </label>
      </div>
      {(hint || error) && (
        <p id={`${id}-note`} className={`form-note mt-2 ${error ? "text-[#b4472f]" : ""}`}>
          {error || hint}
        </p>
      )}
    </div>
  );
}

function Select({
  id,
  label,
  options,
  required,
  error,
}: {
  id: string;
  label: string;
  options: readonly string[];
  required?: boolean;
  error?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="t-label block text-clay">
        {label}
        {required && <span className="text-bronze"> *</span>}
      </label>
      <select
        id={id}
        name={id}
        required={required}
        defaultValue=""
        aria-invalid={error ? "true" : undefined}
        className="field mt-2 appearance-none bg-transparent"
      >
        <option value="" disabled>
          Select…
        </option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
      {error && <p className="form-note mt-2 text-[#b4472f]">{error}</p>}
    </div>
  );
}

export default function ProposalForm() {
  const [busy, setBusy] = useState(false);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Client-side validation. Server validation still required when wired.
    const next: Errors = {};
    if (!String(data.get("name") ?? "").trim()) next.name = "Please tell us your name.";
    if (!String(data.get("phone") ?? "").trim()) next.phone = "We need a phone or WhatsApp number to reply.";
    if (!data.get("city")) next.city = "Select a city.";
    if (!data.get("propertyType")) next.propertyType = "Select a property type.";
    if (!data.get("budget")) next.budget = "A budget band lets us scope realistically.";
    const area = Number(data.get("area"));
    if (!area || area <= 0) next.area = "Enter an approximate area in square feet.";
    if (String(data.get("description") ?? "").trim().length < 20)
      next.description = "A sentence or two about the project, please.";
    if (!data.get("consent")) next.consent = "Please confirm we can contact you.";

    setErrors(next);
    if (Object.keys(next).length) {
      form.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
      return;
    }

    setBusy(true);
    // TODO: POST to your endpoint. Everything above is already correct.
    console.log("proposal request", Object.fromEntries(data.entries()));
    await new Promise((r) => setTimeout(r, 900));
    setBusy(false);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="form-success" role="status" aria-live="polite">
        <p className="t-label text-bronze">Request received</p>
        <h2 className="t-h3 mt-4 text-ink">Thank you. We have your brief.</h2>
        <p className="t-body mt-4 max-w-[48ch] text-clay">
          You will get an acknowledgement within two working hours, and a call to confirm
          scope within one working day. If you have a floor plan you did not attach, reply
          to that email with it.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-9">
      <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
        <Field id="name" label="Full name" required autoComplete="name" error={errors.name} />
        <Field
          id="phone"
          label="Phone / WhatsApp"
          type="tel"
          inputMode="tel"
          required
          autoComplete="tel"
          hint="+92 3XX XXXXXXX"
          error={errors.phone}
        />
        <Field id="email" label="Email (optional)" type="email" autoComplete="email" />
        <Select
          id="city"
          label="City"
          options={[...cities.map((c) => c.name), "Other"]}
          required
          error={errors.city}
        />
        <Select
          id="propertyType"
          label="Property type"
          options={PROPERTY_TYPES}
          required
          error={errors.propertyType}
        />
        <Field
          id="area"
          label="Approximate area (sq ft)"
          type="number"
          inputMode="numeric"
          required
          hint={qualifier}
          error={errors.area}
        />
      </div>

      <fieldset>
        <legend className="t-label text-clay">
          Project scope <span className="text-bronze">*</span>
        </legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {SCOPES.map((s, i) => (
            <label key={s} className="chip cursor-pointer text-center has-[:checked]:bg-ink has-[:checked]:text-bone">
              <input type="radio" name="scope" value={s} defaultChecked={i === 1} className="sr-only" />
              {s}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2">
        <Field id="handover" label="Target handover date" type="date" required />
        <Select id="budget" label="Budget range" options={BUDGETS} required error={errors.budget} />
      </div>

      <div>
        <div className="field-wrap">
          <textarea
            id="description"
            name="description"
            rows={5}
            required
            aria-invalid={errors.description ? "true" : undefined}
            placeholder=" "
            className="field resize-none"
          />
          <label htmlFor="description" className="field-label">
            Project description <span className="text-bronze">*</span>
          </label>
        </div>
        {errors.description && <p className="form-note mt-2 text-[#b4472f]">{errors.description}</p>}
      </div>

      <div>
        <label htmlFor="files" className="t-label block text-clay">
          Floor plan or photos (optional)
        </label>
        <input
          id="files"
          name="files"
          type="file"
          multiple
          accept=".pdf,.jpg,.jpeg,.png,.dwg"
          className="mt-3 block w-full text-sm text-clay file:mr-4 file:rounded-full file:border file:border-sand file:bg-mist file:px-4 file:py-2 file:text-sm file:font-medium file:text-ink hover:file:border-ink"
        />
        <p className="form-note mt-2">PDF, JPG, PNG or DWG. Up to 10MB.</p>
      </div>

      <div>
        <label className="flex cursor-pointer items-start gap-3">
          <input type="checkbox" name="consent" className="mt-1.5 h-4 w-4 accent-[var(--color-bronze)]" />
          <span className="t-meta text-clay">
            I agree to be contacted about this enquiry. We do not add enquiries to a mailing list.
          </span>
        </label>
        {errors.consent && <p className="form-note mt-2 text-[#b4472f]">{errors.consent}</p>}
      </div>

      <div className="border-t border-sand pt-8">
        <BtnSubmit busy={busy} variant="light">
          {busy ? "Sending…" : "Request Proposal"}
        </BtnSubmit>
      </div>
    </form>
  );
}
