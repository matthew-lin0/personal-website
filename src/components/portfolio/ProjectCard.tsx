import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
}

const ProjectCard = ({ title, description, tags, image, link }: ProjectCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
      <div className="aspect-video overflow-hidden bg-muted">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <CardContent className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          {link && (
            <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          )}
        </div>
        <p className="text-muted-foreground mb-4 line-clamp-2">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="text-xs font-medium px-3 py-1 rounded-full bg-accent text-accent-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
