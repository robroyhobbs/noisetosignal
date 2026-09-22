import { Header } from "./Header";
import { Footer } from "./Footer";

interface SiteShellProps {
  weekOf: string;
  ratio: number;
  children: React.ReactNode;
}

/** Shared chrome: calm header + footer. Sections own their own .shell width. */
export function SiteShell({ weekOf, ratio, children }: SiteShellProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "var(--bg)",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header weekOf={weekOf} ratio={ratio} />
      <div style={{ flex: 1 }}>{children}</div>
      <Footer />
    </div>
  );
}
