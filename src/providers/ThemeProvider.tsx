"use client";
import React, { useContext, useEffect } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem("theme") as "light" | "dark";
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle("dark", theme === "dark");

    // Save theme to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className={`
      ${theme === "dark" ? "dark bg-[#090D1F]" : ""}
      min-h-screen
    `}
    >
      {children}
    </div>
  );
};

export default ThemeProvider;
