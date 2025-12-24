import { motion, useScroll, useTransform } from "framer-motion";

const Header = () => {
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [0, 1]);
  const headerBlur = useTransform(scrollY, [0, 100], [0, 10]);
  
  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 border-b border-border/0"
      style={{ 
        backgroundColor: `hsl(var(--background) / ${headerOpacity})`,
        backdropFilter: `blur(${headerBlur}px)`,
        borderColor: `hsl(var(--border) / ${headerOpacity})`
      }}
    >
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="font-serif text-xl font-semibold text-foreground hover:text-primary transition-colors">
          Matthew Lin
        </a>
        
        <div className="flex items-center gap-8">
          <a 
            href="#about" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            About
          </a>
          <a 
            href="#experience" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Experience
          </a>
          <a 
            href="https://thoughts.matthew-lin.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Thoughts ↗
          </a>
        </div>
      </nav>
    </motion.header>
  );
};

export default Header;
