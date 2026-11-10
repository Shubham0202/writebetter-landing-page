import { ArrowRight, Cloud, HardDrive, KeyRound, Lock, type LucideIcon } from "lucide-react";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { DataFlowList, PermissionList } from "@/components/sections/privacy-details";
import { LINKS, SECTION_IDS } from "@/config/site";
import { LOCAL_PROCESSING, NEVER_WATCHED_FIELDS, STORED_LOCALLY } from "@/content/privacy";

type PrivacyCard = {
  title: string;
  icon: LucideIcon;
  intro: string;
  items: string[];
  footnote?: string;
};

const PRIVACY_CARDS: PrivacyCard[] = [
  {
    title: "Runs on your computer",
    icon: HardDrive,
    intro: "No account, no server of its own, and it keeps working offline.",
    items: LOCAL_PROCESSING,
  },
  {
    title: "Online only if you ask",
    icon: Cloud,
    intro: "Two optional services, both off by default:",
    items: ["LanguageTool's online grammar check", "AI rewriting with your own API key"],
    footnote: "When you use one, that service's own privacy policy applies.",
  },
  {
    title: "Stored only on this device",
    icon: Lock,
    intro: "Your text is never stored. Chrome's local extension storage keeps:",
    items: STORED_LOCALLY,
    footnote: NEVER_WATCHED_FIELDS,
  },
];

export function Privacy() {
  return (
    <Section
      id={SECTION_IDS.privacy}
      eyebrow="Privacy and security"
      title="Your words stay on your computer"
      description="WriteBetter has no server of its own, no account, and no analytics or tracking. Here is exactly what runs where."
      className="border-y border-border bg-card"
    >
      <div className="flex flex-col gap-14">
        <ul className="grid gap-5 lg:grid-cols-3">
          {PRIVACY_CARDS.map((card, index) => (
            <Reveal as="li" key={card.title} delay={index * 0.06} className="rounded-2xl border border-border bg-background p-6 shadow-sm">
              <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-primary">
                <card.icon aria-hidden="true" className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{card.intro}</p>
              <ul className="mt-3 flex list-disc flex-col gap-1.5 pl-5 text-sm marker:text-primary/60">
                {card.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {card.footnote && <p className="mt-4 text-xs leading-relaxed text-muted-foreground">{card.footnote}</p>}
            </Reveal>
          ))}
        </ul>

        <Reveal className="flex flex-col gap-4 rounded-2xl border border-primary/20 bg-secondary/60 p-6 sm:flex-row sm:items-start">
          <KeyRound aria-hidden="true" className="size-6 shrink-0 text-primary" />
          <div>
            <h3 className="font-semibold">Do I need an AI API key?</h3>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              No. Grammar, spelling, tense and the Polite and Professional rewrites all work without one. A key from
              Google Gemini, Groq or OpenRouter is only needed for the optional Rewrite with AI feature. It stays on
              your computer, is sent only to the provider you chose, and Remove key deletes it.
            </p>
          </div>
        </Reveal>

        <DataFlowList />
        <PermissionList />

        <a
          href={LINKS.privacyPolicy}
          className="inline-flex w-fit items-center gap-1.5 self-center rounded-md text-sm font-semibold text-primary outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          Read the full privacy and permissions details on GitHub
          <ArrowRight aria-hidden="true" className="size-4" />
        </a>
      </div>
    </Section>
  );
}
