import { useState } from "react";
import { cn } from "../lib/utils";
import {
  Code,
  Database,
  Settings,
  Globe,
  ChevronRight,
  Sparkles,
  Palette,
  Zap,
  FileText,
  Atom,
  ArrowRight,
  Wind,
  RefreshCw,
  Map,
  Server,
  Boxes,
  Plug,
  Network,
  Mail,
  GitBranch,
  Monitor,
  FileJson,
  Wrench,
  Smartphone,
  Key,
  TreePine,
} from "lucide-react";

const skills = [
  // Frontend
  {
    name: "HTML5",
    level: 95,
    category: "frontend",
    icon: <Code className="h-5 w-5" />,
  },
  {
    name: "CSS/SCSS",
    level: 92,
    category: "frontend",
    icon: <Palette className="h-5 w-5" />,
  },
  {
    name: "JavaScript (ES6+)",
    level: 90,
    category: "frontend",
    icon: <Zap className="h-5 w-5" />,
  },
  {
    name: "TypeScript",
    level: 86,
    category: "frontend",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    name: "React.js",
    level: 90,
    category: "frontend",
    icon: <Atom className="h-5 w-5" />,
  },
  {
    name: "Next.js",
    level: 85,
    category: "frontend",
    icon: <ArrowRight className="h-5 w-5" />,
  },
  {
    name: "Tailwind CSS",
    level: 90,
    category: "frontend",
    icon: <Wind className="h-5 w-5" />,
  },
  {
    name: "Redux Toolkit",
    level: 85,
    category: "frontend",
    icon: <RefreshCw className="h-5 w-5" />,
  },
  {
    name: "React Router",
    level: 88,
    category: "frontend",
    icon: <Map className="h-5 w-5" />,
  },

  // Backend (basic insight only)
  {
    name: "Node.js",
    level: 70,
    category: "backend",
    icon: <Server className="h-5 w-5" />,
  },
  {
    name: "Express.js",
    level: 40,
    category: "backend",
    icon: <Boxes className="h-5 w-5" />,
  },

  // Database
  {
    name: "MongoDB",
    level: 40,
    category: "database",
    icon: <Database className="h-5 w-5" />,
  },
  {
    name: "MySQL",
    level: 50,
    category: "database",
    icon: <Database className="h-5 w-5" />,
  },

  // Tools & Practices
  {
    name: "API Integration",
    level: 88,
    category: "tools",
    icon: <Plug className="h-5 w-5" />,
  },
  {
    name: "REST API",
    level: 85,
    category: "tools",
    icon: <Network className="h-5 w-5" />,
  },
  {
    name: "Postman",
    level: 85,
    category: "tools",
    icon: <Mail className="h-5 w-5" />,
  },
  {
    name: "Git/GitHub",
    level: 95,
    category: "tools",
    icon: <GitBranch className="h-5 w-5" />,
  },
  {
    name: "VS Code",
    level: 95,
    category: "tools",
    icon: <Monitor className="h-5 w-5" />,
  },
  {
    name: "JSON",
    level: 92,
    category: "tools",
    icon: <FileJson className="h-5 w-5" />,
  },
  {
    name: "CRUD Operations",
    level: 90,
    category: "tools",
    icon: <Wrench className="h-5 w-5" />,
  },
  {
    name: "Responsive Design",
    level: 92,
    category: "tools",
    icon: <Smartphone className="h-5 w-5" />,
  },
  {
    name: "User Authentication",
    level: 82,
    category: "tools",
    icon: <Key className="h-5 w-5" />,
  },
  {
    name: "DOM Manipulation",
    level: 88,
    category: "tools",
    icon: <TreePine className="h-5 w-5" />,
  },
];

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const categories = [
    { id: "all", name: "All Skills", icon: <Sparkles className="h-4 w-4" /> },
    { id: "frontend", name: "Frontend", icon: <Code className="h-4 w-4" /> },
    { id: "backend", name: "Backend", icon: <Server className="h-4 w-4" /> },
    {
      id: "database",
      name: "Database",
      icon: <Database className="h-4 w-4" />,
    },
    { id: "tools", name: "Tools", icon: <Settings className="h-4 w-4" /> },
  ];

  return (
    <section
      id="skills"
      className="py-16 sm:py-20 md:py-24 lg:py-28 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-48 sm:h-72 bg-gradient-to-b from-primary/5 to-transparent"></div>
      <div className="absolute -bottom-20 sm:-bottom-40 -right-20 sm:-right-40 w-60 sm:w-80 h-60 sm:h-80 bg-purple-500/5 rounded-full blur-3xl"></div>

      <div className="container max-w-none sm:max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary text-xs sm:text-sm font-medium mb-4 sm:mb-6">
            <Settings className="h-3 w-3 sm:h-4 sm:w-4" /> Technical Expertise
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mt-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 leading-tight">
            My <span className="text-primary">Technical</span> Skills
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed px-4 sm:px-0">
            A comprehensive overview of my technical proficiencies and expertise
            across frontend, backend, and development tools
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 sm:mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "flex items-center gap-1 sm:gap-2 px-3 sm:px-4 lg:px-5 py-2 sm:py-3 rounded-xl transition-all duration-300 border text-xs sm:text-sm touch-manipulation",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                  : "bg-card/50 border-border text-foreground hover:bg-card hover:border-primary/30"
              )}
            >
              {category.icon}
              <span className="hidden xs:inline">{category.name}</span>
              <span className="xs:hidden">{category.name.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSkills.map((skill, idx) => (
            <div
              key={idx}
              className="relative group"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div
                className={cn(
                  "bg-gradient-to-br from-card to-card/80 p-4 sm:p-6 rounded-xl border border-border/50 shadow-xs transition-all duration-500 h-full",
                  "hover:shadow-lg hover:border-primary/30 hover:-translate-y-1",
                  hoveredSkill === skill.name ? "ring-2 ring-primary/20" : ""
                )}
              >
                <div className="flex items-start justify-between mb-4 sm:mb-5">
                  <div className="flex-1 min-w-0">
                    <div className="text-xl sm:text-2xl mb-2">{skill.icon}</div>
                    <h3 className="font-semibold text-base sm:text-lg truncate">
                      {skill.name}
                    </h3>
                    <div className="text-xs text-muted-foreground mt-1 uppercase tracking-wide">
                      {skill.category}
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-2">
                    <span className="text-lg sm:text-2xl font-bold text-primary">
                      {skill.level}%
                    </span>
                  </div>
                </div>

                <div className="w-full bg-secondary/50 h-2 sm:h-2.5 rounded-full overflow-hidden mt-2">
                  <div
                    className="bg-gradient-to-r from-primary to-primary/70 h-2 sm:h-2.5 rounded-full origin-left transition-all duration-1000 ease-out"
                    style={{
                      width:
                        hoveredSkill === skill.name ? `${skill.level}%` : "0%",
                      transitionDelay:
                        hoveredSkill === skill.name ? `${idx * 0.05}s` : "0s",
                    }}
                  />
                </div>

                <div className="flex justify-between items-center mt-3 sm:mt-4">
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    Proficiency level
                  </div>
                  <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-xl opacity-0 group-hover:opacity-20 blur-md transition duration-300 group-hover:duration-200 -z-10"></div>
            </div>
          ))}
        </div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-8 sm:py-12">
            <Globe className="h-8 w-8 sm:h-12 sm:w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-lg sm:text-xl font-medium text-muted-foreground">
              No skills found in this category
            </h3>
            <p className="text-muted-foreground/70 mt-2 text-sm sm:text-base">
              Try selecting a different category to view relevant skills
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default SkillsSection;
