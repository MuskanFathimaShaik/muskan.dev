import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { MenuIcon, Sparkles, X } from "lucide-react";

const navItems = [
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

  const handleMobileNavClick = (href) => (e) => {
    e.preventDefault();
    const id = href.replace("#", "");
    const target = document.getElementById(id);
    setIsMenuOpen(false);
    if (target) {
      // Update hash for accessibility/history without jump
      if (history.replaceState) {
        history.replaceState(null, "", href);
      } else {
        window.location.hash = href;
      }
      setTimeout(() => {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        target.setAttribute("tabindex", "-1");
        target.focus({ preventScroll: true });
      }, 50);
    }
  };

  // Effect 1: Underline with gradient that expands from center
  const renderNavItem = (item, idx) => (
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

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 sm:py-4 md:py-5 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-3 sm:py-4 md:py-5"
      )}
    >
      {/* Scroll Progress Bar */}
      <div className="absolute left-0 top-0 h-0.5 w-full bg-transparent">
        <div
          className="h-0.5 bg-primary transition-[width] duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a
          className="text-lg sm:text-xl font-bold text-primary flex items-center group"
          href="#hero"
        >
          <div className="relative flex items-center">
            <div className="absolute -inset-2 bg-primary/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-1 sm:gap-2">
              <div className="relative">
                <Sparkles
                  className="h-5 w-5 sm:h-6 sm:w-6 text-primary"
                  fill="currentColor"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-500 rounded-full opacity-70 animate-pulse-slow"></div>
              </div>
              <span className="text-glow text-foreground font-semibold tracking-tight text-sm sm:text-base">
                Muskan
              </span>
            </span>
          </div>
        </a>

        {/* Desktop Nav with increased gap */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item, idx) => renderNavItem(item, idx))}
        </div>

        {/* Mobile Nav Button */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="lg:hidden p-2 sm:p-3 text-foreground z-50 rounded-lg hover:bg-primary/10 transition-colors duration-300 touch-manipulation"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? (
            <X size={20} className="sm:w-6 sm:h-6" />
          ) : (
            <MenuIcon size={20} className="sm:w-6 sm:h-6" />
          )}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          id="mobile-menu"
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md h-[15rem] z-40 flex flex-col items-center justify-start py-4 overflow-y-auto safe-px",
            "transition-all duration-500 ease-in-out lg:hidden",
            isMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-5 pointer-events-none"
          )}
        >
          <div className="flex flex-col w-full max-w-md pt-4  sm:space-y-8 text-sm sm:text-2xl items-center">
            {navItems.map((item, idx) => (
              <a
                href={item.href}
                key={idx}
                className="w-full text-center font-semibold text-foreground/90 hover:text-primary transition-colors duration-300 py-2 sm:py-3 relative group touch-manipulation"
                onClick={handleMobileNavClick(item.href)}
              >
                {item.name}
                <span className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-primary to-purple-500 transition-all duration-300 group-hover:w-24"></span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
