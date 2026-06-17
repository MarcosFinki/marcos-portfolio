import BentoCard from "./BentoCard";
import { Atom } from "lucide-react";
import { useTranslations } from "next-intl";
import { ui } from "./uiStyles";

export default function StackCard() {
  const t = useTranslations("stack");
  const technologies = t.raw("items") as string[];

  return (
    <BentoCard>
      <div className={ui.cardHeader}>
        <span className={ui.iconBox}>
          <Atom size={18} />
        </span>

        <div>
          <h3 className={ui.cardTitle}>{t("title")}</h3>

          <p className={ui.cardMeta}>{t("description")}</p>
        </div>
      </div>

      <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
        {technologies.map((technology) => (
          <span key={technology} className={ui.chip}>
            {technology}
          </span>
        ))}
      </div>
    </BentoCard>
  );
}
