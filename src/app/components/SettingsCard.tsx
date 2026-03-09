import BentoCard from "./BentoCard";
import { Settings } from "lucide-react";

export default function SettingsCard() {
  return (
    <BentoCard>

      <div>
        <Settings className="w-6 h-6 text-accent mb-2" />

        <h3 className="text-lg font-semibold">
          Settings
        </h3>

        <p className="text-sm text-zinc-400 mt-2">
          Theme and language preferences.
        </p>
      </div>

      <div className="mt-4 flex flex-wrap gap-2 text-xs">

        <button className="px-2 py-1 rounded-md bg-zinc-800 hover:text-accent transition">
          Dark
        </button>

        <button className="px-2 py-1 rounded-md bg-zinc-800 hover:text-accent transition">
          Light
        </button>

        <button className="px-2 py-1 rounded-md bg-zinc-800 hover:text-accent transition">
          EN
        </button>

        <button className="px-2 py-1 rounded-md bg-zinc-800 hover:text-accent transition">
          ES
        </button>

      </div>

    </BentoCard>
  );
}