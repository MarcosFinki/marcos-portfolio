import BentoCard from "./BentoCard";
import { ArrowUpRight, Github } from "lucide-react";

export default function OpenSourceCard() {
  return (
    <BentoCard>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <span className="flex size-9 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent">
            <Github size={18} />
          </span>

          <div>
            <h3 className="text-lg font-semibold tracking-tight text-zinc-50">
              Trackly
            </h3>

            <p className="mt-1 text-sm leading-relaxed text-zinc-400">
              Installable open-source desktop tool.
            </p>
          </div>
        </div>

        <span className="rounded-full border border-white/10 bg-white/[0.03] px-2 py-1 text-[11px] text-zinc-400">
          v1.0.0
        </span>
      </div>

      <div className="mt-auto flex items-center justify-between pt-4">
        <span className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-xs text-zinc-300">
          Open source
        </span>

        <a
          href="https://github.com/MarcosFinki/trackly/releases/tag/v1.0.0"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium text-accent transition hover:text-blue-300"
        >
          Release
          <ArrowUpRight size={14} />
        </a>
      </div>
    </BentoCard>
  );
}
