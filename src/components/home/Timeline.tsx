import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, GraduationCap } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  type: "work" | "education";
}

const timelineData: TimelineItem[] = [
  {
    year: "2024",
    title: "Senior Product Designer",
    company: "Tech Company",
    description: "Leading design initiatives for enterprise products, focusing on user experience and design systems.",
    type: "work"
  },
  {
    year: "2022",
    title: "Product Designer",
    company: "Startup Inc",
    description: "Designed and shipped consumer-facing mobile applications with millions of users.",
    type: "work"
  },
  {
    year: "2020",
    title: "UX Designer",
    company: "Agency Co",
    description: "Collaborated with diverse clients across industries to deliver impactful design solutions.",
    type: "work"
  },
  {
    year: "2018",
    title: "Bachelor's in Design",
    company: "University",
    description: "Studied interaction design, visual communication, and human-computer interaction.",
    type: "education"
  }
];

const TimelineCard = ({ item, index }: { item: TimelineItem; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "center center"]
  });

  const x = useTransform(
    scrollYProgress, 
    [0, 1], 
    [index % 2 === 0 ? -100 : 100, 0]
  );
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <motion.div
      ref={cardRef}
      className="relative grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center"
      style={{ opacity }}
    >
      {/* Left content (even items) */}
      <motion.div 
        className={`${index % 2 === 0 ? 'md:text-right' : 'md:order-3'} ${index % 2 !== 0 ? 'md:text-left' : ''}`}
        style={{ x: index % 2 === 0 ? x : undefined, scale }}
      >
        {index % 2 === 0 && (
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2 md:justify-end">
              {item.type === "work" ? (
                <Briefcase className="w-4 h-4 text-primary" />
              ) : (
                <GraduationCap className="w-4 h-4 text-primary" />
              )}
              <span className="text-sm font-medium text-primary">{item.year}</span>
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{item.company}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
          </div>
        )}
      </motion.div>

      {/* Center line and dot */}
      <div className="hidden md:flex flex-col items-center">
        <motion.div 
          className="w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg shadow-primary/30"
          style={{ scale }}
        />
        {index < timelineData.length - 1 && (
          <div className="w-px h-32 bg-border" />
        )}
      </div>

      {/* Right content (odd items) */}
      <motion.div 
        className={`${index % 2 !== 0 ? '' : 'md:order-3'}`}
        style={{ x: index % 2 !== 0 ? x : undefined, scale }}
      >
        {index % 2 !== 0 && (
          <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              {item.type === "work" ? (
                <Briefcase className="w-4 h-4 text-primary" />
              ) : (
                <GraduationCap className="w-4 h-4 text-primary" />
              )}
              <span className="text-sm font-medium text-primary">{item.year}</span>
            </div>
            <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground mb-3">{item.company}</p>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

const Timeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section 
      ref={containerRef}
      id="experience" 
      className="min-h-screen py-32 relative"
    >
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sm font-medium text-primary mb-4 tracking-wide uppercase block">
            Experience
          </span>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            My journey so far.
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-0">
          {timelineData.map((item, index) => (
            <TimelineCard key={item.year + item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;
