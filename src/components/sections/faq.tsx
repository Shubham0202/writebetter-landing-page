import { ArrowRight } from "lucide-react";

import { Section } from "@/components/shared/section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { LINKS, SECTION_IDS } from "@/config/site";
import { FAQ_ITEMS } from "@/content/faq";

export function Faq() {
  return (
    <Section
      id={SECTION_IDS.faq}
      eyebrow="FAQ"
      title="Frequently asked questions"
      className="border-y border-border bg-card"
    >
      {/* hiddenUntilFound keeps closed answers in the HTML, so browser find-in-page and crawlers can reach them. */}
      <Accordion multiple hiddenUntilFound className="mx-auto max-w-3xl rounded-2xl border border-border bg-background px-5 sm:px-8">
        {FAQ_ITEMS.map((item) => (
          <AccordionItem key={item.id} value={item.id}>
            <AccordionTrigger className="py-5 text-base font-semibold hover:no-underline">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="pb-5 text-[0.95rem] leading-relaxed text-muted-foreground">
              {item.answer.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <p className="mt-8 text-center text-sm text-muted-foreground">
        Still have a question?{" "}
        <a
          href={LINKS.issues}
          className="inline-flex items-center gap-1 rounded font-semibold text-primary outline-none hover:underline focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          Ask on GitHub
          <ArrowRight aria-hidden="true" className="size-3.5" />
        </a>
      </p>
    </Section>
  );
}
