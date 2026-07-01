"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";

type RevealProps = {
  as?: keyof React.JSX.IntrinsicElements;
  delay?: number;
  className?: string;
  children: React.ReactNode;
  /** Stagger child elements by N ms each. Applies inline --reveal-delay to direct children. */
  stagger?: number;
  /** Trigger threshold. */
  threshold?: number;
};

/**
 * IntersectionObserver-driven reveal primitive.
 * Adds [data-reveal="in"] when the element enters the viewport.
 * GPU-friendly (opacity + translate only). Honors prefers-reduced-motion via CSS.
 */
const Reveal = ({
  as: Tag = "div",
  delay = 0,
  className,
  children,
  stagger,
  threshold = 0.15,
}: RevealProps) => {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (stagger) {
      Array.from(el.children).forEach((child, i) => {
        (child as HTMLElement).setAttribute("data-reveal", "");
        (child as HTMLElement).style.setProperty(
          "--reveal-delay",
          `${delay + i * stagger}ms`,
        );
      });
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (stagger) {
              Array.from(el.children).forEach((child) => {
                (child as HTMLElement).setAttribute("data-reveal", "in");
              });
            } else {
              el.setAttribute("data-reveal", "in");
            }
            io.unobserve(el);
          }
        });
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay, stagger, threshold]);

  const baseProps = {
    ref: ref as React.Ref<HTMLElement>,
    className: cn(className),
    style: stagger ? undefined : ({ ["--reveal-delay" as string]: `${delay}ms` } as React.CSSProperties),
    ...(stagger ? {} : { "data-reveal": "" }),
  };

  return React.createElement(Tag as string, baseProps, children);
};

export default Reveal;
