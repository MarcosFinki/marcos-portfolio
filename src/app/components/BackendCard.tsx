import BentoCard from "./BentoCard";
import { Server } from "lucide-react";

const backendFocus = [
  "REST APIs",
  "JWT auth",
  "Role-based access",
  "SQL & MongoDB",
  "Modular services"
];

export default function BackendCard() {
  return (
    <BentoCard className="md:row-span-2">
      <div className="flex items-start gap-3">
        <span className="flex size-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
          <Server size={18} />
        </span>

        <div>
          <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
            Backend Architecture
          </h3>

          <p className="mt-1 text-sm leading-relaxed text-zinc-400">
            APIs and backend flows built with maintainability in mind.
          </p>
        </div>
      </div>

      <ul className="mt-5 grid gap-2">
        {backendFocus.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 py-2 text-xs text-zinc-300"
          >
            <span className="size-1.5 rounded-full bg-accent"></span>
            {item}
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}
