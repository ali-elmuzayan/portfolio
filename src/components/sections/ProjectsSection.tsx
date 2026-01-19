import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, Folder } from "lucide-react";

const featuredProjects = [
  {
    title: "Video Calling Platform",
    description:
      "A full-featured e-commerce platform built with Laravel and React. Includes payment integration, inventory management, real-time notifications, and an admin dashboard.",
    tech: ["NextJS", "React", "MySQL", "Stripe", "Redis"],
    github: "https://github.com",
    external: "https://example.com",
    image: "ecommerce",
  },
  {
    title: "Online Code Editor",
    description:
      "A multi-tenant SaaS application with subscription billing, team management, role-based access control, and comprehensive analytics dashboard.",
    tech: ["Laravel", "Vue.js", "PostgreSQL", "Paddle", "Chart.js"],
    github: "https://github.com",
    external: "https://example.com",
    image: "dashboard",
  },
  {
    title: "Real-time Chat App",
    description:
      "A real-time messaging application with WebSocket integration, file sharing, message encryption, and push notifications.",
    tech: ["NextJs", "Node.js", "Socket.io", "MongoDB", "Redis"],
    github: "https://github.com",
    external: "https://example.com",
    image: "chat",
  },
];

const otherProjects = [
  {
    id: 1,
    title: "API Gateway",
    description:
      "A lightweight API gateway with rate limiting, authentication, and request transformation.",
    tech: ["Laravel", "Redis", "JWT"],
    github: "https://github.com",
  },
  {
    id: 2,
    title: "Task Management",
    description:
      "Kanban-style task management with drag-and-drop, real-time updates, and team collaboration.",
    tech: ["React", "DnD Kit", "Supabase"],
    github: "https://github.com",
    external: "https://example.com",
  },
  {
    id: 3,
    title: "Blog Platform",
    description:
      "A modern blog platform with markdown support, SEO optimization, and headless CMS.",
    tech: ["Next.js", "Sanity", "Tailwind"],
    github: "https://github.com",
  },
  {
    id: 4,
    title: "Invoice Generator",
    description:
      "Automated invoice generation with PDF export, recurring billing, and payment tracking.",
    tech: ["Laravel", "PDF", "Stripe"],
    external: "https://example.com",
  },
  {
    id: 5,
    title: "Analytics Dashboard",
    description:
      "Real-time analytics dashboard with custom charts, data export, and scheduled reports.",
    tech: ["React", "D3.js", "WebSocket"],
    github: "https://github.com",
  },
  {
    id: 6,
    title: "Auth Starter Kit",
    description:
      "Full-featured authentication starter with social login, 2FA, and password reset.",
    tech: ["Laravel Breeze", "React", "Inertia"],
    github: "https://github.com",
  },
];

const tech = ["React", "Next.js", "Laravel"];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="projects" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-16 max-w-4xl mx-auto">
            <span className="font-mono text-primary text-lg">03.</span>
            <h2 className="section-heading">Featured Projects</h2>
            <div className="h-px flex-1 bg-border max-w-xs" />
          </div>

          {/* Featured Projects */}
          <div className="space-y-24 mb-24">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative grid md:grid-cols-12 gap-4 items-center ${
                  index % 2 === 1 ? "md:text-right" : ""
                }`}
              >
                {/* Project Image */}
                <div
                  className={`md:col-span-7 relative group ${
                    index % 2 === 1 ? "md:col-start-6" : ""
                  }`}
                >
                  <div className="relative rounded-lg overflow-hidden aspect-video bg-gradient-to-br from-primary/20 to-primary/5">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Folder className="w-16 h-16 text-primary/50" />
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div
                  className={`md:col-span-6 md:absolute ${
                    index % 2 === 1 ? "md:left-0" : "md:right-0"
                  }`}
                >
                  <p className="font-mono text-primary text-sm mb-2">
                    Featured Project
                  </p>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {project.title}
                  </h3>
                  <div className="glass-card rounded-lg p-6 mb-4">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <ul
                    className={`flex flex-wrap gap-3 mb-4 font-mono text-sm text-muted-foreground ${
                      index % 2 === 1 ? "md:justify-end" : ""
                    }`}
                  >
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                  <div
                    className={`flex gap-4 ${index % 2 === 1 ? "md:justify-end" : ""}`}
                  >
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.external && (
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Other Projects */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-foreground">
              Other Noteworthy Projects
            </h3>
          </div>

          <div className="grid mx-auto max-w-3xl">
            <div className="flex justify-center mb-8 gap-4">
              {tech.map((teckItem, index) => (
                <button
                  key={teckItem}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 px-4 py-2 text-sm font-mono transition-all duration-300 ${
                    activeTab === index
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {teckItem}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {otherProjects
              .filter((project) => project.tech.includes(tech[activeTab]))
              .map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="project-card p-6 flex flex-col h-full group"
                >
                  <div className="flex items-center justify-between mb-6">
                    <Folder className="text-primary" size={40} />
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github size={20} />
                        </a>
                      )}
                      {project.external && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-2 font-mono text-xs text-muted-foreground">
                    {project.tech.map((tech) => (
                      <li key={tech}>{tech}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
