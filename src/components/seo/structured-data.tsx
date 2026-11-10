import { LINKS, SITE_CONFIG } from "@/config/site";
import { FAQ_ITEMS } from "@/content/faq";

/** No ratings or review counts are included: the extension has no store listing to source them from. */
const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SoftwareApplication",
      name: SITE_CONFIG.name,
      description: SITE_CONFIG.metaDescription,
      url: SITE_CONFIG.url,
      applicationCategory: "BrowserApplication",
      applicationSubCategory: "Writing assistant",
      operatingSystem: `Google Chrome ${SITE_CONFIG.minimumChromeVersion}+`,
      softwareVersion: SITE_CONFIG.extensionVersion,
      inLanguage: "en",
      isAccessibleForFree: true,
      license: "https://opensource.org/licenses/MIT",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      author: { "@type": "Person", name: SITE_CONFIG.author.name, url: SITE_CONFIG.author.url },
      sameAs: [LINKS.repository],
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer.join(" ") },
      })),
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      // Escaping "<" stops any string in the payload from closing the script tag early.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(STRUCTURED_DATA).replace(/</g, "\\u003c") }}
    />
  );
}
