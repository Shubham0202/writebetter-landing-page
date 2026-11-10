export type ExampleSource = "builtIn" | "ai";

export type BeforeAfterExample = {
  id: string;
  label: string;
  action: string;
  source: ExampleSource;
  before: string;
  after: string;
};

export const HERO_EXAMPLE = {
  style: "Make polite",
  before: "send me update fast i am waiting",
  after: "Could you please share an update when you have a moment? I would appreciate it.",
} as const;

export const EXAMPLE_SOURCE_LABEL: Record<ExampleSource, string> = {
  builtIn: "Built-in engine · works offline, no AI",
  ai: "Optional AI rewrite · example output, results vary by model",
};

/**
 * The built-in examples are the extension's documented output from its offline engines.
 * The AI example is illustrative, because AI rewrites differ between providers and models.
 */
export const BEFORE_AFTER_EXAMPLES: BeforeAfterExample[] = [
  {
    id: "ai-polite",
    label: "AI rewrite",
    action: "Rewrite with AI · Make polite",
    source: "ai",
    before: "you didn't send me the report. send it now",
    after: "Could you please share the report when you get a chance? Thank you.",
  },
  {
    id: "polite",
    label: "Make Polite",
    action: "Make Polite",
    source: "builtIn",
    before: "can you check the current ticket info",
    after: "Could you please check the current ticket information?",
  },
  {
    id: "professional",
    label: "Professional",
    action: "Professional",
    source: "builtIn",
    before: "could you please fix this issue asap",
    after: "Could you please fix this issue at your earliest convenience?",
  },
  {
    id: "polite-question",
    label: "Softer question",
    action: "Make Polite",
    source: "builtIn",
    before: "why didnt you reply to my mail",
    after: "Was there a reason you were not able to reply to my mail?",
  },
];
