import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { cn } from "../lib/utils";

const projects = [
  {
    id: 1,
    title: "E‑Passport User Verification System",
    description:
      "Digital identity platform built with Next.js, Tailwind CSS, Node.js, Express, PostgreSQL & Prisma. I worked across frontend and backend, unique ID generation, and SQL queries.",
    image: "/projects/project-1.jpeg",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Prisma", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Drag‑and‑Drop Form Builder",
    description:
      "A low-code builder enabling complex form creation with drag-and-drop, reducing development time by ~75% with robust CRUD and role-based controls.",
    image: "/projects/project-2.jpeg",
    tags: ["React", "TypeScript", "Redux", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "ERP Modules (Sales, Purchase, Accounting)",
    description:
      "Contributed to 40+ modules with secure client data handling, role-based access, and clean UI for operational workflows.",
    image: "/projects/project-3.jpeg",
    tags: ["React", "API Integration", "RBAC"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "AI‑Powered Chatbot for Data Entry",
    description:
      "Frontend for an assistant that automates data entry via natural language, coordinating closely with backend services.",
    image: "/projects/project-2.jpeg",
    tags: ["React", "TypeScript", "AI", "UX"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

function ProjectSection() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      {/* Background elements */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-blue-500/10 text-primary text-sm font-medium mb-6">
            <Github className="h-4 w-4" /> Featured Work
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project was carefully
            crafted with attention to detail, performance, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-gradient-to-br from-card to-card/80 rounded-xl overflow-hidden shadow-xs border border-border/50 transition-all duration-500 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      className="p-2 rounded-lg bg-secondary text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                      title="Live Demo"
                    >
                      <ExternalLink size={18} />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 rounded-lg bg-secondary text-foreground/80 hover:text-primary hover:bg-primary/10 transition-all duration-300"
                      title="View Code"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                  <ArrowRight className="h-4 w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-blue-500 rounded-xl opacity-0 group-hover:opacity-20 blur-md transition duration-300 group-hover:duration-200 -z-10"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/MuskanFathimaShaik?tab=repositories"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:gap-3"
          >
            View All Projects on GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectSection;
