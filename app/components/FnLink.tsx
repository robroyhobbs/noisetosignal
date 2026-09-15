"use client";

import { track } from "@vercel/analytics";

export function FnLink({
  href,
  slug,
  className,
  style,
  children,
}: {
  href: string;
  slug: string;
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className={className}
      style={style}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("fn_click", { slug })}
    >
      {children}
    </a>
  );
}
