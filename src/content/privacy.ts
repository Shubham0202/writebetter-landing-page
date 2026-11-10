import { SUPPORTED_SITES } from "@/config/site";

/** Every statement here mirrors the "Privacy and security" and "Permissions" sections of the extension README. */

export const LOCAL_PROCESSING = [
  "Spelling, with a bundled English dictionary",
  "Grammar, punctuation and tense rules",
  "Polite and Professional rewrites",
  "Suggestions as you type on websites",
];

export const STORED_LOCALLY = [
  "Your settings and the words you chose to ignore",
  "Your AI API key, only if you add one. Remove key deletes it",
];

export const NEVER_WATCHED_FIELDS = "Password, payment, one-time-code, read-only and code-editor fields are never watched.";

export type DataFlow = {
  trigger: string;
  destination: string;
  dataSent: string;
};

export const DATA_FLOWS: DataFlow[] = [
  {
    trigger: "You turn on Online grammar check in the popup, then press Fix Grammar or Fix Everything",
    destination: "LanguageTool's public API",
    dataSent: "The text in the popup. LanguageTool also receives your IP address.",
  },
  {
    trigger: "You press Rewrite with AI in the popup",
    destination: "The AI provider you chose: Google Gemini, Groq or OpenRouter",
    dataSent: "The text in the popup and the style you chose",
  },
  {
    trigger: "You turn on AI for the keyboard shortcut, then press Ctrl+Shift+Space in a field",
    destination: "The AI provider you chose",
    dataSent: "That field's text and the style you chose",
  },
];

export type Permission = {
  name: string;
  reason: string;
};

export const PERMISSIONS: Permission[] = [
  {
    name: "storage",
    reason: "Remembers your settings, ignored words and, if you add one, your AI API key.",
  },
  {
    name: "scripting",
    reason: "Shows the suggestion UI on a page once there is something to show, and registers sites you add.",
  },
  {
    name: "localhost",
    reason: "Lets the extension reach a LanguageTool server you run on your own computer.",
  },
  {
    name: "Built-in sites",
    reason: `Runs inline suggestions on ${SUPPORTED_SITES.join(", ")}.`,
  },
  {
    name: "Optional: other sites",
    reason: "Nothing is granted at install. Adding a site in Settings asks Chrome for that one site only.",
  },
];
