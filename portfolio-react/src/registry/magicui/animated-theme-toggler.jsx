import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const AnimatedThemeToggler = ({ variant = "diamond" }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = window.document.documentElement;
    theme === "dark" ? root.classList.add("dark") : root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative p-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:scale-110 transition-all duration-300 group focus:outline-none"
      aria-label="Toggle Theme"
    >
      <div className="relative w-6 h-6 flex items-center justify-center overflow-hidden">
        <Sun className={`absolute w-5 h-5 transition-all duration-500 transform ${
          theme === "dark" ? "translate-y-10 opacity-0" : "translate-y-0 opacity-100 rotate-0"
        } text-[#FF5C00]`} />
        
        <Moon className={`absolute w-5 h-5 transition-all duration-500 transform ${
          theme === "dark" ? "translate-y-0 opacity-100 rotate-0" : "-translate-y-10 opacity-0"
        } text-[#FF5C00]`} />
      </div>

      {variant === "diamond" && (
        <div className="absolute -inset-1 border border-[#FF5C00]/20 rounded-xl rotate-45 group-hover:rotate-90 transition-transform duration-700 pointer-events-none" />
      )}
    </button>
  );
};