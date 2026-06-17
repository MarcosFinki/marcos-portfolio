"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import BentoCard from "./BentoCard";
import { Check, Copy, Mail } from "lucide-react";
import { ui } from "./uiStyles";

const email = "marcosfinkiel24@gmail.com";

export default function ContactCard() {
  const [copied, setCopied] = useState(false);
  const t = useTranslations("contact");

  async function copyEmail() {
    await navigator.clipboard.writeText(email);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1600);
  }

  return (
    <BentoCard>
      <div className={ui.cardHeader}>
        <span className={ui.iconBox}>
          <Mail size={18} />
        </span>

        <div className="min-w-0">
          <h3 className={ui.cardTitle}>{t("title")}</h3>

          <p className={ui.cardDescription}>{t("description")}</p>
        </div>
      </div>

      <div className="mt-auto flex flex-col gap-3 pt-4 sm:flex-row sm:items-end sm:justify-between">
        <a
          href={`mailto:${email}`}
          className="block min-w-0 flex-1 truncate rounded-xl border border-zinc-200 bg-white/75 px-3 py-2 text-sm font-medium text-zinc-900 shadow-sm shadow-zinc-950/[0.03] transition hover:border-accent/50 hover:bg-blue-50 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-100 dark:shadow-none dark:hover:border-accent/60 dark:hover:bg-white/[0.07] dark:hover:text-white"
        >
          {email}
        </a>

        <button
          type="button"
          onClick={copyEmail}
          className={ui.secondaryButton}
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? t("copied") : t("copy")}
        </button>
      </div>
    </BentoCard>
  );
}
