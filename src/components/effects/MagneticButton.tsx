"use client";

import { cn } from "@/lib/utils";
import React, { useRef } from "react";

type MagneticButtonProps = React.ComponentProps<"a"> & {
  strength?: number;
};

/**
 * Pointer-tracked translate. Uses transform on the inner span only — no layout reflow.
 */
const MagneticButton = ({
  className,
  children,
  strength = 0.25,
  ...rest
}: MagneticButtonProps) => {
  const wrapRef = useRef<HTMLAnchorElement | null>(null);
  const innerRef = useRef<HTMLSpanElement | null>(null);

  const onMove = (e: React.PointerEvent<HTMLAnchorElement>) => {
    const el = wrapRef.current;
    const inner = innerRef.current;
    if (!el || !inner) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    inner.style.transform = `translate3d(${x * strength}px, ${y * strength}px, 0)`;
  };

  const onLeave = () => {
    const inner = innerRef.current;
    if (inner) inner.style.transform = "translate3d(0,0,0)";
  };

  return (
    <a
      ref={wrapRef}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className={cn(
        "group relative inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium",
        "bg-foreground text-background transition-transform duration-300 ease-out",
        "hover:scale-[1.02] focus-ring",
        className,
      )}
      {...rest}
    >
      <span
        ref={innerRef}
        className="inline-flex items-center gap-2 transition-transform duration-200 ease-out will-change-transform"
      >
        {children}
      </span>
    </a>
  );
};

export default MagneticButton;
