"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="font-mono text-primary mb-4">04. What's Next?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-12">
            I'm currently looking for new opportunities and my inbox is always
            open. Whether you have a question, a project idea, or just want to
            say hi, I'll do my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail size={18} className="text-primary" />
              <span>ali.elmuzayn@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={18} className="text-primary" />
              <span>El-minia, Egypt.</span>
            </div>
          </div>

          <motion.a
            target="_blank"
            href="mailto:ali.elmuzayn@gmail.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-md border border-primary text-primary hover:bg-primary/10 transition-all duration-300 font-medium"
          >
            <Send size={18} />
            Say Hello
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
