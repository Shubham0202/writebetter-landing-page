import {
  LayoutTemplate,
  MailCheck,
  MessageSquareHeart,
  MousePointerClick,
  Sparkles,
  SpellCheck,
  type LucideIcon,
} from "lucide-react";

import { SUPPORTED_SITES } from "@/config/site";
import { AI_REWRITE_STYLES } from "@/content/tones";

const AI_STYLE_LIST = new Intl.ListFormat("en", { type: "conjunction" }).format(
  AI_REWRITE_STYLES.map((style) => style.label),
);

export type FeatureStatus = "available" | "optional" | "planned";

export type Feature = {
  id: string;
  title: string;
  description: string;
  points: string[];
  status: FeatureStatus;
  icon: LucideIcon;
};

export const FEATURES: Feature[] = [
  {
    id: "fix-grammar",
    title: "Fix Grammar",
    description: "Correct spelling, grammar, punctuation, capitalization and tense in one click.",
    points: [
      "A bundled English dictionary plus local grammar and tense rules",
      "Keeps your wording: the built-in engines only change what their rules cover",
    ],
    status: "available",
    icon: SpellCheck,
  },
  {
    id: "make-polite",
    title: "Make Polite",
    description: "Turn blunt or casual wording into polite, professional language.",
    points: [
      "Make Polite and Professional tones, built in and offline",
      "Fix Everything corrects mistakes first, then rewrites in your chosen tone",
    ],
    status: "available",
    icon: MessageSquareHeart,
  },
  {
    id: "inline-assistance",
    title: "Inline Writing Assistance",
    description: `Suggestions as you type on ${SUPPORTED_SITES.join(", ")}, plus any site you add.`,
    points: [
      "Underlines, a suggestion card and Accept, Dismiss, Ignore and Undo",
      "Alt+Shift+G opens a suggestion; Ctrl+Shift+Space lists them all",
    ],
    status: "available",
    icon: MousePointerClick,
  },
  {
    id: "ai-rewriting",
    title: "AI-Powered Rewriting",
    description: "Optional rewrites with your own Google Gemini, Groq or OpenRouter API key.",
    points: [
      `${AI_REWRITE_STYLES.length} styles: ${AI_STYLE_LIST}`,
      "Free OpenRouter models work; text is sent only when you ask",
    ],
    status: "optional",
    icon: Sparkles,
  },
  {
    id: "format-email",
    title: "Format Email",
    description: "Organize an email's subject, greeting, paragraphs, spacing and closing.",
    points: ["Not available in the extension yet"],
    status: "planned",
    icon: LayoutTemplate,
  },
  {
    id: "improve-email",
    title: "Improve Email",
    description: "Grammar correction, tone improvement and email formatting in a single step.",
    points: [
      "Not available yet. Today, Fix Everything already combines grammar fixes with a polite or professional rewrite",
    ],
    status: "planned",
    icon: MailCheck,
  },
];
