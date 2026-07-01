"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV = [
  { href: "#about", label: "About", index: "01" },
  { href: "#capabilities", label: "Stack", index: "02" },
  { href: "#work", label: "Work", index: "03" },
  { href: "#experience", label: "Experience", index: "04" },
  { href: "#contact", label: "Contact", index: "05" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={cn(
          "flex w-full max-w-5xl items-center justify-between rounded-full border border-line px-4 py-2 transition-all duration-500",
          scrolled
            ? "bg-background/70 backdrop-blur-xl shadow-[0_8px_30px_-12px_oklch(0_0_0/0.5)]"
            : "bg-background/30 backdrop-blur-md",
        )}
      >
        <Link
          href="#top"
          className="group/logo inline-flex items-center gap-2 px-2 focus-ring rounded-full"
          aria-label="Go to top"
        >
          <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-full border border-line-strong bg-surface">
            <span className="font-mono text-[11px] font-semibold tracking-tight">
              AE
            </span>
            <span className="absolute -inset-px rounded-full bg-[radial-gradient(circle_at_30%_20%,oklch(1_0_0/0.18),transparent_60%)]" />
          </span>
          <span className="hidden text-sm font-medium tracking-tight sm:inline">
            Ali Elmuzayn
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground sm:inline">
            / engineer
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground focus-ring"
            >
              <span className="font-mono text-[10px] text-muted-foreground/70 transition-colors group-hover:text-accent">
                {item.index}
              </span>
              <span>{item.label}</span>
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => window.dispatchEvent(new CustomEvent("cmdk:open"))}
            aria-label="Open command palette"
            className="group hidden items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-sm text-muted-foreground transition-all hover:border-foreground/40 hover:text-foreground focus-ring sm:inline-flex"
          >
            <span className="font-mono text-[11px] tracking-[0.16em]">
              Search
            </span>
            <span className="flex items-center gap-0.5">
              <kbd className="rounded border border-line bg-background px-1.5 py-0.5 font-mono text-[10px]">
                ⌘
              </kbd>
              <kbd className="rounded border border-line bg-background px-1.5 py-0.5 font-mono text-[10px]">
                K
              </kbd>
            </span>
          </button>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-3.5 py-1.5 text-sm font-medium transition-all hover:border-foreground/40 hover:bg-surface-elevated focus-ring"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span>Available</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
