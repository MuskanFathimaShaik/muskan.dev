import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { MenuIcon, Sparkles, X } from "lucide-react";

const navItems = [
  {
    name: "Home",
    href: "#hero",
  },
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Skills",
    href: "#skills",
  },
  {
    name: "Experience",
    href: "#experience",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeHoverEffect, setActiveHoverEffect] = useState(1); // 1, 2, or 3 for different effects

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Effect 1: Underline with gradient that expands from center
  const renderEffect1 = (item, idx) => (
    <a
      href={item.href}
      key={idx}
      className="relative group text-foreground/80 hover:text-primary transition-colors duration-300 px-2 py-1"
      onClick={(e) => {
        e.preventDefault();
        const id = item.href.replace("#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {item.name}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full"></span>
    </a>
  );

  // Effect 2: Background highlight with rounded corners
  const renderEffect2 = (item, idx) => (
    <a
      href={item.href}
      key={idx}
      className="relative group text-foreground/80 hover:text-primary transition-colors duration-300 px-3 py-1 rounded-lg"
      onClick={(e) => {
        e.preventDefault();
        const id = item.href.replace("#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {item.name}
      <span className="absolute inset-0 bg-primary/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></span>
    </a>
  );

  // Effect 3: Dual underline with sparkle effect
  const renderEffect3 = (item, idx) => (
    <a
      href={item.href}
      key={idx}
      className="relative group text-foreground/80 hover:text-primary transition-colors duration-300 px-2 py-1"
      onClick={(e) => {
        e.preventDefault();
        const id = item.href.replace("#", "");
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {item.name}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
      <span className="absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-purple-400 transition-all duration-500 group-hover:w-4 group-hover:left-1/2 group-hover:-translate-x-1/2"></span>
      <Sparkles className="absolute -top-2 -right-3 h-3 w-3 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </a>
  );

  // Choose which effect to render
  const renderNavItem = (item, idx) => {
    switch (activeHoverEffect) {
      case 1:
        return renderEffect1(item, idx);
      case 2:
        return renderEffect2(item, idx);
      case 3:
        return renderEffect3(item, idx);
      default:
        return renderEffect1(item, idx);
    }
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-5 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute left-0 top-0 h-0.5 w-full bg-transparent">
        <div
          className="h-0.5 bg-primary transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center group"
          href="#hero"
        >
          <div className="relative flex items-center">
            <div className="absolute -inset-2 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2">
              <div className="relative">
                <Sparkles
                  className="h-6 w-6 text-primary"
                  fill="currentColor"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-70 animate-pulse-slow"></div>
              </div>
              <span className="text-glow text-foreground font-semibold tracking-tight">
                Muskan
              </span>
              <span className="text-foreground/70 font-normal">
                | Portfolio
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4">
          {navItems.map((item, idx) => renderNavItem(item, idx))}
        </div>

        {/* Mobile Nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-2xl items-center">
            {navItems.map((item, idx) => (
              <a
                href={item.href}
                key={idx}
                className="text-foreground/90 hover:text-primary transition-colors duration-300 py-2 relative group"
                onClick={(e) => {
                  e.preventDefault();
                  const id = item.href.replace("#", "");
                  document
                    .getElementById(id)
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="#"
                className="px-4 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                onClick={(e) => e.preventDefault()}
              >
                Resume
              </a>
              <a
                href="#contact"
                className="cosmic-button"
                onClick={(e) => {
                  e.preventDefault();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
