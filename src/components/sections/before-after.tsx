import type { ReactNode } from "react";
import { ArrowRight, Sparkles, WifiOff, type LucideIcon } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { SECTION_IDS } from "@/config/site";
import {
  BEFORE_AFTER_EXAMPLES,
  EXAMPLE_SOURCE_LABEL,
  type BeforeAfterExample,
  type ExampleSource,
} from "@/content/examples";
import { diffWords, type DiffToken } from "@/lib/word-diff";

const SOURCE_ICON: Record<ExampleSource, LucideIcon> = {
  builtIn: WifiOff,
  ai: Sparkles,
};

type DiffKind = "removed" | "added";

const CHANGED_TOKEN: Record<DiffKind, (text: string) => ReactNode> = {
  removed: (text) => <del className="text-destructive decoration-destructive/50">{text}</del>,
  added: (text) => (
    <ins className="rounded bg-success/10 px-0.5 font-medium text-success no-underline">{text}</ins>
  ),
};

function DiffText({ tokens, kind }: { tokens: DiffToken[]; kind: DiffKind }) {
  return tokens.map((token, index) => (
    <span key={index}>
      {index > 0 && " "}
      {token.isChanged ? CHANGED_TOKEN[kind](token.text) : token.text}
    </span>
  ));
}

function ExampleComparison({ example }: { example: BeforeAfterExample }) {
  const diff = diffWords(example.before, example.after);
  const SourceIcon = SOURCE_ICON[example.source];

  return (
    <Reveal>
      <div className="grid items-stretch gap-4 md:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-2xl border border-border bg-card p-6">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">Before</p>
          <p className="mt-3 text-lg leading-relaxed sm:text-xl">
            <DiffText tokens={diff.before} kind="removed" />
          </p>
        </div>
        <div className="flex items-center justify-center">
          <span className="flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-md shadow-primary/25">
            {example.action}
            <ArrowRight aria-hidden="true" className="size-3.5 max-md:rotate-90" />
          </span>
        </div>
        <div className="rounded-2xl border border-success/25 bg-success-muted p-6">
          <p className="text-xs font-semibold tracking-wide text-success uppercase">After</p>
          <p className="mt-3 text-lg leading-relaxed sm:text-xl">
            <DiffText tokens={diff.after} kind="added" />
          </p>
        </div>
      </div>
      <p className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <SourceIcon aria-hidden="true" className="size-4" />
        {EXAMPLE_SOURCE_LABEL[example.source]}
      </p>
    </Reveal>
  );
}

export function BeforeAfter() {
  const [firstExample] = BEFORE_AFTER_EXAMPLES;

  return (
    <Section
      id={SECTION_IDS.beforeAfter}
      eyebrow="Before and after"
      title="See the difference in one click"
      description="Pick an example. The built-in examples are real output from WriteBetter's offline engines, with no AI involved."
    >
      <Tabs defaultValue={firstExample.id} className="mx-auto max-w-4xl items-center gap-8">
        <TabsList className="h-auto! flex-wrap justify-center">
          {BEFORE_AFTER_EXAMPLES.map((example) => (
            <TabsTrigger key={example.id} value={example.id} className="px-3 py-1.5">
              {example.label}
            </TabsTrigger>
          ))}
        </TabsList>
        {BEFORE_AFTER_EXAMPLES.map((example) => (
          <TabsContent key={example.id} value={example.id} className="w-full">
            <ExampleComparison example={example} />
          </TabsContent>
        ))}
      </Tabs>
    </Section>
  );
}
