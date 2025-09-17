import {
  Building2,
  Calendar,
  MapPin,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function ExperienceItem({
  role,
  company,
  type,
  location,
  period,
  summary,
  bullets,
  index,
}) {
  return (
    <div className="relative pl-8 md:pl-0 pb-12 group">
      {/* Timeline connector */}
      <div className="absolute left-0 top-2 bottom-0 w-0.5 bg-primary/20 group-last:bg-transparent"></div>

      {/* Timeline dot */}
      <div className="absolute left-0 top-2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary ring-4 ring-background group-hover:scale-125 transition-transform duration-300 z-10"></div>

      <div className="ml-8 md:ml-0">
        <div className="gradient-border p-6 rounded-xl bg-card/50 backdrop-blur-sm card-hover group-hover:shadow-lg transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
              {role}
            </h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground bg-primary/10 px-3 py-1 rounded-full">
              <Calendar size={14} />
              <span>{period}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 text-muted-foreground mb-4">
            <span className="flex items-center gap-1.5 bg-secondary/30 px-3 py-1 rounded-full text-sm">
              <Building2 size={14} />
              {company}
            </span>
            <span className="bg-secondary/30 px-3 py-1 rounded-full text-sm">
              {type}
            </span>
            <span className="flex items-center gap-1.5 bg-secondary/30 px-3 py-1 rounded-full text-sm">
              <MapPin size={14} />
              {location}
            </span>
          </div>

          {summary && (
            <p className="mt-4 text-muted-foreground leading-relaxed border-l-2 border-primary/20 pl-4">
              {summary}
            </p>
          )}

          {bullets?.length ? (
            <ul className="mt-5 space-y-3">
              {bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          ) : null}

          <div className="mt-6 pt-4 border-t border-border/50 flex items-center text-primary text-sm font-medium">
            <span className="flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
              View achievements <ArrowRight size={16} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      role: "Software Engineer",
      company: "Trangala Innovations",
      type: "Full-time",
      location: "Hyderabad, Telangana",
      period: "Feb 2023 – Apr 2025",
      summary:
        "Worked across frontend and backend to deliver high‑impact projects including a digital identity platform.",
      bullets: [
        "Built the E‑Passport User Verification System using Next.js, Tailwind CSS, Node.js, Express, PostgreSQL & Prisma.",
        "Implemented unique user ID generation and authored SQL queries for critical workflows.",
        "Owned UI development to ensure a seamless, responsive user experience.",
      ],
    },
    {
      role: "React Developer",
      company: "Kenroz",
      type: "Full-time",
      location: "Hyderabad, Telangana (On-site/Remote)",
      period: "Jun 2025 – Present",
      summary:
        "Building applications that streamline workflows, improve efficiency, and keep client data secure.",
      bullets: [
        "Developed a drag‑and‑drop form builder cutting build time by ~75% with robust CRUD operations.",
        "Contributed to 40+ ERP modules (sales, purchasing, accounting) with role‑based access controls.",
        "Delivered frontend for an AI‑powered chatbot automating data entry via natural language processing.",
      ],
    },
  ];

  return (
    <section id="experience" className="py-28 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4" /> Professional Journey
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mt-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
            Work <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            My professional path through innovative companies and impactful
            projects
          </p>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/30 to-primary/10 hidden md:block"></div>

          <div className="grid grid-cols-1 gap-2">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} index={index} {...exp} />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors duration-300 group"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View My Projects
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
