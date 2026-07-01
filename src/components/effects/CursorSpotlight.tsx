"use client";

import { useEffect } from "react";

/**
 * Tracks cursor position and writes CSS variables --spot-x / --spot-y on <html>.
 * Consumed by `.cursor-spot` overlay. Pointer events disabled. No React rerenders.
 */
const CursorSpotlight = () => {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    let lastX = 0;
    let lastY = 0;

    const onMove = (e: PointerEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          root.style.setProperty("--spot-x", `${lastX}px`);
          root.style.setProperty("--spot-y", `${lastY}px`);
          raf = 0;
        });
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="cursor-spot pointer-events-none fixed inset-0 z-0 transition-opacity duration-500"
    />
  );
};

export default CursorSpotlight;
