import BentoCard from "./BentoCard";
import { Boxes } from "lucide-react";
import { useTranslations } from "next-intl";
import { ui } from "./uiStyles";

export default function WorkFocusCard() {
  const t = useTranslations("workFocus");
  const focusAreas = t.raw("items") as string[];

  return (
    <BentoCard className="lg:col-span-2">
      <div className={ui.cardHeader}>
        <span className={ui.iconBox}>
          <Boxes size={18} />
        </span>

        <div>
          <h3 className={ui.cardTitle}>{t("title")}</h3>

          <p className={ui.cardDescription}>{t("description")}</p>
        </div>
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-3">
        {focusAreas.map((area) => (
          <span key={area} className={ui.chip}>
            {area}
          </span>
        ))}
      </div>
    </BentoCard>
  );
}
