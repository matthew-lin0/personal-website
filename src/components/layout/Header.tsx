import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="font-serif text-xl font-semibold text-foreground hover:text-primary transition-colors">
          Matthew Lin
        </Link>
        
        <div className="flex items-center gap-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors ${isActive('/') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Home
          </Link>
          <Link 
            to="/portfolio" 
            className={`text-sm font-medium transition-colors ${isActive('/portfolio') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Portfolio
          </Link>
          <Link 
            to="/writing" 
            className={`text-sm font-medium transition-colors ${isActive('/writing') ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
          >
            Writing
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
