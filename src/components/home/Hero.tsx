import { ArrowRight, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background" />
      
      <div className="relative container mx-auto px-6 py-32 text-center">
        {/* Profile Picture Circle */}
        <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full border-4 border-primary/30 bg-card flex items-center justify-center overflow-hidden shadow-lg">
          {/* Replace this with your image: <img src={profileImage} alt="Matthew Lin" className="w-full h-full object-cover" /> */}
          <User className="w-16 h-16 md:w-20 md:h-20 text-muted-foreground" />
        </div>
        
        <span className="inline-block text-sm font-medium text-primary mb-4 tracking-wide uppercase">
          Designer & Developer
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
          Matthew Lin
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
          I craft thoughtful digital experiences that blend design and technology. 
          Currently exploring the intersection of creativity and code.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="group">
            <Link to="/portfolio">
              View My Work
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/writing">
              Read My Writing
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
