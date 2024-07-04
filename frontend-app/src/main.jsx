import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./context/themeContext.jsx";

import { ThemeContextProvider } from "./context/themeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ThemeContextProvider>
  </React.StrictMode>
);
