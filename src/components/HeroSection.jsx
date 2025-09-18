import { ArrowDown, Briefcase, MapPin, Sparkles } from "lucide-react";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="container max-w-6xl sm:max-w-5xl mx-auto text-center z-10">
        <div className="space-y-6 sm:space-y-7 lg:space-y-8">
          <div className="inline-flex items-center  gap-2 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium opacity-0 animate-fade-in">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" /> Open to Work
          </div>
          <h1 className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-tight">
            <span className="opacity-0 animate-fade-in block sm:inline">
              Hi,
            </span>
            <span className="opacity-0 animate-fade-in block sm:inline">
              I'm
            </span>
            <span className="text-primary ml-0 sm:ml-3 opacity-0 animate-fade-in-delay-3 block sm:inline">
              Shaik
            </span>
            <span className="text-gradient ml-0 sm:ml-2 opacity-0 animate-fade-in-delay-1 block sm:inline">
              Muskan
            </span>
            <span className="text-gradient ml-0 sm:ml-2 opacity-0 animate-fade-in-delay-2 block sm:inline">
              Fathima
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground md:max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4 leading-relaxed">
            Creative Frontend Developer with backend insight — expert in React,
            TypeScript & Next.js. I craft dynamic, seamless and responsive web
            experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground opacity-0 animate-fade-in-delay-4">
            <span className="inline-flex items-center gap-1 sm:gap-2">
              <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
              <span className="text-center sm:text-left">
                Hyderabad, Telangana, India
              </span>
            </span>
            <span className="hidden sm:inline-block">•</span>
            <span className="inline-flex items-center gap-1 sm:gap-2">
              <Briefcase className="h-3 w-3 sm:h-4 sm:w-4" />
              <span>3+ yrs experience</span>
            </span>
          </div>

          <div className="pt-2 sm:pt-4 opacity-0 animate-fade-in-delay-5 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#projects"
              className="cosmic-button w-full sm:w-auto text-sm sm:text-base px-6 py-3 sm:px-8 sm:py-4 touch-manipulation"
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
              className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 text-sm sm:text-base touch-manipulation text-center"
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

      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs sm:text-sm text-muted-foreground mb-2">
          {" "}
          Scroll{" "}
        </span>
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
      </div>
    </section>
  );
}

export default HeroSection;
