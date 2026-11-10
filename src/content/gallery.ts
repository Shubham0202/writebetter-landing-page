import type { StaticImageData } from "next/image";

import aiRewriteImproveWording from "@/assets/screenshots/ai-rewrite-improve-wording.png";
import aiRewritePolite from "@/assets/screenshots/ai-rewrite-polite.png";
import demo from "@/assets/screenshots/demo.gif";
import extensionPopup from "@/assets/screenshots/extension-popup.png";
import settingsPage from "@/assets/screenshots/settings-page.png";
import type { FeatureStatus } from "@/content/features";

export type GalleryItem = {
  id: string;
  title: string;
  caption: string;
  status: FeatureStatus;
  /** `null` renders a placeholder. To add a screenshot, put it in src/assets/screenshots and import it here. */
  image: { src: StaticImageData; alt: string } | null;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "demo",
    title: "Every suggestion in one list",
    caption:
      "Ctrl+Shift+Space on ChatGPT, added as a site in Settings: the list shows every suggestion while the AI rewrite loads, and Accept replaces the text.",
    status: "available",
    image: {
      src: demo,
      alt: "Typing “hello chatgpt hows your day today” in ChatGPT, pressing Ctrl+Shift+Space to list the suggestions while the AI rewrite loads, and accepting the rewrite “Hello ChatGPT, I wanted to ask how your day is going today?”",
    },
  },
  {
    id: "popup",
    title: "Extension popup",
    caption:
      "Paste up to 5,000 characters, then pick Fix Grammar, Make Polite, Professional, Fix Everything or Rewrite with AI. Switches for the online grammar check and website suggestions sit below.",
    status: "available",
    image: {
      src: extensionPopup,
      alt: "WriteBetter popup in dark mode: a text box with a 5,000-character counter, buttons for Fix Grammar, Make Polite and Professional, Fix Everything with a Polite tone menu, Rewrite with AI with an Improve wording menu, and switches for Online grammar check and suggestions on websites",
    },
  },
  {
    id: "settings",
    title: "Settings page",
    caption:
      "Set up AI rewriting with your own key, choose the style for the keyboard shortcut, pick a theme and read the privacy summary.",
    status: "available",
    image: {
      src: settingsPage,
      alt: "WriteBetter Settings page in dark mode: the AI rewriting section with OpenRouter selected, a masked API key, the default free model and the keyboard shortcut set to Make polite, followed by Appearance and Privacy sections",
    },
  },
  {
    id: "grammar-correction",
    title: "Grammar correction",
    caption: "In Gmail, the rewrite fixes the wording, then the local capitalization and punctuation fixes follow.",
    status: "available",
    image: {
      src: aiRewriteImproveWording,
      alt: "Suggestion list in a Gmail message: “hello how are you can you tell me about your day” is rewritten as “Hello! How are you? Can you tell me about your day?”",
    },
  },
  {
    id: "polite-rewriting",
    title: "Polite rewriting",
    caption: "The same list in the polite style: the rewrite is marked “Rewritten to sound more polite”.",
    status: "available",
    image: {
      src: aiRewritePolite,
      alt: "Suggestion list in a Gmail message: an AI rewrite in the polite style, listed above the capitalization and punctuation fixes",
    },
  },
  {
    id: "email-formatting",
    title: "Email formatting",
    caption: "Planned. Email formatting is not part of the extension yet.",
    status: "planned",
    image: null,
  },
];
