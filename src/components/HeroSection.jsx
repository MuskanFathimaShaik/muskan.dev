import { ArrowDown, Briefcase, MapPin, Sparkles } from "lucide-react";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium opacity-0 animate-fade-in">
            <Sparkles className="h-4 w-4" /> Open to Work
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary ml-3 opacity-0 animate-fade-in-delay-3">
              Shaik
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1">
              Muskan
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              Fathima
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            Creative Frontend Developer with backend insight — expert in React,
            TypeScript & Next.js. I craft dynamic, seamless and responsive web
            experiences.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground opacity-0 animate-fade-in-delay-4">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4" /> Hyderabad, Telangana, India
            </span>
            <span className="hidden sm:inline-block">•</span>
            <span className="inline-flex items-center gap-2">
              <Briefcase className="h-4 w-4" /> 3+ yrs experience
            </span>
          </div>

          <div className="pt-2 opacity-0 animate-fade-in-delay-5 flex items-center justify-center gap-3">
            <a
              href="#projects"
              className="cosmic-button"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-5 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
}

export default HeroSection;
