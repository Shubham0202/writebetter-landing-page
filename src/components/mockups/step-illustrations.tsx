import type { ComponentType } from "react";
import { Pin, Puzzle } from "lucide-react";
import { cn } from "cn";

import { LogoMark } from "@/components/shared/logo";
import { SITE_CONFIG } from "@/config/site";
import type { StepIllustration as StepIllustrationName } from "@/content/steps";

const frameClass = "flex h-44 flex-col overflow-hidden rounded-xl border border-border bg-background text-xs";

function InstallIllustration() {
  return (
    <div className={frameClass}>
      <div className="flex items-center gap-2 border-b border-border bg-muted/60 px-3 py-2">
        <span className="flex gap-1">
          <span className="size-2 rounded-full bg-border" />
          <span className="size-2 rounded-full bg-border" />
          <span className="size-2 rounded-full bg-border" />
        </span>
        <span className="h-5 flex-1 rounded-md bg-card" />
        <LogoMark className="size-5 rounded-md ring-2 ring-primary/30" />
        <Puzzle className="size-4 text-muted-foreground" />
      </div>
      <div className="ml-auto mt-3 mr-3 w-44 rounded-lg border border-border bg-card p-2 shadow-md">
        <p className="px-1 pb-1.5 text-[0.65rem] font-semibold text-muted-foreground uppercase">Extensions</p>
        <div className="flex items-center gap-2 rounded-md bg-secondary px-2 py-1.5">
          <LogoMark className="size-4" />
          <span className="flex-1 font-medium">{SITE_CONFIG.name}</span>
          <Pin className="size-3.5 fill-primary text-primary" />
        </div>
      </div>
    </div>
  );
}

function WriteIllustration() {
  return (
    <div className={frameClass}>
      <div className="border-b border-border px-3 py-2 text-muted-foreground">New message</div>
      <div className="relative flex-1 px-3 py-3 text-sm leading-relaxed">
        <p>
          Hi team, can you send me the{" "}
          <span className="underline decoration-red-500 decoration-2 underline-offset-4">reprot</span> by{" "}
          <span className="underline decoration-red-500 decoration-2 underline-offset-4">tomorow</span>{" "}
          <span className="underline decoration-amber-500 decoration-dashed decoration-2 underline-offset-4">
            i
          </span>{" "}
          need it for the review
        </p>
        <span className="absolute right-3 bottom-3 flex size-5 items-center justify-center rounded-full bg-primary text-[0.65rem] font-semibold text-primary-foreground">
          3
        </span>
      </div>
    </div>
  );
}

function ImproveIllustration() {
  return (
    <div className={cn(frameClass, "justify-center bg-muted/40 p-4")}>
      <div className="rounded-lg border border-border bg-card p-3 shadow-md">
        <p className="font-semibold text-muted-foreground">Spelling</p>
        <p className="mt-1.5 text-sm">
          <del className="text-destructive decoration-destructive/60">reprot</del>
          <span className="mx-1.5 text-muted-foreground">→</span>
          <ins className="font-semibold text-success no-underline">report</ins>
        </p>
        <p className="mt-1 text-muted-foreground">Correct the spelling.</p>
        <div className="mt-3 flex gap-2">
          <span className="rounded-md bg-primary px-2.5 py-1 font-medium text-primary-foreground">Accept</span>
          <span className="rounded-md border border-border px-2.5 py-1 font-medium">Dismiss</span>
        </div>
      </div>
    </div>
  );
}

const STEP_ILLUSTRATION: Record<StepIllustrationName, ComponentType> = {
  install: InstallIllustration,
  write: WriteIllustration,
  improve: ImproveIllustration,
};

export function StepIllustration({ name }: { name: StepIllustrationName }) {
  const Illustration = STEP_ILLUSTRATION[name];

  return (
    <div aria-hidden="true">
      <Illustration />
    </div>
  );
}
