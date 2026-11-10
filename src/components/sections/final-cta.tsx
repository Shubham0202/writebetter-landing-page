import { Puzzle } from "lucide-react";

import { ButtonLink } from "@/components/shared/button-link";
import { GithubIcon } from "@/components/shared/github-icon";
import { Reveal } from "@/components/shared/reveal";
import { INSTALL_HREF, INSTALL_NOTE, INSTALL_SOURCE, LINKS } from "@/config/site";

export function FinalCta() {
  return (
    <section aria-labelledby="final-cta-title" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="relative isolate overflow-hidden rounded-3xl bg-foreground px-6 py-16 text-center text-primary-foreground sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 bg-[radial-gradient(50%_70%_at_50%_0%,color-mix(in_oklch,var(--primary)_45%,transparent),transparent)]"
          />
          <h2 id="final-cta-title" className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Make Every Message Count.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-pretty text-primary-foreground/75">
            Start writing clearer, more polite, and more professional messages today.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <ButtonLink href={INSTALL_HREF} size="xl" className="bg-background text-foreground hover:bg-background/90">
              <Puzzle aria-hidden="true" />
              Install WriteBetter
            </ButtonLink>
            <ButtonLink
              href={LINKS.repository}
              variant="outline"
              size="xl"
              className="border-primary-foreground/25 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
            >
              <GithubIcon className="size-4" />
              View Source Code
            </ButtonLink>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/65">{INSTALL_NOTE[INSTALL_SOURCE]}</p>
        </Reveal>
      </div>
    </section>
  );
}
