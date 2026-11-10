import { INSTALL_SOURCE, SITE_CONFIG, SUPPORTED_SITES, type InstallSource } from "@/config/site";

export type FaqItem = {
  id: string;
  question: string;
  answer: string[];
};

const INSTALL_ANSWER: Record<InstallSource, string[]> = {
  chromeWebStore: [
    "Open WriteBetter on the Chrome Web Store, click Add to Chrome, then pin it from the extensions menu.",
  ],
  source: [
    "WriteBetter is not on the Chrome Web Store yet, so for now you build it from source.",
    `Clone the GitHub repository, run npm install and npm run build, then open chrome://extensions, switch on Developer mode, click Load unpacked and choose the dist folder. You need Node.js 20.19+ or 22.12+ and Chrome ${SITE_CONFIG.minimumChromeVersion}+.`,
  ],
};

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: "what-is-writebetter",
    question: "What is WriteBetter?",
    answer: [
      "WriteBetter is a Chrome extension that fixes spelling, grammar, tense and tone, and turns casual messages into polite or professional ones.",
      "You can use it from its popup, or get suggestions as you type on supported websites. The built-in checks run on your computer and work offline.",
    ],
  },
  {
    id: "is-it-free",
    question: "Is WriteBetter free?",
    answer: [
      "Yes. WriteBetter is open source under the MIT license and needs no account.",
      "AI rewriting is optional and uses your own API key, so any cost depends on the provider you pick. OpenRouter offers free models that work with WriteBetter.",
    ],
  },
  {
    id: "how-to-install",
    question: "How do I install it?",
    answer: INSTALL_ANSWER[INSTALL_SOURCE],
  },
  {
    id: "gmail",
    question: "Does it work with Gmail?",
    answer: [
      `Yes. Gmail is one of the built-in sites for suggestions as you type, along with ${SUPPORTED_SITES.filter((site) => site !== "Gmail").join(", ")}. The popup works with text from anywhere.`,
      "Its Gmail support is tested automatically against a copy of Gmail's reply layout. Testing on the live Gmail site in a signed-in browser is still on the roadmap.",
    ],
  },
  {
    id: "api-key",
    question: "Does it require an AI API key?",
    answer: [
      "No. Spelling, grammar, tense and the Polite and Professional rewrites all work without a key or an internet connection.",
      "A key from Google Gemini, Groq or OpenRouter is only needed for the optional Rewrite with AI feature. It is stored on your computer and sent only to the provider you chose.",
    ],
  },
  {
    id: "text-stored",
    question: "Is my text stored or shared?",
    answer: [
      "Your text is never stored. WriteBetter has no server of its own, no account and no analytics or tracking.",
      "Text leaves your computer only when you turn on the online grammar check or ask for an AI rewrite, and then it goes straight to LanguageTool or the AI provider you chose. Their own privacy policies apply.",
    ],
  },
  {
    id: "languages",
    question: "Which languages are supported?",
    answer: [
      "English. Grammar checks use US English, and British spellings are accepted. Other languages are not supported yet.",
    ],
  },
];
