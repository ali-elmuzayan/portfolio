import { ProjectData } from "@/types/projects";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project }: { project: ProjectData }) => {
  return (
    <article className="card-flat group relative overflow-hidden">
      {/* Top hairline accent */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, oklch(1 0 0 / 0.2) 30%, oklch(1 0 0 / 0.2) 70%, transparent)",
        }}
      />

      <div className="grid grid-cols-1 md:grid-cols-12">
        {/* LEFT — meta column */}
        <div className="border-b border-line p-6 md:col-span-4 md:border-b-0 md:border-r md:p-7">
          <div className="flex items-baseline justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {project.index}
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {project.year}
            </span>
          </div>

          <h3 className="mt-6 text-2xl font-semibold tracking-[-0.01em]">
            {project.name}
          </h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {project.tagline}
          </p>

          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Role
          </p>
          <p className="mt-1 text-sm text-foreground/90">{project.role}</p>

          {project.href ? (
            <a
              href={project.href}
              aria-label={`Open ${project.name}`}
              className="mt-7 inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent focus-ring"
            >
              <span className="border-b border-line-strong pb-0.5">
                View project
              </span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          ) : null}
        </div>

        {/* RIGHT — content column */}
        <div className="p-6 md:col-span-8 md:p-7">
          <p className="text-[15px] leading-[1.7] text-muted-foreground">
            {project.description}
          </p>

          <ul className="mt-6 grid gap-2 text-sm text-foreground/80">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span className="mt-2.5 h-px w-3 shrink-0 bg-line-strong" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {project.impact ? (
            <div className="mt-7 grid grid-cols-3 gap-px overflow-hidden rounded-md border border-line bg-line">
              {project.impact.map((m) => (
                <div key={m.label} className="bg-background/60 px-4 py-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {m.label}
                  </p>
                  <p className="mt-1 font-mono text-base text-foreground">
                    {m.value}
                  </p>
                </div>
              ))}
            </div>
          ) : null}

          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
            {project.stack.map((t, i) => (
              <span key={t} className="inline-flex items-center gap-3">
                {t}
                {i < project.stack.length - 1 ? (
                  <span aria-hidden className="opacity-40">·</span>
                ) : null}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
