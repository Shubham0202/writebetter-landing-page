import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { BeforeAfter } from "@/components/sections/before-after";
import { Faq } from "@/components/sections/faq";
import { Features } from "@/components/sections/features";
import { FinalCta } from "@/components/sections/final-cta";
import { Gallery } from "@/components/sections/gallery";
import { Hero } from "@/components/sections/hero";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Privacy } from "@/components/sections/privacy";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { StructuredData } from "@/components/seo/structured-data";

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <SiteHeader />
      <main id="main" className="flex-1">
        <Hero />
        <ProblemSolution />
        <Features />
        <HowItWorks />
        <BeforeAfter />
        <Privacy />
        <Gallery />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
