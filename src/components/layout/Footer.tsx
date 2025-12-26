const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Matthew Lin</p>
          <p>Forged in NY</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
