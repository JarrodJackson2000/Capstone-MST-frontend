import React, { createContext, useState } from "react";

// Create the theme context
export const ThemeContext = createContext();

// Create a provider component to wrap the application
export const ThemeContextProvider = ({ children }) => {
  // Set the initial theme state
  const [theme, setTheme] = useState("lightTheme");

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === "lightTheme" ? "darkTheme" : "lightTheme"
    );
  };

  // Provide the theme state and toggle function to the children components
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
