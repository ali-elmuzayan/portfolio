import Reveal from "@/components/effects/Reveal";
import SectionHeader from "@/components/home/SectionHeader";
import ProjectCard from "../ProjectCard";
import { getProjects } from "@/services/getProjects";
import { ProjectData } from "@/types/projects";
import { ArrowUpRight } from "lucide-react";

const Projects = () => {
  const projects: ProjectData[] = getProjects().data;

  return (
    <section id="work" className="relative scroll-mt-24 px-6 py-28 md:py-36">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <SectionHeader
            index="03"
            eyebrow="Selected work"
            title={
              <>
                Case studies in{" "}
                <span className="accent-mono">[ structure ]</span>.
              </>
            }
            description="A small, intentional set. Each project shipped to production with measured impact."
          />
          <Reveal delay={200}>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground focus-ring"
            >
              Want the full archive?
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </Reveal>
        </div>

        <Reveal stagger={120} className="mt-12 grid grid-cols-1 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </Reveal>
      </div>
    </section>
  );
};

export default Projects;
