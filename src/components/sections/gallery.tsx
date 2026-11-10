import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "cn";

import { Reveal } from "@/components/shared/reveal";
import { Section } from "@/components/shared/section";
import { StatusBadge } from "@/components/shared/status-badge";
import { SECTION_IDS } from "@/config/site";
import type { FeatureStatus } from "@/content/features";
import { GALLERY_ITEMS, type GalleryItem } from "@/content/gallery";

const PLACEHOLDER_TEXT: Record<FeatureStatus, string> = {
  available: "Screenshot coming soon",
  optional: "Screenshot coming soon",
  planned: "Planned feature",
};

const frameClass = "relative block aspect-[4/3] overflow-hidden rounded-xl border border-border bg-muted";

function GalleryMedia({ item }: { item: GalleryItem }) {
  if (!item.image) {
    return (
      <div className={cn(frameClass, "flex flex-col items-center justify-center gap-2 border-dashed text-muted-foreground")}>
        <ImageIcon aria-hidden="true" className="size-8 opacity-60" />
        <span className="text-sm font-medium">{PLACEHOLDER_TEXT[item.status]}</span>
      </div>
    );
  }

  return (
    <a
      href={item.image.src.src}
      className={cn(frameClass, "group outline-none focus-visible:ring-3 focus-visible:ring-ring/50")}
    >
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes="(min-width: 1024px) 352px, (min-width: 640px) 50vw, 100vw"
        className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
      />
      <span className="sr-only">Open full-size image: {item.title}</span>
    </a>
  );
}

export function Gallery() {
  return (
    <Section
      id={SECTION_IDS.gallery}
      eyebrow="Product preview"
      title="See WriteBetter at work"
      description="Screenshots and a short demo from the extension, taken in Gmail and ChatGPT."
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {GALLERY_ITEMS.map((item, index) => (
          <Reveal as="li" key={item.id} delay={(index % 3) * 0.06} className="flex flex-col">
            <GalleryMedia item={item} />
            <div className="mt-4 flex items-center gap-2">
              <h3 className="font-semibold">{item.title}</h3>
              {item.status === "planned" && <StatusBadge status={item.status} />}
            </div>
            <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.caption}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
