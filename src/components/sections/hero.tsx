import { Check, Puzzle } from "lucide-react";

import { PopupMockup } from "@/components/mockups/popup-mockup";
import { ButtonLink } from "@/components/shared/button-link";
import { GithubIcon } from "@/components/shared/github-icon";
import { LogoMark } from "@/components/shared/logo";
import { INSTALL_HREF, INSTALL_NOTE, INSTALL_SOURCE, LINKS } from "@/config/site";

const HIGHLIGHTS = ["Open source, MIT license", "No account needed", "Built-in checks work offline", "AI is optional"];

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(60%_50%_at_50%_0%,color-mix(in_oklch,var(--primary)_13%,transparent),transparent)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] mask-[radial-gradient(ellipse_70%_55%_at_50%_0%,black,transparent)] bg-size-[56px_56px] opacity-60"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 pt-14 pb-20 sm:px-6 sm:pt-20 lg:grid-cols-[1.05fr_1fr] lg:px-8 lg:pt-24 lg:pb-28">
        <div className="text-center lg:text-left">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-sm font-medium text-muted-foreground shadow-xs">
            <LogoMark className="size-4" />
            Your personal writing assistant for Chrome.
          </p>
          <h1
            id="hero-title"
            className="mt-6 text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            Your Writing, <span className="text-primary">Just Better.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-pretty text-muted-foreground lg:mx-0">
            Write confidently with a Chrome extension that helps you fix grammar, improve tone, and communicate
            professionally.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">
            <ButtonLink href={INSTALL_HREF} size="xl" className="shadow-lg shadow-primary/25">
              <Puzzle aria-hidden="true" />
              Add to Chrome
            </ButtonLink>
            <ButtonLink href={LINKS.repository} variant="outline" size="xl">
              <GithubIcon className="size-4" />
              Explore on GitHub
            </ButtonLink>
          </div>
          <p className="mt-3 text-sm text-muted-foreground">{INSTALL_NOTE[INSTALL_SOURCE]}</p>

          <ul className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground lg:justify-start">
            {HIGHLIGHTS.map((highlight) => (
              <li key={highlight} className="flex items-center gap-1.5">
                <Check aria-hidden="true" className="size-4 text-success" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-in duration-700 fade-in slide-in-from-bottom-4 motion-reduce:animate-none">
          <PopupMockup />
        </div>
      </div>
    </section>
  );
}
