import Reveal from "@/components/effects/Reveal";
import MagneticButton from "@/components/effects/MagneticButton";
import SectionHeader from "@/components/home/SectionHeader";
import { GithubIcon, LinkedinIcon, XIcon } from "@/components/icons/Brands";
import { Mail, MoveUpRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="border-gradient relative overflow-hidden rounded-3xl bg-surface/40 p-10 backdrop-blur md:p-16">
          {/* ambient glow */}
          <div
            aria-hidden
            className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full opacity-50 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, oklch(0.78 0.13 230 / 0.22), transparent 70%)",
            }}
          />
          <div className="relative grid grid-cols-1 items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <SectionHeader
                index="05"
                eyebrow="Contact"
                title={
                  <>
                    Have a problem worth{" "}
                    <span className="accent-mono">[ solving ]</span> carefully?
                  </>
                }
                description="I take on a small number of engagements each quarter — full-product builds, frontend platform work, and design-system foundations."
              />

              <Reveal
                delay={300}
                className="mt-10 flex flex-wrap items-center gap-3"
              >
                <MagneticButton href="mailto:hello@example.com">
                  <Mail className="h-4 w-4" />
                  hello@example.com
                  <MoveUpRight className="h-4 w-4" />
                </MagneticButton>
                <a
                  href="/cv.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-5 py-3 text-sm font-medium text-foreground/90 backdrop-blur transition-all hover:border-foreground/40 hover:bg-surface focus-ring"
                >
                  Download CV
                </a>
              </Reveal>
            </div>

            <Reveal delay={200} className="lg:col-span-4">
              <div className="rounded-2xl border border-line bg-background/40 p-5 backdrop-blur">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {"// channels"}
                </p>
                <ul className="mt-4 space-y-2">
                  {[
                    {
                      Icon: GithubIcon,
                      label: "GitHub",
                      href: "https://github.com",
                    },
                    {
                      Icon: LinkedinIcon,
                      label: "LinkedIn",
                      href: "https://linkedin.com",
                    },
                    {
                      Icon: XIcon,
                      label: "X / Twitter",
                      href: "https://x.com",
                    },
                  ].map(({ Icon, label, href }) => (
                    <li key={label}>
                      <a
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="group flex items-center justify-between rounded-lg border border-transparent px-3 py-2 text-sm text-muted-foreground transition-all hover:border-line hover:bg-surface/60 hover:text-foreground focus-ring"
                      >
                        <span className="inline-flex items-center gap-3">
                          <Icon className="h-4 w-4" />
                          {label}
                        </span>
                        <MoveUpRight className="h-4 w-4 -translate-x-1 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
