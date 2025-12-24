import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  readTime: string;
}

const ArticleCard = ({ title, excerpt, date, slug, readTime }: ArticleCardProps) => {
  return (
    <article className="group border-b border-border py-8 first:pt-0 last:border-0">
      <Link to={`/writing/${slug}`} className="block">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-4 h-4" />
            {date}
          </span>
          <span>·</span>
          <span>{readTime}</span>
        </div>
        
        <h2 className="font-serif text-2xl font-semibold text-foreground group-hover:text-primary transition-colors mb-3">
          {title}
        </h2>
        
        <p className="text-muted-foreground leading-relaxed mb-4">
          {excerpt}
        </p>
        
        <span className="inline-flex items-center text-sm font-medium text-primary group-hover:gap-2 transition-all">
          Read more
          <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
        </span>
      </Link>
    </article>
  );
};

export default ArticleCard;
