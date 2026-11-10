import {
  Briefcase,
  HeartHandshake,
  Lightbulb,
  Scissors,
  Smile,
  WandSparkles,
  type LucideIcon,
} from "lucide-react";

export type ToneOption = {
  id: string;
  /** The label exactly as the extension shows it. */
  label: string;
  description: string;
  icon: LucideIcon;
};

/** The Make Polite and Professional buttons, and the tone menu next to Fix Everything in the popup. */
export const BUILT_IN_TONES: ToneOption[] = [
  {
    id: "polite",
    label: "Polite",
    description: "Softens blunt requests with rule-based changes: “send me the report now” becomes “Could you please send me the report now?”",
    icon: HeartHandshake,
  },
  {
    id: "professional",
    label: "Professional",
    description: "Swaps casual wording for workplace phrasing: “asap” becomes “at your earliest convenience”.",
    icon: Briefcase,
  },
];

/** Descriptions follow the extension's own instruction for each style (src/engines/rewrite/rewritePrompt.ts). */
export const AI_REWRITE_STYLES: ToneOption[] = [
  {
    id: "improve-wording",
    label: "Improve wording",
    description: "Keeps your tone and fixes only what sounds unnatural, awkward or incorrect.",
    icon: WandSparkles,
  },
  {
    id: "professional",
    label: "Make professional",
    description: "Courteous, clear and confident business English for colleagues, clients or managers, without stiff wording.",
    icon: Briefcase,
  },
  {
    id: "polite",
    label: "Make polite",
    description: "Considerate requests such as “Could I please…” or “Would it be possible to…”, warm rather than apologetic.",
    icon: HeartHandshake,
  },
  {
    id: "concise",
    label: "Make concise",
    description: "As short as it can be while keeping every piece of information. Filler and repetition go.",
    icon: Scissors,
  },
  {
    id: "friendly",
    label: "Make friendly",
    description: "Warm and approachable, like writing to someone you get along with, without overdoing the enthusiasm.",
    icon: Smile,
  },
  {
    id: "clarity",
    label: "Improve clarity",
    description: "One idea per sentence, precise words and a logical order, so the meaning is easy to follow.",
    icon: Lightbulb,
  },
];

export const AI_STYLE_SAFEGUARD =
  "Every style keeps your meaning and never adds information. Names, dates, numbers, links and @mentions stay as written, and a rewrite that changes a link, email address, @mention or code is not used.";
