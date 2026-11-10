import { ShieldCheck, Sparkles, WifiOff, type LucideIcon } from "lucide-react";
import { cn } from "cn";

import { Reveal } from "@/components/shared/reveal";
import { StatusBadge } from "@/components/shared/status-badge";
import type { FeatureStatus } from "@/content/features";
import { AI_REWRITE_STYLES, AI_STYLE_SAFEGUARD, BUILT_IN_TONES, type ToneOption } from "@/content/tones";

type ToneGroupProps = {
  title: string;
  icon: LucideIcon;
  status: FeatureStatus;
  tones: ToneOption[];
  columnsClassName: string;
};

function ToneGroup({ title, icon: GroupIcon, status, tones, columnsClassName }: ToneGroupProps) {
  return (
    <div>
      <h4 className="flex flex-wrap items-center gap-2 text-sm font-semibold">
        <GroupIcon aria-hidden="true" className="size-4 text-primary" />
        {title}
        <StatusBadge status={status} />
      </h4>
      <ul className={cn("mt-4 grid gap-3", columnsClassName)}>
        {tones.map((tone) => (
          <li key={tone.id} className="flex gap-3 rounded-xl border border-border bg-background p-4">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-secondary text-primary">
              <tone.icon aria-hidden="true" className="size-4" />
            </span>
            <div>
              <p className="font-semibold">{tone.label}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{tone.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ToneShowcase() {
  return (
    <Reveal className="mt-16 rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-10">
      <div id="tones" className="max-w-2xl">
        <h3 className="text-2xl font-semibold tracking-tight">Choose the tone that fits the moment</h3>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          Two tones are built in and work offline. With an API key of your own, Rewrite with AI adds six styles, chosen
          from a menu in the popup or set for the Ctrl+Shift+Space shortcut in Settings.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_2fr]">
        <div className="flex flex-col gap-4">
          <ToneGroup
            title="Built in, works offline"
            icon={WifiOff}
            status="available"
            tones={BUILT_IN_TONES}
            columnsClassName="grid-cols-1"
          />
          <p className="text-sm leading-relaxed text-muted-foreground">
            Fix Everything corrects mistakes first, then rewrites in the tone you pick next to it.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <ToneGroup
            title="Rewrite with AI"
            icon={Sparkles}
            status="optional"
            tones={AI_REWRITE_STYLES}
            columnsClassName="sm:grid-cols-2"
          />
          <p className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
            <ShieldCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-success" />
            {AI_STYLE_SAFEGUARD}
          </p>
        </div>
      </div>
    </Reveal>
  );
}
