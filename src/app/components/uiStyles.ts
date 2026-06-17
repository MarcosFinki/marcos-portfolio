export const ui = {
  cardHeader: "flex items-start gap-3",
  iconBox:
    "flex size-9 shrink-0 items-center justify-center rounded-lg border border-accent/20 bg-accent/10 text-accent",
  cardTitle:
    "text-base font-semibold leading-tight tracking-tight text-zinc-950 dark:text-zinc-50",
  cardDescription: "mt-1 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400",
  cardMeta: "text-xs leading-relaxed text-zinc-500 dark:text-zinc-500",
  eyebrow:
    "text-[11px] font-semibold uppercase tracking-[0.18em] text-accent",
  chip:
    "rounded-md border border-zinc-200 bg-zinc-50/80 px-2 py-1 text-xs text-zinc-700 shadow-sm shadow-zinc-950/[0.02] transition hover:border-blue-200 hover:bg-blue-50/80 hover:text-zinc-950 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:shadow-none dark:hover:border-accent/40 dark:hover:bg-white/[0.07] dark:hover:text-white",
  smallChip:
    "rounded-md border border-zinc-200 bg-zinc-50/80 px-2 py-1 text-[11px] text-zinc-700 shadow-sm shadow-zinc-950/[0.02] transition hover:border-blue-200 hover:bg-blue-50/80 hover:text-zinc-950 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:shadow-none dark:hover:border-accent/40 dark:hover:bg-white/[0.07] dark:hover:text-white",
  divider: "border-t border-zinc-200/80 dark:border-white/[0.08]",
  secondaryButton:
    "inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-200 bg-white/75 px-3 py-2 text-sm font-medium text-zinc-700 shadow-sm shadow-zinc-950/[0.03] transition hover:border-accent/50 hover:bg-blue-50 hover:text-zinc-950 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:shadow-none dark:hover:border-accent/60 dark:hover:bg-white/[0.07] dark:hover:text-white",
  primaryButton:
    "inline-flex items-center justify-center gap-2 rounded-xl border border-accent/30 bg-accent/15 px-3 py-2 text-sm font-medium text-blue-900 shadow-sm shadow-blue-950/[0.05] transition hover:border-accent/60 hover:bg-accent/20 dark:text-blue-100 dark:shadow-none",
  iconButton:
    "flex size-9 shrink-0 items-center justify-center rounded-lg border border-zinc-200 bg-white/75 text-zinc-700 shadow-sm shadow-zinc-950/[0.03] transition hover:border-accent/50 hover:bg-blue-50 hover:text-zinc-950 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:shadow-none dark:hover:border-accent/60 dark:hover:bg-white/[0.07] dark:hover:text-white",
  textLink:
    "inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-100",
  panel:
    "rounded-xl border border-zinc-200 bg-white/70 shadow-sm shadow-zinc-950/[0.03] dark:border-white/10 dark:bg-white/[0.03] dark:shadow-none",
  previewFrame:
    "relative min-h-[300px] flex-1 overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 shadow-inner shadow-zinc-950/[0.06] dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/40 md:min-h-0",
};

export function controlClass(isActive: boolean) {
  return isActive
    ? "inline-flex min-h-8 items-center rounded-md border border-accent/45 bg-blue-100/80 px-2.5 py-1 text-xs font-medium text-blue-900 shadow-sm shadow-blue-950/[0.04] transition hover:border-accent/55 hover:bg-blue-100 dark:border-accent/45 dark:bg-accent/16 dark:text-blue-100 dark:shadow-none dark:hover:bg-accent/20"
    : "inline-flex min-h-8 items-center rounded-md border border-zinc-200 bg-zinc-50/80 px-2.5 py-1 text-xs text-zinc-600 shadow-sm shadow-zinc-950/[0.02] transition hover:border-blue-200 hover:bg-blue-50/90 hover:text-blue-950 dark:border-white/10 dark:bg-white/[0.04] dark:text-zinc-300 dark:shadow-none dark:hover:border-accent/45 dark:hover:bg-white/[0.07] dark:hover:text-white";
}
