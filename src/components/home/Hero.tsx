import { motion, useScroll, useTransform } from "framer-motion";
import { User, ArrowDown } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  return (
    <section 
      ref={containerRef}
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <motion.div 
        className="relative container mx-auto px-6 py-32 text-center"
        style={{ y, opacity, scale }}
      >
        {/* Profile Picture Circle */}
        <motion.div 
          className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full border-4 border-primary/30 bg-card flex items-center justify-center overflow-hidden shadow-lg shadow-primary/10"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <User className="w-16 h-16 md:w-20 md:h-20 text-muted-foreground" />
        </motion.div>
        
        <motion.span 
          className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Researcher and Generalist.
        </motion.span>
        
        <motion.h1 
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Matthew Lin
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          Student. Researcher. Builder. Deep tech enthusiast.
        </motion.p>

        <motion.a
          href="#about"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <span className="text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
