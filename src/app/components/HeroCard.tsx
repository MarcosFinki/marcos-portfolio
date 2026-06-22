"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import BentoCard from "./BentoCard";
import { Download, Github, Linkedin, MapPin, Globe } from "lucide-react";
import { ui } from "./uiStyles";

export default function HeroCard() {
  const locale = useLocale();
  const t = useTranslations("hero");
  const common = useTranslations("common");
  const cvHref =
    locale === "es"
      ? "/cv/marcos-finkiel-cv-es.pdf"
      : "/cv/marcos-finkiel-cv-en.pdf";

  return (
    <BentoCard className="md:col-span-1 md:row-span-2">
      <div className="grid grid-cols-[96px_1fr] gap-x-4 gap-y-3">
        <Image
          src="/me-v2.webp"
          alt={t("avatarAlt")}
          width={96}
          height={96}
          priority
          className="row-span-2 size-24 shrink-0 rounded-xl object-cover ring-1 ring-white/10"
        />

        <div className="flex items-start justify-between gap-2">
          <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-700 dark:border-emerald-400/15 dark:text-emerald-200">
            <span className="size-1.5 rounded-full bg-emerald-400"></span>
            {t("available")}
          </span>

          <div className="relative inline-block">
            <a
              href={cvHref}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={t("resumeAria")}
              className={`${ui.secondaryButton} px-2.5 py-2 text-xs`}
            >
              <Download size={14} />
              {t("resume")}
            </a>
          </div>
        </div>

        <h1 className="text-xl font-semibold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50">
          {t("name")}
        </h1>

        <p className="col-span-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {t("description")}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 text-xs">
        <span className="flex items-center gap-2 whitespace-nowrap rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 text-zinc-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300">
          <MapPin size={14} />
          {t("location")}
        </span>

        <span className="flex items-center gap-2 whitespace-nowrap rounded-full border border-zinc-200 bg-white/70 px-3 py-1.5 text-zinc-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300">
          <Globe size={14} />
          {t("languages")}
        </span>
      </div>

      <div className={`my-5 ${ui.divider}`}></div>

      <div className="mt-auto grid grid-cols-2 gap-3 text-sm">
        <a
          href="https://github.com/MarcosFinki"
          target="_blank"
          rel="noopener noreferrer"
          className={ui.secondaryButton}
        >
          <Github size={16} />
          {common("github")}
        </a>

        <a
          href="https://www.linkedin.com/in/marcos-finkielsztajn"
          target="_blank"
          rel="noopener noreferrer"
          className={ui.secondaryButton}
        >
          <Linkedin size={16} />
          {common("linkedin")}
        </a>
      </div>
    </BentoCard>
  );
}
