import {
  Briefcase,
  Code,
  User,
  Sparkles,
  ChevronRight,
  Cpu,
  Palette,
  GitBranch,
} from "lucide-react";

function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 md:py-24 lg:py-28  sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-1/4 -left-10 sm:-left-20 w-48 sm:w-72 h-48 sm:h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-10 sm:-right-20 w-48 sm:w-72 h-48 sm:h-72 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container max-w-none sm:max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" /> About Me
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 leading-tight">
            Crafting Digital Experiences with Precision & Innovation
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-4 sm:px-0">
            Bridging creative design with technical excellence to build seamless
            web applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                Creative Frontend Developer with Backend Insight
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                I'm a Frontend Developer with three years of experience
                specializing in creating dynamic web applications. Proficient in
                React, Next.js, and TypeScript, I excel at building engaging
                user interfaces that deliver exceptional user experiences.
              </p>
            </div>

            <div>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                I work with HTML5, CSS, and JavaScript (ES6+), utilizing
                Tailwind CSS and Bootstrap for responsive styling. With
                expertise in Redux for state management, I ensure smooth data
                flow in applications. My foundational understanding of backend
                technologies like Node.js and MongoDB allows me to quickly
                identify and resolve errors, helping to keep projects on track
                and moving efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-4">
              <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 border border-border/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-4 h-4 text-primary" />
                  <p className="text-xs sm:text-sm font-medium text-foreground">
                    Primary Stack
                  </p>
                </div>
                <p className="font-medium text-xs sm:text-sm mt-1">
                  React, Next.js, TypeScript, Tailwind, Redux
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 border border-border/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch className="w-4 h-4 text-primary" />
                  <p className="text-xs sm:text-sm font-medium text-foreground">
                    Tools & Methods
                  </p>
                </div>
                <p className="font-medium text-xs sm:text-sm mt-1">
                  Git/GitHub, Jira, REST APIs, Agile/Scrum
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-4 sm:pt-6">
              <a
                href="#contact"
                className="group cosmic-button flex items-center justify-center gap-2 w-full sm:w-auto text-sm sm:text-base px-6 py-3 touch-manipulation"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get In Touch
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#projects"
                className="w-full sm:w-auto px-6 py-3 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2 group text-sm sm:text-base touch-manipulation"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View Projects
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6">
            <div className="gradient-border p-4 sm:p-6 card-hover group">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Code className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">
                    Frontend Engineering
                  </h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    Building responsive, high-performance applications with
                    React, Next.js, TypeScript, and modern CSS frameworks.
                    Focused on clean code architecture, component reusability,
                    and optimal user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-4 sm:p-6 card-hover group">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Palette className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">
                    UI/UX Implementation
                  </h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    Translating design concepts into functional, accessible
                    interfaces with attention to detail. Creating intuitive
                    enterprise UIs including dashboards, form builders, and
                    role-based systems with focus on usability and aesthetics.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-4 sm:p-6 card-hover group">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2 sm:p-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base sm:text-lg mb-2">
                    Collaboration & Problem Solving
                  </h4>
                  <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                    Working effectively with cross-functional teams using Git,
                    Jira, and Agile methodologies. Leveraging backend knowledge
                    to troubleshoot issues efficiently and deliver end-to-end
                    solutions that meet business requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
