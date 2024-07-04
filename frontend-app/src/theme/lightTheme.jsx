import { createTheme } from "@mui/material/styles";

// Define the Light theme
const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
      dark: "#357a38",
      light: "#80e27e",
    },
    secondary: {
      main: "#eee",
      dark: "#ccc",
      light: "#f5f5f5",
    },
    alternative: {
      main: "#6fbf73",
      dark: "#4caf50",
      light: "#9adca1",
    },
    text: {
      primary: "#333",
      secondary: "#666",
    },
    background: {
      default: "#fff",
      paper: "#f5f5f5",
    },
    error: {
      main: "#f44336",
    },
    success: {
      main: "#4caf50",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontSize: "3rem",
      fontWeight: "bold",
      marginBottom: "1.5rem",
      color: "#333",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "1.25rem",
      color: "#333",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#333",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#333",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "0.75rem",
      color: "#333",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
      color: "#333",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: "normal",
      marginBottom: "1rem",
      color: "#666",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: "bold",
      marginBottom: "0.75rem",
      color: "#666",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: "1.5",
      color: "#333",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: "1.5",
      color: "#666",
    },
    button: {
      textTransform: "none",
      fontWeight: "bold",
    },
    caption: {
      fontSize: "0.75rem",
      color: "#666",
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "#666",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "10px 20px",
          textTransform: "none",
        },
        containedPrimary: {
          color: "#eee",
          backgroundColor: "#4caf50",
          "&:hover": {
            backgroundColor: "#357a38",
          },
          "&:focus": {
            backgroundColor: "#357a38",
          },
        },
        containedSecondary: {
          color: "#333",
          backgroundColor: "#eee",
          "&:hover": {
            backgroundColor: "#ccc",
          },
          "&:focus": {
            backgroundColor: "#ccc",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: "1rem",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          marginBottom: "1rem",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: "1rem",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "#4caf50",
          color: "#fff",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#333",
          color: "#eee",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "#666",
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          width: "48px",
          height: "48px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: "16px",
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          marginBottom: "1rem",
        },
      },
    },
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "12px 16px",
        },
      },
    },
  },
});

export { lightTheme };
