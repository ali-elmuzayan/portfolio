import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Code2,
  Database,
  Server,
  Cloud,
  GitBranch,
} from "lucide-react";

const skillCategories = [
  {
    title: "Frontend",
    icon: Code2,
    skills: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Next.js",
      "Vue.js",
      "Redux",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: ["Laravel", "PHP", "Node.js", "REST APIs", "GraphQL", "WebSockets"],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Elasticsearch",
      "Prisma",
    ],
  },
  // {
  //   title: "Mobile",
  //   icon: Smartphone,
  //   skills: ["React Native", "PWA", "Capacitor", "Responsive Design"],
  // },
  {
    title: "DevOps",
    icon: Cloud,
    skills: ["Docker", "AWS", "CI/CD", "Nginx", "Linux", "Kubernetes"],
  },
  {
    title: "Tools",
    icon: GitBranch,
    skills: ["Git", "GitHub Actions", "Jira", "Figma", "VS Code", "PHPStorm"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 md:py-32 bg-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12 max-w-4xl mx-auto">
            <span className="font-mono text-primary text-lg">02.</span>
            <h2 className="section-heading">Skills & Technologies</h2>
            <div className="h-px flex-1 bg-border max-w-xs" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
