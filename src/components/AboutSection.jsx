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
    <section id="about" className="py-28 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" /> About Me
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Crafting Digital Experiences with Precision & Innovation
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Bridging creative design with technical excellence to build seamless
            web applications
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                {/* <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div> */}
                Creative Frontend Developer with Backend Insight
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm a Frontend Developer with three years of experience
                specializing in creating dynamic web applications. Proficient in
                React, Next.js, and TypeScript, I excel at building engaging
                user interfaces that deliver exceptional user experiences.
              </p>
            </div>

            <div>
              <p className="text-muted-foreground leading-relaxed">
                I work with HTML5, CSS, and JavaScript (ES6+), utilizing
                Tailwind CSS and Bootstrap for responsive styling. With
                expertise in Redux for state management, I ensure smooth data
                flow in applications. My foundational understanding of backend
                technologies like Node.js and MongoDB allows me to quickly
                identify and resolve errors, helping to keep projects on track
                and moving efficiently.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
              <div className="p-5 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 border border-border/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <Cpu className="w-4 h-4 text-primary" />
                  <p className="text-sm font-medium text-foreground">
                    Primary Stack
                  </p>
                </div>
                <p className="font-medium text-sm mt-1">
                  React, Next.js, TypeScript, Tailwind, Redux
                </p>
              </div>
              <div className="p-5 rounded-xl bg-gradient-to-br from-secondary/30 to-secondary/10 border border-border/50 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-2">
                  <GitBranch className="w-4 h-4 text-primary" />
                  <p className="text-sm font-medium text-foreground">
                    Tools & Methods
                  </p>
                </div>
                <p className="font-medium text-sm mt-1">
                  Git/GitHub, Jira, REST APIs, Agile/Scrum
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center sm:flex-row gap-4 pt-6">
              <a
                href="#contact"
                className="group cosmic-button flex items-center justify-center gap-2"
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
                className="px-6 py-3 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 flex items-center justify-center gap-2 group"
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

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2">
                    Frontend Engineering
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Building responsive, high-performance applications with
                    React, Next.js, TypeScript, and modern CSS frameworks.
                    Focused on clean code architecture, component reusability,
                    and optimal user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                  <Palette className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2">
                    UI/UX Implementation
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Translating design concepts into functional, accessible
                    interfaces with attention to detail. Creating intuitive
                    enterprise UIs including dashboards, form builders, and
                    role-based systems with focus on usability and aesthetics.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover group">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2">
                    Collaboration & Problem Solving
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
