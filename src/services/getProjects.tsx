import { ProjectAPIResponse } from "@/types/projects";

export function getProjects(): ProjectAPIResponse {
  return {
    data: [
      {
        id: 1,
        index: "01",
        name: "Helios",
        tagline: "Realtime analytics workbench",
        description:
          "A multi-tenant analytics workbench with sub-100ms query feedback. Designed a streaming-first ingestion pipeline and a virtualized UI capable of rendering 250k rows without dropping a frame.",
        year: "2025",
        role: "Lead Frontend",
        stack: ["Next.js", "TypeScript", "tRPC", "ClickHouse", "Tailwind", "Zustand"],
        highlights: [
          "Edge-cached SSR with stale-while-revalidate boundaries",
          "Custom virtualizer + worker-side aggregation",
          "Type-safe schema contracts shared across boundaries",
        ],
        impact: [
          { label: "TTI", value: "1.2s" },
          { label: "Rows", value: "250k" },
          { label: "p95", value: "84ms" },
        ],
        href: "#",
        repo: "#",
      },
      {
        id: 2,
        index: "02",
        name: "Lumen",
        tagline: "Design system + component primitives",
        description:
          "A composable, accessible design system with token-driven theming. Shipped 60+ primitives, an MDX docs site, and Storybook play tests covering keyboard, focus, and ARIA flows.",
        year: "2024",
        role: "Architect",
        stack: ["React", "Radix", "Tailwind v4", "MDX", "Storybook"],
        highlights: [
          "Token pipeline: Figma → JSON → CSS vars",
          "Headless primitives with controlled/uncontrolled parity",
          "Bundle: 14kb gzip core, 0 runtime CSS-in-JS",
        ],
        impact: [
          { label: "Components", value: "60+" },
          { label: "A11y", value: "AA" },
          { label: "Bundle", value: "14kb" },
        ],
        href: "#",
      },
      {
        id: 3,
        index: "03",
        name: "Atlas",
        tagline: "Distributed task orchestrator UI",
        description:
          "Operator console for a distributed task graph. Live DAG visualization, retry semantics, and structured logs with millisecond-level timeline scrubbing.",
        year: "2024",
        role: "Frontend Engineer",
        stack: ["React", "WebGL", "WebSockets", "Go API", "Postgres"],
        highlights: [
          "WebGL DAG renderer with LOD culling",
          "Backpressure-aware log streaming",
          "Deterministic state machine for retries",
        ],
        impact: [
          { label: "Nodes", value: "10k+" },
          { label: "Latency", value: "<50ms" },
          { label: "Uptime", value: "99.95%" },
        ],
        href: "#",
      },
    ],
  };
}
