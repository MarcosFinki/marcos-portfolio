"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { useTheme } from "next-themes";
import BentoCard from "./BentoCard";
import { Settings } from "lucide-react";

const locales = ["en", "es"];

export default function SettingsCard() {
  const locale = useLocale();
  const pathname = usePathname();
  const { setTheme, theme } = useTheme();
  const activeTheme = theme ?? "dark";

  function getLocaleHref(nextLocale: string) {
    const parts = pathname.split("/");

    if (locales.includes(parts[1])) {
      parts[1] = nextLocale;
    } else {
      parts.splice(1, 0, nextLocale);
    }

    return parts.join("/") || `/${nextLocale}`;
  }

  return (
    <BentoCard>
      <div className="flex items-start gap-3">
        <span className="flex size-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
          <Settings size={18} />
        </span>

        <div>
          <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
            Settings
          </h3>

          <p className="mt-1 text-sm leading-relaxed text-zinc-400">
            Theme and language.
          </p>
        </div>
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-4 text-xs">
        <button
          type="button"
          onClick={() => setTheme("dark")}
          className={`rounded-md border px-2 py-1 transition ${
            activeTheme === "dark"
              ? "border-accent/50 bg-accent/15 text-blue-100"
              : "border-white/10 bg-white/[0.04] text-zinc-300 hover:border-accent/60 hover:text-white"
          }`}
        >
          Dark
        </button>

        <button
          type="button"
          onClick={() => setTheme("light")}
          className={`rounded-md border px-2 py-1 transition ${
            activeTheme === "light"
              ? "border-accent/50 bg-accent/15 text-blue-100"
              : "border-white/10 bg-white/[0.04] text-zinc-300 hover:border-accent/60 hover:text-white"
          }`}
        >
          Light
        </button>

        {locales.map((nextLocale) => (
          <Link
            key={nextLocale}
            href={getLocaleHref(nextLocale)}
            className={`rounded-md border px-2 py-1 uppercase transition ${
              locale === nextLocale
                ? "border-accent/50 bg-accent/15 text-blue-100"
                : "border-white/10 bg-white/[0.04] text-zinc-300 hover:border-accent/60 hover:text-white"
            }`}
          >
            {nextLocale}
          </Link>
        ))}
      </div>
    </BentoCard>
  );
}
