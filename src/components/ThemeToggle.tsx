import React, { useContext } from "react";
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 bg-gray-200 dark:bg-gray-800 rounded-full transition-colors"
      aria-label="Toggle theme"
    >
      {theme === "light" ? (
        <Moon className="text-gray-800 dark:text-white" />
      ) : (
        <Sun className="text-yellow-500" />
      )}
    </button>
  );
};

export default ThemeToggle;
