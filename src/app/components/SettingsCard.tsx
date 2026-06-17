"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useTheme } from "next-themes";
import BentoCard from "./BentoCard";
import { Settings } from "lucide-react";
import { controlClass, ui } from "./uiStyles";

const locales = ["en", "es"];

function subscribeToMount(onStoreChange: () => void) {
  const timeoutId = window.setTimeout(onStoreChange, 0);

  return () => window.clearTimeout(timeoutId);
}

export default function SettingsCard() {
  const locale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("settings");
  const { setTheme, theme, resolvedTheme } = useTheme();
  const mounted = useSyncExternalStore(
    subscribeToMount,
    () => true,
    () => false
  );
  const activeTheme = mounted
    ? theme === "system"
      ? resolvedTheme ?? "dark"
      : theme ?? "dark"
    : "dark";

  function getLocaleHref(nextLocale: string) {
    const parts = pathname.split("/");

    if (locales.includes(parts[1])) {
      parts[1] = nextLocale;
    } else {
      parts.splice(1, 0, nextLocale);
    }

    return parts.join("/") || `/${nextLocale}`;
  }

  function saveLocalePreference(nextLocale: string) {
    window.localStorage.setItem("locale", nextLocale);
  }

  return (
    <BentoCard>
      <div className={ui.cardHeader}>
        <span className={ui.iconBox}>
          <Settings size={18} />
        </span>

        <div>
          <h3 className={ui.cardTitle}>{t("title")}</h3>

          <p className={ui.cardDescription}>{t("description")}</p>
        </div>
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-4 text-xs">
        <button
          type="button"
          onClick={() => setTheme("dark")}
          className={controlClass(activeTheme === "dark")}
        >
          {t("dark")}
        </button>

        <button
          type="button"
          onClick={() => setTheme("light")}
          className={controlClass(activeTheme === "light")}
        >
          {t("light")}
        </button>

        {locales.map((nextLocale) => (
          <Link
            key={nextLocale}
            href={getLocaleHref(nextLocale)}
            onClick={() => saveLocalePreference(nextLocale)}
            aria-label={
              nextLocale === "en"
                ? t("switchToEnglish")
                : t("switchToSpanish")
            }
            className={controlClass(locale === nextLocale)}
          >
            {nextLocale === "en" ? t("english") : t("spanish")}
          </Link>
        ))}
      </div>
    </BentoCard>
  );
}
