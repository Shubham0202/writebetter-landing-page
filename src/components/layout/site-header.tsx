import { Puzzle } from "lucide-react";

import { MobileNav } from "@/components/layout/mobile-nav";
import { ButtonLink } from "@/components/shared/button-link";
import { GithubIcon } from "@/components/shared/github-icon";
import { Logo } from "@/components/shared/logo";
import { INSTALL_HREF, LINKS, NAV_ITEMS } from "@/config/site";

export function SiteHeader() {
  return (
    <header
      id="top"
      className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-md supports-backdrop-filter:bg-background/70"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Logo />

        <nav aria-label="Main" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href={LINKS.repository} variant="ghost" size="lg" className="hidden sm:inline-flex">
            <GithubIcon className="size-4" />
            GitHub
          </ButtonLink>
          <ButtonLink href={INSTALL_HREF} size="lg" className="hidden px-3.5 sm:inline-flex">
            <Puzzle aria-hidden="true" />
            Install Extension
          </ButtonLink>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
