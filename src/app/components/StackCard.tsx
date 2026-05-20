import BentoCard from "./BentoCard";
import { Atom } from "lucide-react";

const technologies = [
  "Next.js",
  "React",
  "NestJS",
  "Angular",
  "Astro",
  "PHP",
  "PostgreSQL",
  "MongoDB",
];

export default function StackCard() {
  return (
    <BentoCard>
      <div className="flex items-start gap-3">
        <span className="flex size-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
          <Atom size={18} />
        </span>

        <div>
          <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
            Tech Stack
          </h3>

          <p className="mt-1 text-xs text-zinc-500">
            Frontend, backend, databases.
          </p>
        </div>
      </div>

      <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
        {technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-zinc-300"
          >
            {technology}
          </span>
        ))}
      </div>
    </BentoCard>
  );
}
