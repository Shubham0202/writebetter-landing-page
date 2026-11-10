"use client";

import { useState } from "react";
import { Menu, Puzzle } from "lucide-react";

import { ButtonLink } from "@/components/shared/button-link";
import { GithubIcon } from "@/components/shared/github-icon";
import { LogoMark } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { INSTALL_HREF, LINKS, NAV_ITEMS, SITE_CONFIG } from "@/config/site";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger render={<Button variant="ghost" size="icon-lg" className="md:hidden" />}>
        <Menu className="size-5" />
        <span className="sr-only">Open menu</span>
      </SheetTrigger>
      <SheetContent side="right" className="w-[85%] gap-0 p-0">
        <div className="flex items-center gap-2 border-b border-border px-5 py-4">
          <LogoMark className="size-6" />
          <SheetTitle className="font-semibold">{SITE_CONFIG.name}</SheetTitle>
        </div>
        <SheetDescription className="sr-only">Site navigation</SheetDescription>
        <nav aria-label="Mobile" className="px-3 py-4">
          <ul className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className="block rounded-lg px-3 py-3 text-base font-medium outline-none hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto flex flex-col gap-2 border-t border-border p-5">
          <ButtonLink href={INSTALL_HREF} size="xl" onClick={closeMenu}>
            <Puzzle aria-hidden="true" />
            Install Extension
          </ButtonLink>
          <ButtonLink href={LINKS.repository} variant="outline" size="xl" onClick={closeMenu}>
            <GithubIcon className="size-4" />
            View on GitHub
          </ButtonLink>
        </div>
      </SheetContent>
    </Sheet>
  );
}
