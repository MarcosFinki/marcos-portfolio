"use client";

import Image from "next/image";
import BentoCard from "./BentoCard";
import { Download, Github, Linkedin, MapPin, Globe } from "lucide-react";

export default function HeroCard() {
  return (
    <BentoCard className="md:col-span-1 md:row-span-2">
      <div className="grid grid-cols-[96px_1fr] gap-x-4 gap-y-3">
        <Image
          src="/me.jpeg"
          alt="Marcos Finkielsztajn"
          width={96}
          height={96}
          priority
          className="row-span-2 size-24 shrink-0 rounded-xl object-cover ring-1 ring-white/10"
        />

        <div className="flex items-start justify-between gap-2">
          <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-emerald-400/15 bg-emerald-400/10 px-2.5 py-1 text-[11px] font-medium text-emerald-200">
            <span className="size-1.5 rounded-full bg-emerald-400"></span>
            Available
          </span>

          <div className="relative inline-block">
            <a
              href="/resume.pdf"
              target="_blank"
              aria-label="Open resume"
              className="flex size-9 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-zinc-200 transition hover:border-accent/60 hover:text-white"
            >
              <Download size={16} />
            </a>
          </div>
        </div>

        <h2 className="text-xl font-semibold leading-tight tracking-tight text-zinc-50">
          Marcos Finkielsztajn
        </h2>

        <p className="col-span-2 text-sm leading-relaxed text-zinc-400">
          I build real full-stack applications with scalable backend architecture.
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2 text-xs">
        <span className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-zinc-300">
          <MapPin size={14} />
          Valencia
        </span>

        <span className="flex items-center gap-2 whitespace-nowrap rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-zinc-300">
          <Globe size={14} />
          ES / EN
        </span>
      </div>

      <div className="my-5 border-t border-white/[0.08]"></div>

      <div className="mt-auto grid grid-cols-2 gap-3 text-sm">
        <a
          href="https://github.com/MarcosFinki"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-3 text-zinc-200 transition hover:border-accent/60 hover:text-white"
        >
          <Github size={16} />
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] py-3 text-zinc-200 transition hover:border-accent/60 hover:text-white"
        >
          <Linkedin size={16} />
          LinkedIn
        </a>
      </div>
    </BentoCard>
  );
}
