import BentoCard from "./BentoCard";
import { Layers } from "lucide-react";

export default function ProjectsCard() {
  return (
    <BentoCard className="md:col-span-2 md:row-span-2 flex flex-col justify-between">

      <div>
        <Layers className="w-6 h-6 text-accent mb-2" />

        <h3 className="text-lg font-semibold">
          Projects
        </h3>

        <p className="text-sm text-zinc-400 mt-2">
          Some of the applications and systems I have built.
        </p>
      </div>

      <div className="mt-6 space-y-3 text-sm">

        <div className="flex justify-between">
          <span>AMXpress App</span>
          <span className="text-zinc-500">Next · Nest</span>
        </div>

        <div className="flex justify-between">
          <span>Open Source Tool</span>
          <span className="text-zinc-500">Node</span>
        </div>

        <div className="flex justify-between">
          <span>Portfolio</span>
          <span className="text-zinc-500">Next.js</span>
        </div>

      </div>

    </BentoCard>
  );
}