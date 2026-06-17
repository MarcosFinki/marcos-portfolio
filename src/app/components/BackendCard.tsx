import BentoCard from "./BentoCard";
import { Server } from "lucide-react";
import { useTranslations } from "next-intl";
import { ui } from "./uiStyles";

export default function BackendCard() {
  const t = useTranslations("backend");
  const backendFocus = t.raw("items") as string[];

  return (
    <BentoCard className="md:row-span-2">
      <div className={ui.cardHeader}>
        <span className={ui.iconBox}>
          <Server size={18} />
        </span>

        <div>
          <h3 className={ui.cardTitle}>{t("title")}</h3>

          <p className={ui.cardDescription}>{t("description")}</p>
        </div>
      </div>

      <ul className="mt-5 grid gap-2">
        {backendFocus.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white/70 px-2.5 py-2 text-xs text-zinc-700 shadow-sm shadow-zinc-950/[0.02] dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:shadow-none"
          >
            <span className="size-1.5 rounded-full bg-accent"></span>
            {item}
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}
