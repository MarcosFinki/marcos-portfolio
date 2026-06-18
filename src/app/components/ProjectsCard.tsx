"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import BentoCard from "./BentoCard";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import ProjectDetailsModal from "./ProjectDetailsModal";
import { getProjects } from "./projectData";
import { controlClass, ui } from "./uiStyles";

export default function ProjectsCard() {
  const t = useTranslations("projects");
  const projects = getProjects(t);
  const [projectIndex, setProjectIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const project = projects[projectIndex];
  const image = project.images[imageIndex] ?? project.images[0];
  const hasMultipleImages = project.images.length > 1;

  function showProject(nextProjectIndex: number) {
    setProjectIndex(nextProjectIndex);
    setImageIndex(0);
  }

  function prev() {
    if (imageIndex > 0) {
      setImageIndex((i) => i - 1);
      return;
    }

    const nextProjectIndex =
      projectIndex === 0 ? projects.length - 1 : projectIndex - 1;

    setProjectIndex(nextProjectIndex);
    setImageIndex(projects[nextProjectIndex].images.length - 1);
  }

  function next() {
    if (imageIndex < project.images.length - 1) {
      setImageIndex((i) => i + 1);
      return;
    }

    showProject(projectIndex === projects.length - 1 ? 0 : projectIndex + 1);
  }

  useEffect(() => {
    if (isPaused || !hasMultipleImages || projectIndex !== 0) return;

    const interval = window.setInterval(() => {
      setImageIndex((i) => (i === project.images.length - 1 ? 0 : i + 1));
    }, 4500);

    return () => window.clearInterval(interval);
  }, [hasMultipleImages, isPaused, project.images.length, projectIndex]);

  useEffect(() => {
    if (!isDetailsOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsDetailsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isDetailsOpen]);

  const previewContent = (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${project.name}-${image.src}-background`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={image.src}
            alt=""
            fill
            aria-hidden="true"
            sizes="(min-width: 1024px) 46vw, (min-width: 768px) 60vw, 100vw"
            className="scale-110 object-cover opacity-25 blur-2xl"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-3 rounded-xl bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.18),transparent_42%)]" />

      <AnimatePresence mode="wait">
        <motion.div
          key={`${project.name}-${image.src}`}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-2 md:inset-3"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority={projectIndex === 0 && imageIndex === 0}
            sizes="(min-width: 1024px) 46vw, (min-width: 768px) 60vw, 100vw"
            className="object-contain drop-shadow-[0_26px_70px_rgba(0,0,0,0.55)]"
          />
        </motion.div>
      </AnimatePresence>

      <span className="absolute left-4 top-4 z-20 rounded-full border border-white/40 bg-white/75 px-2.5 py-1 text-[11px] font-medium text-zinc-800 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-black/35 dark:text-zinc-200">
        {image.label}
      </span>
    </>
  );

  return (
    <>
      <BentoCard
        className="md:col-span-2 md:row-span-2 lg:row-span-3 p-4 md:p-5"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className={ui.previewFrame}>
          {previewContent}

          <button
            type="button"
            onClick={prev}
            aria-label={t("controls.previous")}
            className="absolute left-4 top-1/2 z-30 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white/75 text-zinc-700 opacity-90 shadow-sm backdrop-blur-md transition hover:border-accent/60 hover:text-zinc-950 hover:opacity-100 dark:border-white/10 dark:bg-black/30 dark:text-zinc-300 dark:hover:text-white"
          >
            <ChevronLeft size={16} />
          </button>

          <button
            type="button"
            onClick={next}
            aria-label={t("controls.next")}
            className="absolute right-4 top-1/2 z-30 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-zinc-200 bg-white/75 text-zinc-700 opacity-90 shadow-sm backdrop-blur-md transition hover:border-accent/60 hover:text-zinc-950 hover:opacity-100 dark:border-white/10 dark:bg-black/30 dark:text-zinc-300 dark:hover:text-white"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="mt-3 flex min-h-[366px] items-start justify-between gap-4 sm:min-h-0">
          <div className="min-w-0">
            <span className={ui.eyebrow}>
              {project.eyebrow}
            </span>

            <p className="mt-1 flex items-center gap-2 text-xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
              {project.name}
              <ExternalLink size={15} className="shrink-0 text-zinc-500" />
            </p>

            <p className={`mt-1 truncate ${ui.cardMeta}`}>
              {project.tech}
            </p>

            <p className={`${ui.cardDescription} min-h-[44px]`}>
              {project.proof}
            </p>

            <div className="mt-3 flex min-h-[54px] content-start flex-wrap gap-1.5">
              {project.chips.map((chip) => (
                <span
                  key={chip}
                  className={ui.smallChip}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div className="flex min-h-[76px] shrink-0 flex-col items-end gap-2">
            {project.detail && (
              <button
                type="button"
                onClick={() => setIsDetailsOpen(true)}
                className={ui.primaryButton}
              >
                {t("controls.viewDetails")}
              </button>
            )}
            {!project.detail && <div className="min-h-10" aria-hidden="true" />}

            {project.demo && (
              <a
                href={project.demo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={project.demo.ariaLabel}
                className={ui.secondaryButton}
              >
                {project.demo.cta}
                <ArrowUpRight size={13} />
              </a>
            )}

            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={ui.textLink}
            >
              {project.cta}
              <ArrowUpRight size={13} />
            </a>

            <div className="flex items-center gap-1.5 pt-1">
              {projects.map((item, i) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => showProject(i)}
                  aria-label={t("controls.showProject", {
                    project: item.name,
                  })}
                  className={`h-1.5 rounded-full transition-all ${
                    i === projectIndex ? "w-6 bg-accent" : "w-1.5 bg-zinc-700"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-3 flex min-h-[92px] flex-wrap gap-1.5 sm:min-h-8">
          {hasMultipleImages &&
            project.images.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setImageIndex(i)}
                className={controlClass(i === imageIndex)}
              >
                {item.label}
              </button>
            ))}
        </div>
      </BentoCard>

      {isDetailsOpen && project.detail && (
        <ProjectDetailsModal
          project={project}
          onClose={() => setIsDetailsOpen(false)}
        />
      )}
    </>
  );
}
