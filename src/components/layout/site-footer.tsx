import { Logo } from "@/components/shared/logo";
import { LINKS, NAV_ITEMS, SITE_CONFIG } from "@/config/site";

const FOOTER_COLUMNS = [
  { title: "Product", links: NAV_ITEMS },
  {
    title: "Project",
    links: [
      { label: "GitHub", href: LINKS.repository },
      { label: "Privacy Policy", href: LINKS.privacyPolicy },
      { label: "Contact", href: LINKS.issues },
      { label: "License", href: LINKS.license },
    ],
  },
] as const;

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[2fr_1fr_1fr] lg:px-8">
        <div className="max-w-sm">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            An open-source Chrome extension that fixes grammar and helps your messages sound polite and
            professional. Built-in checks run on your computer.
          </p>
        </div>

        {FOOTER_COLUMNS.map((column) => (
          <nav key={column.title} aria-label={column.title}>
            <h2 className="text-sm font-semibold">{column.title}</h2>
            <ul className="mt-4 flex flex-col gap-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="rounded text-sm text-muted-foreground transition-colors outline-none hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-6 text-sm text-muted-foreground sm:px-6 lg:px-8">
          © {SITE_CONFIG.copyrightYear} {SITE_CONFIG.author.name}. Released under the MIT License.
        </p>
      </div>
    </footer>
  );
}
