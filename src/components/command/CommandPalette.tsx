"use client";

import { Dialog, VisuallyHidden } from "radix-ui";
import {
  ArrowUpRight,
  Briefcase,
  Folder,
  Home,
  Layers,
  Mail,
  Search,
  Sparkles,
  User,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons/Brands";

type CommandItem = {
  id: string;
  label: string;
  group: "Navigate" | "Links" | "Actions";
  hint?: string;
  icon: React.ComponentType<{ className?: string }>;
  perform: () => void;
};

const isMac =
  typeof navigator !== "undefined" &&
  /Mac|iPhone|iPad/i.test(navigator.platform);

const useCommands = (close: () => void): CommandItem[] => {
  const go = useCallback(
    (hash: string) => () => {
      close();
      // Defer to next frame so dialog animation doesn't fight the scroll.
      requestAnimationFrame(() => {
        const el = document.querySelector(hash);
        if (el) (el as HTMLElement).scrollIntoView({ behavior: "smooth" });
        else window.location.hash = hash;
      });
    },
    [close],
  );

  const open = useCallback(
    (url: string) => () => {
      close();
      window.open(url, "_blank", "noopener,noreferrer");
    },
    [close],
  );

  return useMemo<CommandItem[]>(
    () => [
      {
        id: "nav-top",
        label: "Go to top",
        group: "Navigate",
        icon: Home,
        perform: go("#top"),
        hint: "↩",
      },
      {
        id: "nav-about",
        label: "About",
        group: "Navigate",
        icon: User,
        perform: go("#about"),
      },
      {
        id: "nav-stack",
        label: "Capabilities",
        group: "Navigate",
        icon: Layers,
        perform: go("#capabilities"),
      },
      {
        id: "nav-work",
        label: "Selected work",
        group: "Navigate",
        icon: Folder,
        perform: go("#work"),
      },
      {
        id: "nav-exp",
        label: "Experience",
        group: "Navigate",
        icon: Briefcase,
        perform: go("#experience"),
      },
      {
        id: "nav-contact",
        label: "Contact",
        group: "Navigate",
        icon: Mail,
        perform: go("#contact"),
      },

      {
        id: "link-gh",
        label: "Open GitHub",
        group: "Links",
        icon: GithubIcon,
        perform: open("https://github.com"),
      },
      {
        id: "link-li",
        label: "Open LinkedIn",
        group: "Links",
        icon: LinkedinIcon,
        perform: open("https://linkedin.com"),
      },
      {
        id: "link-x",
        label: "Open X / Twitter",
        group: "Links",
        icon: XIcon,
        perform: open("https://x.com"),
      },

      {
        id: "act-email",
        label: "Send an email",
        group: "Actions",
        icon: Mail,
        perform: () => {
          close();
          window.location.href = "mailto:hello@example.com";
        },
      },
      {
        id: "act-cv",
        label: "Download CV",
        group: "Actions",
        icon: ArrowUpRight,
        perform: () => {
          close();
          const a = document.createElement("a");
          a.href = "/cv.pdf";
          a.download = "";
          a.click();
        },
      },
      {
        id: "act-copy",
        label: "Copy email address",
        group: "Actions",
        icon: Sparkles,
        perform: async () => {
          try {
            await navigator.clipboard?.writeText("hello@example.com");
          } catch {
            /* ignore */
          }
          close();
        },
      },
    ],
    [go, open, close],
  );
};

const CommandPalette = () => {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const close = useCallback(() => setOpen(false), []);
  const commands = useCommands(close);

  const handleOpenChange = useCallback((next: boolean) => {
    setOpen(next);
    if (next) {
      setQuery("");
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, []);

  // Global ⌘K / Ctrl-K hotkey + "/" shortcut.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const mod = e.metaKey || e.ctrlKey;
      if (mod && e.key.toLowerCase() === "k") {
        e.preventDefault();
        handleOpenChange(!open);
      } else if (
        e.key === "/" &&
        !open &&
        !(e.target instanceof HTMLInputElement) &&
        !(e.target instanceof HTMLTextAreaElement)
      ) {
        e.preventDefault();
        handleOpenChange(true);
      }
    };
    const onOpen = () => handleOpenChange(true);
    window.addEventListener("keydown", onKey);
    window.addEventListener("cmdk:open", onOpen);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("cmdk:open", onOpen);
    };
  }, [open, handleOpenChange]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) =>
      `${c.label} ${c.group}`.toLowerCase().includes(q),
    );
  }, [commands, query]);

  // Group while preserving order.
  const grouped = useMemo(() => {
    const map = new Map<CommandItem["group"], CommandItem[]>();
    filtered.forEach((c) => {
      const arr = map.get(c.group) ?? [];
      arr.push(c);
      map.set(c.group, arr);
    });
    return Array.from(map.entries());
  }, [filtered]);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[active]?.perform();
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[80] bg-background/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=closed]:animate-out data-[state=closed]:fade-out-0" />
        <Dialog.Content
          aria-describedby={undefined}
          className={cn(
            "fixed left-1/2 top-[18vh] z-[81] w-[min(92vw,640px)] -translate-x-1/2",
            "border-gradient overflow-hidden rounded-2xl bg-surface/80 backdrop-blur-xl",
            "shadow-[0_30px_80px_-20px_oklch(0_0_0/0.6)]",
            "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95 data-[state=open]:slide-in-from-top-2",
            "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          )}
        >
          <VisuallyHidden.Root>
            <Dialog.Title>Command palette</Dialog.Title>
          </VisuallyHidden.Root>

          <div className="flex items-center gap-3 border-b border-line px-4 py-3">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setActive(0);
              }}
              onKeyDown={onKeyDown}
              placeholder="Jump to a section, link, or action…"
              className="flex-1 bg-transparent text-sm text-foreground placeholder:text-muted-foreground/70 focus:outline-none"
            />
            <kbd className="rounded-md border border-line bg-surface px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
              ESC
            </kbd>
          </div>

          <div className="max-h-[52vh] overflow-y-auto p-2">
            {grouped.length === 0 ? (
              <div className="px-3 py-8 text-center text-sm text-muted-foreground">
                No matches.
              </div>
            ) : (
              grouped.map(([group, items]) => (
                <div key={group} className="px-1 py-1.5">
                  <p className="px-2 pb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {group}
                  </p>
                  <ul>
                    {items.map((item) => {
                      const idx = filtered.indexOf(item);
                      const isActive = idx === active;
                      const Icon = item.icon;
                      return (
                        <li key={item.id}>
                          <button
                            type="button"
                            onMouseEnter={() => setActive(idx)}
                            onClick={() => item.perform()}
                            className={cn(
                              "group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                              isActive
                                ? "bg-surface-elevated text-foreground"
                                : "text-muted-foreground hover:text-foreground",
                            )}
                          >
                            <span
                              className={cn(
                                "inline-flex h-7 w-7 items-center justify-center rounded-md border border-line bg-surface transition-colors",
                                isActive && "border-foreground/30",
                              )}
                            >
                              <Icon className="h-3.5 w-3.5" />
                            </span>
                            <span className="flex-1">{item.label}</span>
                            {item.hint ? (
                              <kbd className="font-mono text-[10px] text-muted-foreground">
                                {item.hint}
                              </kbd>
                            ) : null}
                            <ArrowUpRight
                              className={cn(
                                "h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all",
                                isActive && "translate-x-0 opacity-100",
                              )}
                            />
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))
            )}
          </div>

          <div className="flex items-center justify-between gap-3 border-t border-line bg-background/40 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <span className="flex items-center gap-2">
              <kbd className="rounded border border-line bg-surface px-1.5 py-0.5">
                ↑↓
              </kbd>
              navigate
              <kbd className="ml-3 rounded border border-line bg-surface px-1.5 py-0.5">
                ↩
              </kbd>
              select
            </span>
            <span className="flex items-center gap-1">
              <kbd className="rounded border border-line bg-surface px-1.5 py-0.5">
                {isMac ? "⌘" : "Ctrl"}
              </kbd>
              <kbd className="rounded border border-line bg-surface px-1.5 py-0.5">
                K
              </kbd>
            </span>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default CommandPalette;
