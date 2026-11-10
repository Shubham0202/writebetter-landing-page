import { ArrowDown, ChevronDown, Copy, Sparkles } from "lucide-react";
import { cn } from "cn";

import { LogoMark } from "@/components/shared/logo";
import { SITE_CONFIG } from "@/config/site";
import { HERO_EXAMPLE } from "@/content/examples";

const POPUP_ACTIONS = ["Fix Grammar", "Make Polite", "Professional", "Fix Everything"];

const fakeButtonClass =
  "inline-flex h-8 items-center justify-center gap-1.5 rounded-lg border border-border bg-card px-2.5 text-xs font-medium";

/** A static replica of the extension popup, labelled from the real popup's components. */
export function PopupMockup() {
  return (
    <figure className="mx-auto w-full max-w-md">
      <div
        aria-hidden="true"
        className="overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10 ring-1 ring-foreground/5"
      >
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2.5">
            <LogoMark className="size-7" />
            <div>
              <p className="text-sm font-semibold">{SITE_CONFIG.name}</p>
              <p className="text-xs text-muted-foreground">Local-first writing assistant</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-success" />
            Ready
            <span className="text-muted-foreground/70">v{SITE_CONFIG.extensionVersion}</span>
          </div>
        </div>

        <div className="space-y-3 p-4">
          <div className="min-h-16 rounded-lg border border-input bg-background px-3 py-2.5 text-sm">
            {HERO_EXAMPLE.before}
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {POPUP_ACTIONS.map((action) => (
              <span key={action} className={fakeButtonClass}>
                {action}
              </span>
            ))}
          </div>

          <div className="flex gap-2">
            <span className={cn(fakeButtonClass, "flex-1 border-primary bg-primary text-primary-foreground")}>
              <Sparkles className="size-3.5" />
              Rewrite with AI
            </span>
            <span className={cn(fakeButtonClass, "w-36 justify-between")}>
              {HERO_EXAMPLE.style}
              <ChevronDown className="size-3.5 text-muted-foreground" />
            </span>
          </div>

          <div className="rounded-xl border border-border bg-muted/50 p-3">
            <p className="text-[0.7rem] font-semibold tracking-wide text-muted-foreground uppercase">Original</p>
            <p className="mt-1 text-sm text-muted-foreground line-through decoration-destructive/50">
              {HERO_EXAMPLE.before}
            </p>
            <ArrowDown className="my-2 size-4 text-muted-foreground" />
            <p className="text-[0.7rem] font-semibold tracking-wide text-success uppercase">Improved</p>
            <p className="mt-1 rounded-md bg-success-muted px-2 py-1.5 text-sm font-medium text-success">
              {HERO_EXAMPLE.after}
            </p>
            <div className="mt-3 flex justify-end gap-2">
              <span className={fakeButtonClass}>
                <Copy className="size-3.5" />
                Copy
              </span>
              <span className={cn(fakeButtonClass, "border-primary bg-primary text-primary-foreground")}>
                Replace input
              </span>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs text-muted-foreground">
        <span className="sr-only">
          The WriteBetter popup rewrites “{HERO_EXAMPLE.before}” as “{HERO_EXAMPLE.after}”.{" "}
        </span>
        Example of an optional AI rewrite in the “{HERO_EXAMPLE.style}” style. Results vary by model.
      </figcaption>
    </figure>
  );
}
