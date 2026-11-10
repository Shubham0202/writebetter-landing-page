const REPOSITORY_URL = "https://github.com/Shubham0202/WriteBetter";

/**
 * Set this to the listing URL once WriteBetter is published on the Chrome Web Store.
 * Every install button, the How It Works step and the install FAQ switch over automatically.
 */
const CHROME_WEB_STORE_URL: string | null = null;

function resolveSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  return "http://localhost:3000";
}

export const SITE_CONFIG = {
  name: "WriteBetter",
  title: "WriteBetter – Grammar Checker & Polite Writing Assistant for Chrome",
  tagline: "Write Better. Sound Professional. Every Time.",
  description:
    "Improve your everyday writing with WriteBetter. Correct grammar, refine your tone, and turn ordinary messages into clear, polite, and professional communication.",
  metaDescription:
    "WriteBetter is an open-source Chrome extension that fixes grammar and spelling and rewrites messages to sound polite and professional. Checks run on your computer.",
  url: resolveSiteUrl(),
  locale: "en_US",
  extensionVersion: "0.1.0",
  minimumChromeVersion: 116,
  author: {
    name: "Shubham Chandgude",
    url: "https://github.com/Shubham0202",
  },
  copyrightYear: 2026,
  keywords: [
    "WriteBetter Chrome Extension",
    "AI Writing Assistant",
    "Grammar Checker Chrome Extension",
    "Professional Writing Assistant",
    "Polite Writing Assistant",
    "Email Writing Assistant",
    "Grammar Correction Tool",
    "Professional Email Writer",
  ],
} as const;

export const LINKS = {
  repository: REPOSITORY_URL,
  installGuide: `${REPOSITORY_URL}#-installation`,
  privacyPolicy: `${REPOSITORY_URL}#-privacy-and-security`,
  issues: `${REPOSITORY_URL}/issues`,
  license: `${REPOSITORY_URL}/blob/main/LICENSE`,
  chromeWebStore: CHROME_WEB_STORE_URL,
} as const;

export type InstallSource = "chromeWebStore" | "source";

export const INSTALL_SOURCE: InstallSource = LINKS.chromeWebStore ? "chromeWebStore" : "source";

export const INSTALL_HREF = LINKS.chromeWebStore ?? LINKS.installGuide;

export const INSTALL_NOTE: Record<InstallSource, string> = {
  chromeWebStore: "Available on the Chrome Web Store.",
  source:
    "Not on the Chrome Web Store yet. The install guide shows how to load it in Chrome from source.",
};

export const SECTION_IDS = {
  problems: "why-writebetter",
  features: "features",
  howItWorks: "how-it-works",
  beforeAfter: "before-and-after",
  privacy: "privacy",
  gallery: "screenshots",
  faq: "faq",
} as const;

export const NAV_ITEMS = [
  { label: "Features", href: `#${SECTION_IDS.features}` },
  { label: "How It Works", href: `#${SECTION_IDS.howItWorks}` },
  { label: "Privacy", href: `#${SECTION_IDS.privacy}` },
  { label: "FAQ", href: `#${SECTION_IDS.faq}` },
] as const;

export const SUPPORTED_SITES = ["Gmail", "Google Chat", "WhatsApp Web", "LinkedIn", "Jira"] as const;
