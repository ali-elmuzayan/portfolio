import Hero from "@/components/home/sections/Hero";
import AboutMe from "@/components/home/sections/AboutMe";
import Capabilities from "@/components/home/sections/Capabilities";
import Experience from "@/components/home/sections/Experience";
import Projects from "@/components/home/sections/Projects";
import Contact from "@/components/home/sections/Contact";

const Page = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Capabilities />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
};

export default Page;
