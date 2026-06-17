import BentoCard from "./BentoCard";
import { ArrowUpRight, Github } from "lucide-react";
import { useTranslations } from "next-intl";
import { ui } from "./uiStyles";

export default function OpenSourceCard() {
  const t = useTranslations("openSource");

  return (
    <BentoCard>
      <div className="flex items-start justify-between gap-3">
        <div className={ui.cardHeader}>
          <span className={ui.iconBox}>
            <Github size={18} />
          </span>

          <div>
            <h3 className={ui.cardTitle}>{t("title")}</h3>

            <p className={ui.cardDescription}>{t("description")}</p>
          </div>
        </div>

        <span className="rounded-full border border-zinc-200 bg-white/70 px-2 py-1 text-[11px] text-zinc-500 shadow-sm shadow-zinc-950/[0.02] dark:border-white/10 dark:bg-white/[0.03] dark:text-zinc-400 dark:shadow-none">
          {t("version")}
        </span>
      </div>

      <div className="mt-auto flex items-center justify-between pt-4">
        <span className={ui.chip}>{t("chip")}</span>

        <a
          href="https://github.com/MarcosFinki/trackly/releases/tag/v1.0.0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent transition hover:text-blue-600 dark:hover:text-blue-300"
        >
          {t("cta")}
          <ArrowUpRight size={14} />
        </a>
      </div>
    </BentoCard>
  );
}
