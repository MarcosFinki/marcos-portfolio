"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import BentoCard from "./BentoCard";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "AMXpress Web Platform",
    tech: "Next.js · NestJS · PostgreSQL · JWT",
    proof: "Full-stack logistics platform for operations, clients, and delivery management.",
    image: "/projects/amxpress.png",
    link: "https://amxpress.com.ar",
  },
  {
    name: "AMXpress Mobile App",
    tech: "Angular · NestJS · Mobile-first",
    proof: "Mobile app for repartidores with scanning, delivery flow, status changes, and proof of delivery.",
    image: "/projects/amxpress-mobile.png",
  },
  {
    name: "Trackly",
    tech: "Open Source · Desktop App",
    proof: "Installable open-source tool released on GitHub.",
    image: "/projects/trackly.png",
    link: "https://github.com/MarcosFinki/trackly/releases/tag/v1.0.0",
  },
];

export default function ProjectsCard() {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const project = projects[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(next, 5000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const PreviewContent = (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={`${project.name}-background`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={project.image}
            alt=""
            fill
            aria-hidden="true"
            sizes="(min-width: 1024px) 46vw, (min-width: 768px) 60vw, 100vw"
            className="scale-110 object-cover opacity-25 blur-2xl"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-3 rounded-xl bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.18),transparent_42%)]"></div>

      <AnimatePresence mode="wait">
        <motion.div
          key={project.name}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -24 }}
          transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-2 md:inset-3"
        >
          <Image
            src={project.image}
            alt={`${project.name} product screenshot`}
            fill
            priority={index === 0}
            sizes="(min-width: 1024px) 46vw, (min-width: 768px) 60vw, 100vw"
            className="object-contain drop-shadow-[0_26px_70px_rgba(0,0,0,0.55)]"
          />
        </motion.div>
      </AnimatePresence>
    </>
  );

  return (
    <BentoCard
      className="md:col-span-2 md:row-span-2 lg:row-span-3 p-4 md:p-5"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative min-h-[300px] flex-1 overflow-hidden rounded-2xl border border-white/10 bg-zinc-950 shadow-inner shadow-black/40 md:min-h-0">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.name}`}
            className="absolute inset-0 z-10"
          >
            {PreviewContent}
          </a>
        ) : (
          PreviewContent
        )}

        <button
          type="button"
          onClick={prev}
          aria-label="Show previous project"
          className="absolute left-4 top-1/2 z-30 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/30 text-zinc-300 opacity-80 backdrop-blur-md transition hover:border-accent/60 hover:text-white hover:opacity-100"
        >
          <ChevronLeft size={16} />
        </button>

        <button
          type="button"
          onClick={next}
          aria-label="Show next project"
          className="absolute right-4 top-1/2 z-30 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/30 text-zinc-300 opacity-80 backdrop-blur-md transition hover:border-accent/60 hover:text-white hover:opacity-100"
        >
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="mt-3 flex items-end justify-between gap-4">
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-lg font-semibold tracking-tight text-zinc-50">
            {project.name}
            {project.link && <ExternalLink size={15} className="text-zinc-500" />}
          </p>
          <p className="mt-1 truncate text-xs text-zinc-500">{project.tech}</p>
          <p className="mt-1 line-clamp-1 text-sm text-zinc-400">
            {project.proof}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-1.5 pb-1">
          {projects.map((item, i) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${item.name}`}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-accent" : "w-1.5 bg-zinc-700"
              }`}
            />
          ))}
        </div>
      </div>
    </BentoCard>
  );
}
