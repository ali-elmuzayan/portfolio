import Reveal from "@/components/effects/Reveal";
import SectionHeader from "@/components/home/SectionHeader";

type Role = {
  period: string;
  company: string;
  title: string;
  body: string;
  stack: string[];
};

const ROLES: Role[] = [
  {
    period: "2024 — Present",
    company: "Independent",
    title: "Frontend Engineer / Consultant",
    body: "Partnering with product teams on design systems, performance, and platform-grade frontend foundations.",
    stack: ["Next.js", "Tailwind v4", "tRPC", "Edge"],
  },
  {
    period: "2022 — 2024",
    company: "Stealth SaaS",
    title: "Senior Frontend Engineer",
    body: "Owned the web platform end-to-end. Shipped a token-driven design system and reduced TTI by 38%.",
    stack: ["React", "TypeScript", "GraphQL", "Storybook"],
  },
  {
    period: "2020 — 2022",
    company: "Agency / Studio",
    title: "Frontend Engineer",
    body: "Built marketing sites, dashboards, and internal tools across a wide spectrum of stacks and constraints.",
    stack: ["Next.js", "Vue", "Node", "Postgres"],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative scroll-mt-24 px-6 py-28 md:py-36"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          index="04"
          eyebrow="Experience"
          title={
            <>
              A through-line of{" "}
              <span className="accent-mono">[ shipping ]</span>.
            </>
          }
          description="Roles across product, platform, and studios — always close to the seams where design and engineering meet."
        />

        <div className="relative mt-14 pl-6 md:pl-10">
          {/* timeline thread */}
          <div
            aria-hidden
            className="absolute left-2 top-2 bottom-2 w-px md:left-4"
            style={{
              background:
                "linear-gradient(to bottom, transparent, oklch(1 0 0 / 0.18) 10%, oklch(1 0 0 / 0.18) 90%, transparent)",
            }}
          />
          <Reveal stagger={130} className="space-y-10">
            {ROLES.map((r) => (
              <article key={r.period + r.company} className="relative">
                <span
                  aria-hidden
                  className="absolute -left-[18px] top-2 h-2.5 w-2.5 rounded-full bg-foreground shadow-[0_0_0_4px_oklch(0.78_0.13_230_/_0.18)] md:-left-[22px]"
                />
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {r.period}
                </p>
                <h3 className="mt-2 text-xl font-semibold tracking-tight md:text-2xl">
                  {r.title}{" "}
                  <span className="text-muted-foreground">· {r.company}</span>
                </h3>
                <p className="mt-2 max-w-2xl text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
                  {r.body}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {r.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-line bg-surface/60 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Experience;
