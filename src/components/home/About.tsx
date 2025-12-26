import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="min-h-screen flex items-center py-32 relative"
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto"
          style={{ y, opacity }}
        >
          <motion.span 
            className="text-sm font-medium text-primary mb-4 tracking-wide uppercase block"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About
          </motion.span>
          
          <motion.h2 
            className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            I love building projects and research.
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 text-lg text-muted-foreground leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Currently studying chemistry @ Yale University ('30). I love deep tech.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              When I'm not working on projects, you'll find me writing about almost anything on my <a href="https://thoughts.matthew-lin.com" className="text-primary hover:underline">thoughts blog</a> (currently under construction).
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
