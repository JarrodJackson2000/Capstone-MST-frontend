import { createTheme } from "@mui/material/styles";

// Define the Dark theme
const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#4caf50",
      dark: "#357a38",
      light: "#80e27e",
    },
    secondary: {
      main: "#333",
      dark: "#222",
      light: "#444",
    },
    alternative: {
      main: "#6fbf73",
      dark: "#4caf50",
      light: "#9adca1",
    },
    text: {
      primary: "#eee",
      secondary: "#bbb",
    },
    background: {
      default: "#212121",
      paper: "#333",
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
      color: "#eee",
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      marginBottom: "1.25rem",
      color: "#eee",
    },
    h3: {
      fontSize: "2rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#eee",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: "bold",
      marginBottom: "1rem",
      color: "#eee",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: "bold",
      marginBottom: "0.75rem",
      color: "#eee",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: "bold",
      marginBottom: "0.5rem",
      color: "#eee",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: "normal",
      marginBottom: "1rem",
      color: "#bbb",
    },
    subtitle2: {
      fontSize: "0.875rem",
      fontWeight: "bold",
      marginBottom: "0.75rem",
      color: "#bbb",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: "1.5",
      color: "#eee",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: "1.5",
      color: "#bbb",
    },
    button: {
      textTransform: "none",
      fontWeight: "bold",
    },
    caption: {
      fontSize: "0.75rem",
      color: "#bbb",
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: "bold",
      textTransform: "uppercase",
      color: "#bbb",
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
          color: "#eee",
          backgroundColor: "#333",
          "&:hover": {
            backgroundColor: "#222",
          },
          "&:focus": {
            backgroundColor: "#222",
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
          color: "#bbb",
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

export { darkTheme };
