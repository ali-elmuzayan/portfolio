import Reveal from "@/components/effects/Reveal";
import MagneticButton from "@/components/effects/MagneticButton";
import { ArrowDown, MoveUpRight } from "lucide-react";

const STACK = [
  "TypeScript",
  "React 19",
  "Next.js",
  "Tailwind v4",
  "Node",
  "Postgres",
  "tRPC",
  "Edge Runtime",
  "WebGL",
  "Design Systems",
];

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-svh items-center px-6 pt-28 pb-24"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-12">
        {/* LEFT: typographic statement */}
        <div className="lg:col-span-7">
          <Reveal className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Available · Q3 / 2025
            </span>
          </Reveal>

          <h1 className="text-balance text-4xl font-semibold leading-[1.05] tracking-[-0.02em] md:text-5xl lg:text-6xl">
            <Reveal as="span" className="block">
              Building software
            </Reveal>
            <Reveal as="span" delay={120} className="block">
              that feels <span className="accent-mono">[ quiet ]</span>
            </Reveal>
            <Reveal
              as="span"
              delay={240}
              className="block text-muted-foreground"
            >
              and <span className="accent-mono">[ durable ]</span>.
            </Reveal>
          </h1>

          <Reveal
            delay={360}
            className="mt-7 max-w-xl text-pretty text-[15px] leading-[1.7] text-muted-foreground md:text-base"
          >
            I’m <span className="text-foreground">Ali Elmuzayn</span> — a
            frontend engineer focused on systems thinking, performance, and the
            small details that turn products into experiences. I design with
            structure and ship with intent.
          </Reveal>

          <Reveal
            delay={480}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="#work">
              View selected work
              <MoveUpRight className="h-4 w-4" />
            </MagneticButton>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-5 py-3 text-sm font-medium text-foreground/90 backdrop-blur transition-all hover:border-foreground/40 hover:bg-surface focus-ring"
            >
              Start a conversation
              <span className="font-mono text-[11px] text-muted-foreground transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </Reveal>
        </div>

        {/* RIGHT: identity / system card */}
        <Reveal delay={300} className="lg:col-span-5">
          <div className="card-flat relative overflow-hidden p-5">
            <div>
              {/* window chrome */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  identity.ts
                </span>
              </div>

              <div className="mt-5 font-mono text-[13px] leading-7">
                <p className="text-muted-foreground">
                  <span className="text-foreground/80">const</span>{" "}
                  <span className="text-accent">engineer</span>{" "}
                  <span className="text-foreground/80">=</span> {"{"}
                </p>
                <p className="pl-5 text-muted-foreground">
                  {"role: "}
                  <span className="text-foreground">
                    {'"Frontend / Systems"'}
                  </span>
                  ,
                </p>
                <p className="pl-5 text-muted-foreground">
                  {"focus: "}
                  <span className="text-foreground">
                    {'["product", "performance", "DX"]'}
                  </span>
                  ,
                </p>
                <p className="pl-5 text-muted-foreground">
                  shipped: <span className="text-foreground">true</span>,
                </p>
                <p className="pl-5 text-muted-foreground">
                  caffeine: <span className="text-foreground">Infinity</span>
                  <span className="ml-0.5 inline-block h-4 w-1.5 translate-y-0.5 bg-foreground animate-blink" />
                </p>
                <p className="text-muted-foreground">{"};"}</p>
              </div>

              {/* metrics */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                {[
                  { k: "uptime", v: "99.98%" },
                  { k: "p95", v: "84ms" },
                  { k: "cls", v: "0.01" },
                ].map((m) => (
                  <div
                    key={m.k}
                    className="rounded-lg border border-line bg-surface/40 p-3"
                  >
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      {m.k}
                    </p>
                    <p className="mt-1 font-mono text-sm text-foreground">
                      {m.v}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* marquee stack */}
      <div className="pointer-events-none absolute inset-x-0 bottom-8 z-0 flex flex-col items-center gap-3">
        <div className="hairline w-3/4 max-w-3xl" />
        <div className="relative w-full max-w-5xl overflow-hidden">
          <div className="flex w-max gap-10 animate-marquee will-change-transform">
            {[...STACK, ...STACK].map((s, i) => (
              <span
                key={`${s}-${i}`}
                className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground/70"
              >
                {s}
              </span>
            ))}
          </div>
          {/* edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
        <a
          href="#about"
          className="pointer-events-auto mt-2 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground hover:text-foreground"
        >
          Scroll <ArrowDown className="h-3 w-3 animate-float-slow" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
