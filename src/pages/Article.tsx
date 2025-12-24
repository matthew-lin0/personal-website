import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";

const articleContent: Record<string, { title: string; date: string; readTime: string; content: string[] }> = {
  "art-of-simplicity": {
    title: "The Art of Simplicity in Design",
    date: "December 20, 2024",
    readTime: "5 min read",
    content: [
      "In a world increasingly cluttered with information and choices, simplicity in design has become more valuable than ever. The best designs don't just look clean—they feel effortless to use.",
      "Simplicity isn't about removing features or functionality. It's about presenting complexity in an accessible way. Every element should earn its place on the screen through clear purpose and value to the user.",
      "When we strip away the unnecessary, what remains becomes more powerful. White space isn't empty—it's a design element that guides attention and creates breathing room for content to shine.",
      "The path to simplicity requires courage. It means saying no to features that don't serve the core purpose. It means trusting users to understand without over-explaining. It means having confidence in less.",
      "Great design is invisible. When users don't notice the design because everything just works, that's the highest compliment. The best interface is one that gets out of the way and lets people accomplish their goals."
    ]
  },
  "design-systems-scale": {
    title: "Building Design Systems That Scale",
    date: "December 15, 2024",
    readTime: "8 min read",
    content: [
      "Design systems are more than component libraries—they're living documents that capture the shared language between design and development. When built well, they become the foundation for consistent, scalable products.",
      "The key to a successful design system is starting with principles, not patterns. Before defining buttons and inputs, establish the core values that will guide every decision. Is your brand bold or subtle? Playful or serious?",
      "Tokens are the atoms of your design system. Colors, spacing, typography scales—these foundational values should be defined once and referenced everywhere. Changes at this level ripple through the entire system.",
      "Documentation is often the difference between adoption and abandonment. Every component needs clear guidance on when to use it, how to implement it, and common pitfalls to avoid.",
      "A design system is never finished. Plan for evolution from the start. Version your components, deprecate gracefully, and create clear processes for proposing changes.",
      "The true measure of a design system's success isn't completeness—it's adoption. Build what teams actually need, gather feedback continuously, and iterate based on real usage patterns."
    ]
  },
  "learning-in-public": {
    title: "On Learning in Public",
    date: "December 10, 2024",
    readTime: "4 min read",
    content: [
      "The idea of learning in public can feel vulnerable. Sharing work before it's polished, admitting what you don't know, asking questions that might seem basic—it all requires courage.",
      "But the benefits far outweigh the discomfort. When you learn in public, you create a record of your journey. You attract people on similar paths. You accelerate your growth through feedback and connection.",
      "Start small. Share a single insight from something you learned today. Document a problem you solved. Ask a question you've been holding back. The first step is always the hardest.",
      "Remember that everyone started somewhere. The experts you admire were once beginners too. Your 'obvious' insights might be exactly what someone else needs to hear at their stage of learning."
    ]
  },
  "future-web-dev": {
    title: "The Future of Web Development",
    date: "December 5, 2024",
    readTime: "6 min read",
    content: [
      "The web development landscape is evolving rapidly. AI-assisted coding tools are changing how we write code. New frameworks are pushing the boundaries of what's possible in the browser.",
      "Edge computing is bringing server-side logic closer to users than ever before. The line between static and dynamic content continues to blur, enabling new possibilities for performance and personalization.",
      "Component-driven development has won. The debate isn't whether to use components, but how to compose them. Modern frameworks are converging on similar patterns for reactivity and state management.",
      "Accessibility is finally getting the attention it deserves. We're moving from treating it as an afterthought to building inclusive experiences from the ground up. This shift benefits everyone.",
      "The future is progressive. Progressive enhancement, progressive web apps, progressive loading—the common thread is meeting users where they are while pushing boundaries for those who can benefit.",
      "Whatever technologies emerge, the fundamentals remain constant: build for users, prioritize performance, and create experiences that are inclusive and accessible to all."
    ]
  }
};

const Article = () => {
  const { slug } = useParams();
  const article = slug ? articleContent[slug] : null;

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-24 flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-serif text-2xl font-bold text-foreground mb-4">Article not found</h1>
            <Button asChild variant="outline">
              <Link to="/writing">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Writing
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        <article className="container mx-auto px-6 py-16">
          <div className="max-w-2xl mx-auto">
            <Button asChild variant="ghost" className="mb-8 -ml-4">
              <Link to="/writing">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Writing
              </Link>
            </Button>
            
            <header className="mb-12">
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {article.date}
                </span>
                <span>·</span>
                <span>{article.readTime}</span>
              </div>
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight">
                {article.title}
              </h1>
            </header>
            
            <div className="prose prose-lg">
              {article.content.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed mb-6 font-serif">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default Article;
