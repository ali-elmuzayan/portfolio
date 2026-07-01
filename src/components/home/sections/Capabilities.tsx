import Reveal from "@/components/effects/Reveal";
import SectionHeader from "@/components/home/SectionHeader";
import { Boxes, Cpu, GitBranch, Layers, Network, Sparkles } from "lucide-react";

const CAPABILITIES = [
  {
    icon: Layers,
    title: "Frontend architecture",
    body: "Composable primitives, design tokens, route-level data contracts, and predictable state.",
    tags: ["React 19", "Next.js", "RSC", "Tailwind v4", "Radix"],
    span: "lg:col-span-2",
  },
  {
    icon: Cpu,
    title: "Performance",
    body: "Budgets first. Streaming, edge caching, code-split boundaries, and image discipline.",
    tags: ["Edge", "Suspense", "Web Vitals"],
    span: "lg:col-span-1",
  },
  {
    icon: Boxes,
    title: "Design systems",
    body: "Tokens → primitives → patterns. Accessible by default. Documented like a product.",
    tags: ["A11y", "MDX", "Storybook"],
    span: "lg:col-span-1",
  },
  {
    icon: Network,
    title: "Systems & APIs",
    body: "Strongly-typed boundaries, evolution-safe schemas, and back-pressure-aware streams.",
    tags: ["tRPC", "Zod", "REST", "WS"],
    span: "lg:col-span-1",
  },
  {
    icon: GitBranch,
    title: "DX & tooling",
    body: "CI you trust, codemods you ship, and previews that close the design–engineering loop.",
    tags: ["Turbo", "ESLint", "Codemods"],
    span: "lg:col-span-1",
  },
  {
    icon: Sparkles,
    title: "Product polish",
    body: "Motion with intent, micro-interactions, and the small details users feel before they see.",
    tags: ["Motion", "Micro-UX"],
    span: "lg:col-span-2",
  },
];

const Capabilities = () => {
  return (
    <section
      id="capabilities"
      className="relative scroll-mt-24 px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="02"
          eyebrow="Capabilities"
          title={
            <>
              A small, sharp toolkit — applied with{" "}
              <span className="accent-mono">[ precision ]</span>.
            </>
          }
          description="Depth over breadth. I’d rather master a few primitives than collect logos."
        />

        <Reveal
          stagger={70}
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
        >
          {CAPABILITIES.map((c) => {
            const Icon = c.icon;
            return (
              <article
                key={c.title}
                className={`card-flat group relative overflow-hidden p-6 ${c.span}`}
              >
                <div className="relative">
                  <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-line bg-surface text-foreground/90">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold tracking-tight">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {c.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-line bg-surface/60 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
};

export default Capabilities;
