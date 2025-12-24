import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ArticleCard from "@/components/writing/ArticleCard";

const articles = [
  {
    title: "The Art of Simplicity in Design",
    excerpt: "Exploring how minimalism and intentional design choices can create more impactful user experiences. Less is often more when it comes to digital products.",
    date: "December 20, 2024",
    slug: "art-of-simplicity",
    readTime: "5 min read"
  },
  {
    title: "Building Design Systems That Scale",
    excerpt: "Lessons learned from creating and maintaining design systems across multiple products and teams. A practical guide to systematic design.",
    date: "December 15, 2024",
    slug: "design-systems-scale",
    readTime: "8 min read"
  },
  {
    title: "On Learning in Public",
    excerpt: "Why sharing your learning journey openly can accelerate growth and build meaningful connections in the creative community.",
    date: "December 10, 2024",
    slug: "learning-in-public",
    readTime: "4 min read"
  },
  {
    title: "The Future of Web Development",
    excerpt: "Thoughts on emerging technologies and how they're shaping the way we build for the web. From AI-assisted coding to new frameworks.",
    date: "December 5, 2024",
    slug: "future-web-dev",
    readTime: "6 min read"
  }
];

const Writing = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24">
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-2xl mb-16">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Writing
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Thoughts on design, technology, and the creative process. 
              I write to learn, share, and connect with others on similar journeys.
            </p>
          </div>
          
          <div className="max-w-2xl">
            {articles.map((article) => (
              <ArticleCard key={article.slug} {...article} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Writing;
