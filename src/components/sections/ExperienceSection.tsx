import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const experiences = [
  {
    company: "TechCorp Inc.",
    title: "Senior Full Stack Developer",
    period: "2022 — Present",
    description: [
      "Lead development of enterprise-scale Laravel applications serving 100k+ daily users",
      "Architected and implemented microservices infrastructure reducing deployment time by 60%",
      "Mentored junior developers and conducted code reviews to maintain high code quality",
      "Implemented CI/CD pipelines and established testing best practices across the team",
    ],
  },
  {
    company: "Digital Agency Co.",
    title: "Full Stack Developer",
    period: "2020 — 2022",
    description: [
      "Developed and maintained 15+ client projects using Laravel and React ecosystems",
      "Built real-time features using WebSockets and optimized database queries for performance",
      "Collaborated with designers to implement pixel-perfect, responsive user interfaces",
      "Integrated third-party APIs including payment gateways and CRM systems",
    ],
  },
  {
    company: "StartupXYZ",
    title: "Junior Developer",
    period: "2018 — 2020",
    description: [
      "Contributed to the development of a SaaS platform from MVP to product-market fit",
      "Implemented user authentication, authorization, and role-based access control",
      "Worked closely with the product team to translate requirements into technical solutions",
      "Participated in agile ceremonies and contributed to sprint planning and retrospectives",
    ],
  },
  {
    company: "Freelance",
    title: "Web Developer",
    period: "2017 — 2018",
    description: [
      "Delivered 20+ websites and web applications for small businesses and startups",
      "Managed end-to-end project lifecycle from requirements gathering to deployment",
      "Built custom WordPress themes and plugins for content management needs",
      "Established long-term client relationships through quality delivery and support",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 md:py-32 bg-card/50" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary text-lg">04.</span>
            <h2 className="section-heading">Where I've Worked</h2>
            <div className="h-px flex-1 bg-border max-w-xs" />
          </div>

          <div className="flex flex-col md:flex-row gap-4 md:gap-0">
            {/* Tab List */}
            <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-3 text-sm font-mono text-left whitespace-nowrap transition-all duration-300 ${
                    activeTab === index
                      ? "text-primary bg-primary/10 md:border-l-2 md:border-primary md:-ml-px border-b-2 md:border-b-0 border-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="md:pl-8 pt-4 md:pt-0 min-h-[320px]"
            >
              <h3 className="text-xl font-medium text-foreground mb-1">
                {experiences[activeTab].title}{" "}
                <span className="text-primary">
                  @ {experiences[activeTab].company}
                </span>
              </h3>
              <p className="font-mono text-sm text-muted-foreground mb-6">
                {experiences[activeTab].period}
              </p>
              <ul className="space-y-3">
                {experiences[activeTab].description.map((item, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-muted-foreground text-sm leading-relaxed"
                  >
                    <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
