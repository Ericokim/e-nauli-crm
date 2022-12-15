import React, { useEffect, useState } from "react";

const useDarkMode = () => {
  const [mode, setMode] = useState(null);
  const [currentColor, setCurrentColor] = useState("#1A97F5");

  // set theme mode
  const toggleMode = () => {
    if (mode === "light") {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      setMode("dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      setMode("light");
    }
  };

  // set color mode
  const setColor = (color) => {
    setCurrentColor(color);
    localStorage.setItem("colorMode", color);
  };

  useEffect(() => {
    const userPreference =
      !!window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    setMode(
      // use stored theme; fallback to user preference
      localStorage.getItem("theme") || (userPreference ? "light" : "dark")
    );

    const currentThemeColor = localStorage.getItem("colorMode");
    if (currentThemeColor) {
      // use stored color
      setCurrentColor(localStorage.getItem("colorMode"));
    }
  }, []);

  useEffect(() => {
    if (mode) {
      localStorage.setItem("theme", mode);
      document.documentElement.classList.add(mode);
    }
  }, [mode, currentColor]);

  return [mode, setMode, toggleMode, currentColor, setCurrentColor, setColor];
};

export default useDarkMode;
