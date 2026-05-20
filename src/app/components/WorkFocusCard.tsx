import BentoCard from "./BentoCard";
import { Boxes } from "lucide-react";

const focusAreas = [
  "Full-stack web apps",
  "Backend-heavy products",
  "Internal tools",
  "Dashboards",
  "Logistics systems",
  "Operations workflows",
];

export default function WorkFocusCard() {
  return (
    <BentoCard className="lg:col-span-2">
      <div className="flex items-start gap-3">
        <span className="flex size-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
          <Boxes size={18} />
        </span>

        <div>
          <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
            Work Focus
          </h3>

          <p className="mt-1 text-sm leading-relaxed text-zinc-400">
            Building practical software around data, workflows, and operations.
          </p>
        </div>
      </div>

      <div className="mt-auto flex flex-wrap gap-2 pt-4">
        {focusAreas.map((area) => (
          <span
            key={area}
            className="rounded-md border border-white/10 bg-white/[0.04] px-2.5 py-1 text-xs text-zinc-300"
          >
            {area}
          </span>
        ))}
      </div>
    </BentoCard>
  );
}
