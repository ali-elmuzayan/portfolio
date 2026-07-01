import Reveal from "@/components/effects/Reveal";
import SectionHeader from "@/components/home/SectionHeader";

const STATS = [
  { k: "Years building", v: "6+" },
  { k: "Products shipped", v: "20+" },
  { k: "Avg. Lighthouse", v: "98" },
  { k: "Coffee/day", v: "∞" },
];

const PRINCIPLES = [
  {
    title: "Systems thinking",
    body: "I model the whole graph before tweaking a node — boundaries, contracts, failure modes, and where complexity should live.",
  },
  {
    title: "Quiet interfaces",
    body: "Calm typography, deliberate motion, and zero noise. The product should fade and the user’s task should lead.",
  },
  {
    title: "Performance as feel",
    body: "Latency is UX. I treat budgets, paint, and input delay like first-class product specs, not afterthoughts.",
  },
];

const AboutMe = () => {
  return (
    <section id="about" className="relative scroll-mt-24 px-6 py-28 md:py-36">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-14 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <SectionHeader
            index="01"
            eyebrow="About"
            title={
              <>
                A frontend engineer with a{" "}
                <span className="accent-mono">[ structural ]</span> mindset.
              </>
            }
            description="I gravitate toward problems that sit between product and platform — design systems, performance, observability, and the seams where teams meet code."
          />
        </div>

        <div className="lg:col-span-7 lg:pt-14">
          <Reveal
            stagger={90}
            className="grid grid-cols-1 gap-4 md:grid-cols-3"
          >
            {PRINCIPLES.map((p) => (
              <article key={p.title} className="card-flat group relative p-6">
                <h3 className="text-sm font-semibold tracking-tight">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.body}
                </p>
              </article>
            ))}
          </Reveal>

          <Reveal
            stagger={80}
            className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4"
          >
            {STATS.map((s) => (
              <div key={s.k} className="bg-surface/60 p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {s.k}
                </p>
                <p className="mt-2 text-2xl font-semibold tracking-tight">
                  {s.v}
                </p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
