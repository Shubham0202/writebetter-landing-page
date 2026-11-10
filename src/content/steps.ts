import { INSTALL_SOURCE, SUPPORTED_SITES, type InstallSource } from "@/config/site";

export type StepIllustration = "install" | "write" | "improve";

export type HowItWorksStep = {
  title: string;
  description: string;
  illustration: StepIllustration;
};

const INSTALL_STEP_DESCRIPTION: Record<InstallSource, string> = {
  chromeWebStore: "Add WriteBetter from the Chrome Web Store and pin it to your toolbar.",
  source:
    "Build it from source and load it in Chrome with Load unpacked. A Chrome Web Store listing is not available yet.",
};

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    title: "Install WriteBetter",
    description: INSTALL_STEP_DESCRIPTION[INSTALL_SOURCE],
    illustration: "install",
  },
  {
    title: "Write as usual",
    description: `Type in ${SUPPORTED_SITES.join(", ")} or a site you add, or paste text into the popup. Mistakes are underlined after a short pause.`,
    illustration: "write",
  },
  {
    title: "Improve with one click",
    description:
      "Accept a suggestion, or press Fix Grammar, Make Polite or Professional in the popup. You see every change first, and Undo puts your text back.",
    illustration: "improve",
  },
];
