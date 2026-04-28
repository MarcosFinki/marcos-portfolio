"use client";

import { useState } from "react";
import BentoCard from "./BentoCard";
import { Layers, ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    name: "AMXpress",
    tech: "Next · Nest · PostgreSQL",
    image: "/projects/amxpress.png"
  },
  {
    name: "Trackly",
    tech: "Node · Open Source",
    image: "/projects/trackly.png"
  },
  {
    name: "Portfolio",
    tech: "Next.js · Tailwind",
    image: "/projects/amxpress-admin.png"
  }
];

export default function ProjectsCard() {
  const [index, setIndex] = useState(0);

  const project = projects[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));

  const next = () =>
    setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  return (
    <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col">

      {/* HEADER */}
      <div>
        <Layers className="w-6 h-6 text-accent mb-2" />
        <h3 className="text-lg font-semibold">Projects</h3>
        <p className="text-sm text-zinc-400 mt-1">
          Selected work and real-world applications.
        </p>
      </div>

      {/* IMAGE */}
      <div className="relative mt-6 w-full aspect-[16/10] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950 flex items-center justify-center">

        <img
          src={project.image}
          alt={project.name}
          className="max-w-full max-h-full object-contain"
        />

        {/* Controls */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 bg-zinc-900/80 border border-zinc-700 rounded-lg p-2 hover:border-accent transition"
        >
          <ChevronLeft size={16} />
        </button>

        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-zinc-900/80 border border-zinc-700 rounded-lg p-2 hover:border-accent transition"
        >
          <ChevronRight size={16} />
        </button>

      </div>

      {/* FOOTER */}
      <div className="mt-4 flex items-center justify-between text-sm">

        <div>
          <p className="font-medium">{project.name}</p>
          <p className="text-zinc-500 text-xs">{project.tech}</p>
        </div>

        {/* Dots */}
        <div className="flex gap-1">
          {projects.map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full ${
                i === index ? "bg-accent" : "bg-zinc-700"
              }`}
            />
          ))}
        </div>

      </div>

    </BentoCard>
  );
}