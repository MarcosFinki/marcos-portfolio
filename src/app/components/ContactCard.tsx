"use client";

import { useState } from "react";
import BentoCard from "./BentoCard";
import { Check, Copy, Mail } from "lucide-react";

const email = "marcosfinkiel24@gmail.com";

export default function ContactCard() {
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <BentoCard>
      <div className="flex items-start gap-3">
        <span className="flex size-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
          <Mail size={18} />
        </span>

        <div className="min-w-0">
          <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
            Direct Contact
          </h3>

          <p className="mt-1 text-sm leading-relaxed text-zinc-400">
            Open to freelance and full-time opportunities.
          </p>
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-3 pt-4 sm:flex-row sm:items-end sm:justify-between">
        <a
          href={`mailto:${email}`}
          className="min-w-0 truncate rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm font-medium text-zinc-100 transition hover:border-accent/60 hover:text-white"
        >
          {email}
        </a>

        <button
          type="button"
          onClick={copyEmail}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-zinc-300 transition hover:border-accent/60 hover:text-white"
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? "Copied" : "Copy"}
        </button>
      </div>
    </BentoCard>
  );
}
