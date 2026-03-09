"use client";

import { ReactNode, useRef } from "react";
import { clsx } from "clsx";

type BentoCardProps = {
  children: ReactNode;
  className?: string;
};

export default function BentoCard({ children, className }: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current?.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current?.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={clsx(
        "group relative rounded-2xl border border-zinc-800 bg-zinc-900 p-6",
        "transition-all duration-300 overflow-hidden",
        "hover:border-accent",
        className
      )}
    >
      {/* Spotlight */}
      <div
        className="
        pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100
        "
        style={{
          background:
            "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(59,130,246,0.15), transparent 40%)",
        }}
      />

      <div className="relative z-10">{children}</div>
    </div>
  );
}