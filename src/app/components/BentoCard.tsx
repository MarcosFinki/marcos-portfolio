"use client";

import { HTMLAttributes, ReactNode, useRef } from "react";
import { clsx } from "clsx";

type BentoCardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  className?: string;
};

export default function BentoCard({
  children,
  className,
  onMouseMove,
  ...props
}: BentoCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    onMouseMove?.(e);

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
      {...props}
      className={clsx(
        "group relative overflow-hidden rounded-2xl border border-white/[0.08]",
        "bg-[linear-gradient(180deg,rgba(24,24,27,0.94),rgba(13,13,16,0.98))] p-6",
        "shadow-[0_18px_60px_rgba(0,0,0,0.22)] ring-1 ring-white/[0.02]",
        "transition-all duration-300 hover:border-accent/60",
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

      <div className="relative z-10 flex h-full flex-col">{children}</div>
    </div>
  );
}
