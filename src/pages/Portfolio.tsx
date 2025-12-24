import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectCard from "@/components/portfolio/ProjectCard";

const projects = [
  {
    title: "Design System",
    description: "A comprehensive design system built for scalability and consistency across multiple products.",
    tags: ["Design", "React", "Figma"],
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
    link: "#"
  },
  {
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with seamless checkout and inventory management.",
    tags: ["React", "Node.js", "Stripe"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    link: "#"
  },
  {
    title: "Mobile App",
    description: "Cross-platform mobile application for fitness tracking and personal wellness.",
    tags: ["React Native", "TypeScript", "Firebase"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    link: "#"
  },
  {
    title: "Dashboard Analytics",
    description: "Real-time analytics dashboard with interactive charts and data visualization.",
    tags: ["Vue.js", "D3.js", "Python"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    link: "#"
  }
];

const Portfolio = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-2xl mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Portfolio
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A collection of projects I've worked on, ranging from design systems to full-stack applications. 
              Each project represents a unique challenge and learning opportunity.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
