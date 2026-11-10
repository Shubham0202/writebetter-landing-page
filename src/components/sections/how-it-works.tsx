import { StepIllustration } from "@/components/mockups/step-illustrations";
import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { SECTION_IDS } from "@/config/site";
import { HOW_IT_WORKS_STEPS } from "@/content/steps";

export function HowItWorks() {
  return (
    <Section
      id={SECTION_IDS.howItWorks}
      eyebrow="How it works"
      title="Better writing in three steps"
      description="No account and no sign-up. Suggestions appear right where you already write."
      className="border-y border-border bg-card"
    >
      <ol className="grid gap-6 md:grid-cols-3">
        {HOW_IT_WORKS_STEPS.map((step, index) => (
          <Reveal as="li" key={step.title} delay={index * 0.08} className="flex flex-col">
            <StepIllustration name={step.illustration} />
            <div className="mt-6 flex items-center gap-3">
              <span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                {index + 1}
              </span>
              <h3 className="text-lg font-semibold">{step.title}</h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
