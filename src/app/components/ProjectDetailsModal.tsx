"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { X } from "lucide-react";
import type { Project } from "./projectData";
import { ui } from "./uiStyles";

type ProjectDetailsModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectDetailsModal({
  project,
  onClose,
}: ProjectDetailsModalProps) {
  const common = useTranslations("common");
  const t = useTranslations("projects.controls");

  if (!project.detail) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-zinc-950/45 p-4 backdrop-blur-md dark:bg-black/70"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.98, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 12 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="amxpress-details-title"
        className="max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-2xl border border-zinc-200 bg-zinc-50 p-5 shadow-2xl shadow-zinc-950/20 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/50"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className={ui.eyebrow}>
              {project.detail.eyebrow}
            </span>
            <h2
              id="amxpress-details-title"
              className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
            >
              {project.detail.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
              {project.detail.overview}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={common("close")}
            className={ui.iconButton}
          >
            <X size={16} />
          </button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {project.detail.sections.map((section) => (
            <section
              key={section.title}
              className={`${ui.panel} p-4`}
            >
              <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-100">
                {section.title}
              </h3>

              <ul className="mt-3 grid gap-2">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2 text-xs leading-relaxed text-zinc-600 dark:text-zinc-400"
                  >
                    <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <section className="mt-5">
          <h3 className="text-sm font-semibold text-zinc-950 dark:text-zinc-100">
            {t("screenshots")}
          </h3>

          <div className="mt-3 grid gap-3 md:grid-cols-3">
            {project.images.map((item) => (
              <div
                key={item.src}
                className="overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm shadow-zinc-950/[0.03] dark:border-white/10 dark:bg-zinc-900 dark:shadow-none"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 28vw, 100vw"
                    className="object-contain"
                  />
                </div>
                <p className="border-t border-zinc-200 px-3 py-2 text-xs text-zinc-700 dark:border-white/10 dark:text-zinc-300">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </section>
      </motion.div>
    </div>
  );
}
