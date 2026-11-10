import { Check } from "lucide-react";
import { cn } from "cn";

import { ToneShowcase } from "@/components/sections/tone-showcase";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { StatusBadge } from "@/components/shared/status-badge";
import { SECTION_IDS, SITE_CONFIG } from "@/config/site";
import { FEATURES, type FeatureStatus } from "@/content/features";

const CARD_STYLE: Record<FeatureStatus, string> = {
  available: "border-border bg-card shadow-sm hover:-translate-y-0.5 hover:shadow-md",
  optional: "border-border bg-card shadow-sm hover:-translate-y-0.5 hover:shadow-md",
  planned: "border-dashed border-border bg-muted/40",
};

const ICON_STYLE: Record<FeatureStatus, string> = {
  available: "bg-secondary text-primary",
  optional: "bg-secondary text-primary",
  planned: "bg-muted text-muted-foreground",
};

const ALSO_INCLUDED = ["Keyboard shortcuts", "Personal dictionary", "One-click Undo", "Light and dark themes"];

export function Features() {
  return (
    <Section
      id={SECTION_IDS.features}
      eyebrow="Features"
      title={SITE_CONFIG.tagline}
      description="A grammar checker and polite writing assistant in one Chrome extension. Planned features are labelled, so you know exactly what you get today."
    >
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, index) => (
          <Reveal
            as="li"
            key={feature.id}
            delay={(index % 3) * 0.06}
            className={cn(
              "flex flex-col rounded-2xl border p-6 transition-[translate,box-shadow] duration-200 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
              CARD_STYLE[feature.status],
            )}
          >
            <div className="flex items-start justify-between gap-3">
              <span className={cn("flex size-11 items-center justify-center rounded-xl", ICON_STYLE[feature.status])}>
                <feature.icon aria-hidden="true" className="size-5" />
              </span>
              <StatusBadge status={feature.status} />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            <ul className="mt-4 flex flex-col gap-2 border-t border-border pt-4">
              {feature.points.map((point) => (
                <li key={point} className="flex gap-2 text-sm leading-relaxed">
                  <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-muted-foreground" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </ul>

      <ToneShowcase />

      <div className="mt-10 flex flex-wrap items-center justify-center gap-2 text-sm">
        <span className="mr-1 text-muted-foreground">Also included:</span>
        {ALSO_INCLUDED.map((item) => (
          <span key={item} className="rounded-full border border-border bg-card px-3 py-1 font-medium">
            {item}
          </span>
        ))}
      </div>
    </Section>
  );
}
