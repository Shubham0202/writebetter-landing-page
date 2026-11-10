import { ArrowRight, CircleCheck, CircleDashed, CircleX, type LucideIcon } from "lucide-react";
import { cn } from "cn";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { StatusBadge } from "@/components/shared/status-badge";
import { SECTION_IDS } from "@/config/site";
import type { FeatureStatus } from "@/content/features";
import { PROBLEM_SOLUTIONS } from "@/content/problems";

const SOLUTION_ICON: Record<FeatureStatus, { icon: LucideIcon; className: string }> = {
  available: { icon: CircleCheck, className: "text-success" },
  optional: { icon: CircleCheck, className: "text-primary" },
  planned: { icon: CircleDashed, className: "text-muted-foreground" },
};

export function ProblemSolution() {
  return (
    <Section
      id={SECTION_IDS.problems}
      eyebrow="Why WriteBetter"
      title="Small writing slips cost you clarity and credibility"
      description="Quick emails and chat messages are where mistakes and blunt wording sneak in. WriteBetter catches them where you already write."
      className="border-y border-border bg-card"
    >
      <ul className="mx-auto flex max-w-4xl flex-col gap-4">
        {PROBLEM_SOLUTIONS.map((item, index) => {
          const { icon: SolutionIcon, className: solutionIconClass } = SOLUTION_ICON[item.status];

          return (
            <Reveal
              as="li"
              key={item.problem}
              delay={index * 0.05}
              className="grid items-center gap-4 rounded-2xl border border-border bg-background p-5 sm:grid-cols-[1fr_auto_1fr] sm:gap-6 sm:p-6"
            >
              <div className="flex gap-3">
                <CircleX aria-hidden="true" className="mt-0.5 size-5 shrink-0 text-destructive/80" />
                <div>
                  <h3 className="font-semibold">{item.problem}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.problemDetail}</p>
                </div>
              </div>
              <ArrowRight aria-hidden="true" className="hidden size-5 text-muted-foreground/60 sm:block" />
              <div className="flex gap-3 border-t border-border pt-4 sm:border-t-0 sm:pt-0">
                <SolutionIcon aria-hidden="true" className={cn("mt-0.5 size-5 shrink-0", solutionIconClass)} />
                <div>
                  <p className="flex flex-wrap items-center gap-2 font-semibold">
                    {item.solution}
                    <StatusBadge status={item.status} />
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.solutionDetail}</p>
                </div>
              </div>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}
