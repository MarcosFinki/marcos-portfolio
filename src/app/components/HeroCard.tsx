"use client";

import { useEffect, useState } from "react";
import BentoCard from "./BentoCard";
import { Download, Github, Linkedin, MapPin, Globe } from "lucide-react";

const roles = [
  "FullStack Developer",
  "Backend Developer",
  "NestJS Developer",
  "Software Engineer"
];

export default function HeroCard() {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting) {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length + 1));
      }, 60);

      if (text === current) {
        timeout = setTimeout(() => setIsDeleting(true), 1200);
      }
    } else {
      timeout = setTimeout(() => {
        setText(current.slice(0, text.length - 1));
      }, 40);

      if (text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <BentoCard className="md:col-span-1 md:row-span-2 flex flex-col h-full">

      {/* TOP AREA */}
      <div className="grid grid-cols-[96px_1fr] gap-4">

        {/* Avatar */}
        <div className="row-span-3">
          <img
            src="/me.jpeg"
            alt="Marcos Finkielsztajn"
            className="w-24 h-full rounded-xl object-cover"
          />
        </div>

        {/* Row 1 */}
        <div className="flex items-center justify-between">

          <span className="flex items-center gap-2 text-xs bg-zinc-800 px-3 py-1 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            Available to work
          </span>

          {/* Resume button */}
          <div className="relative group inline-block">
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center justify-center w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-accent transition"
            >
              <Download size={16} />
            </a>

            {/* Tooltip */}
            <span className="absolute right-0 top-full mt-2 text-xs bg-zinc-900 border border-zinc-800 px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none whitespace-nowrap">
              Resume
            </span>
          </div>

        </div>

        {/* Name */}
        <h2 className="text-xl font-semibold leading-tight">
          Marcos Finkielsztajn
        </h2>

        {/* Role */}
        <p className="text-zinc-400 text-sm leading-tight">
          I am a{" "}
          <span className="text-accent font-medium">
            {text}
          </span>
          <span className="animate-pulse">|</span>
        </p>

      </div>


      {/* INFO SECTION */}
      <div className="flex flex-wrap gap-2 text-xs mt-5">

        <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800">
          <MapPin size={14} />
          Valencia, Spain
        </span>

        <span className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800">
          <Globe size={14} />
          Spanish & English
        </span>

      </div>


      {/* DIVIDER */}
      <div className="border-t border-zinc-800 my-5"></div>


      {/* ACTIONS */}
      <div className="grid grid-cols-2 gap-3 mt-auto text-sm">

        <a
          href="https://github.com/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl py-3 hover:border-accent transition"
        >
          <Github size={16} />
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/tuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-zinc-900 border border-zinc-800 rounded-xl py-3 hover:border-accent transition"
        >
          <Linkedin size={16} />
          LinkedIn
        </a>

      </div>

    </BentoCard>
  );
}