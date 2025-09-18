import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "../lib/utils";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window === "undefined") return true;
    const stored = localStorage.getItem("theme");
    return stored !== "light";
  });

  useEffect(() => {
    const mode = localStorage.getItem("theme");
    if (mode === "light") {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleThemeFunction = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };
  return (
    <button
      onClick={toggleThemeFunction}
      className={cn(
        // Bottom-right on small screens; top-right from sm+
        "fixed right-4 bottom-4 sm:top-5 sm:right-5 sm:bottom-auto z-50 p-3 sm:p-2 rounded-full transition-colors duration-300 bg-card/70 border border-border/50 backdrop-blur-md",
        "focus:outline-hidden"
      )}
      aria-label={isDarkMode ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDarkMode ? (
        <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300" />
      ) : (
        <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-900" />
      )}
    </button>
  );
};

export default ThemeToggle;
