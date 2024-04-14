"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark");

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };
  useEffect(() => {
    setMode(JSON.parse(localStorage.getItem("mode")));
  }, []);
  return (
    <ThemeContext.Provider value={{ toggle, mode, setMode }}>
      <div className={mode}> {children} </div>
    </ThemeContext.Provider>
  );
};
