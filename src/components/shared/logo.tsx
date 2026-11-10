import { cn } from "cn";

import { SITE_CONFIG } from "@/config/site";

/** The extension's icon: a check on an indigo rounded square. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("size-7", className)}>
      <rect width="32" height="32" rx="8" className="fill-primary" />
      <path
        d="M9.5 16.5l4.5 4.5 8.5-9.5"
        fill="none"
        stroke="white"
        strokeWidth="3.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <a
      href="#top"
      className={cn(
        "inline-flex items-center gap-2 rounded-lg text-[1.05rem] font-semibold tracking-tight text-foreground outline-none focus-visible:ring-3 focus-visible:ring-ring/50",
        className,
      )}
    >
      <LogoMark />
      {SITE_CONFIG.name}
    </a>
  );
}
