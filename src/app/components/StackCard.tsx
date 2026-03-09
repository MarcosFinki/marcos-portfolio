import BentoCard from "./BentoCard";
import {
  Atom,
  Layers,
  Server,
  Database
} from "lucide-react";

export default function StackCard() {
  return (
    <BentoCard>

      <div>
        <Atom className="w-6 h-6 text-accent mb-2" />

        <h3 className="text-lg font-semibold">
          Tech Stack
        </h3>

        <p className="text-sm text-zinc-400 mt-2">
          Technologies I use to build modern web applications.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2 text-sm">

        <span className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-300 text-xs">
            React
        </span>

        <span className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-300 text-xs">
            Next.js
        </span>

        <span className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-300 text-xs">
            NestJS
        </span>

        <span className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-300 text-xs">
            Angular
        </span>

        <span className="px-2 py-1 rounded-md bg-zinc-800 text-zinc-300 text-xs">
            Astro
        </span>

        </div>

    </BentoCard>
  );
}