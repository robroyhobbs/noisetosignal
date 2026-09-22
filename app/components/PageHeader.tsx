import Link from "next/link";

interface Crumb {
  href: string;
  label: string;
}

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  lede?: string;
  crumbs?: Crumb[];
  accent?: string;
}

export function PageHeader({ eyebrow, title, lede, crumbs, accent }: PageHeaderProps) {
  return (
    <header style={{ marginBottom: lede ? 8 : 32 }}>
      {crumbs && crumbs.length > 0 && (
        <nav
          aria-label="Breadcrumb"
          style={{
            display: "flex",
            gap: 16,
            flexWrap: "wrap",
            marginBottom: 20,
          }}
        >
          {crumbs.map((c) => (
            <Link key={c.href + c.label} href={c.href} className="quiet-link">
              {c.label}
            </Link>
          ))}
        </nav>
      )}
      {eyebrow && (
        <p
          className="eyebrow"
          style={{
            marginBottom: 10,
            color: accent ?? "var(--text-muted)",
          }}
        >
          {eyebrow}
        </p>
      )}
      <h1 className="page-title">{title}</h1>
      {lede && <p className="page-lede">{lede}</p>}
    </header>
  );
}
