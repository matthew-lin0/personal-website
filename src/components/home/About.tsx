const About = () => {
  return (
    <section className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-6">
            I'm a creative professional passionate about building meaningful digital products. 
            With a background in design and development, I bring a unique perspective to every project.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            When I'm not working on projects, you'll find me writing about technology, design, 
            and the creative process. I believe in sharing knowledge and learning in public.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
