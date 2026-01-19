import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    "Laravel",
    "React",
    "TypeScript",
    "PHP",
    "MySQL",
    "PostgreSQL",
    "Redis",
    "Docker",
    "Git, Github",
  ];

  return (
    <section id="about" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-lg">01.</span>
            <h2 className="section-heading">About Me</h2>
            <div className="h-px flex-1 bg-border max-w-xs" />
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Hello! I'm a passionate full-stack developer based in Egypt. I
                enjoy building scalable web applications, SaaS platforms, and
                modern user interfaces that solve real-world problems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My journey in web development started several years ago, and
                since then I’ve worked on multiple personal and freelance
                projects including POS systems, multi-tenant SaaS platforms,
                dashboards, and RESTful APIs.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                These days, my main focus is building secure, high-performance
                backend systems using Laravel, combined with modern frontend
                experiences using React and Next.js. I care deeply about clean
                architecture, performance optimization, and writing maintainable
                code.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Here are a few technologies I've been working with recently:
              </p>

              <ul className="grid grid-cols-2 gap-2 mt-6">
                {technologies.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="text-primary font-mono">▹</span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative z-10 rounded-lg overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary/30 flex items-center justify-center text-4xl">
                    👨‍💻
                  </div>
                </div>
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-all duration-300 rounded-lg" />
              </div>
              <div className="absolute inset-0 border-2 border-primary rounded-lg translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
