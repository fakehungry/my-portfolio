import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      main: "#1e88e5",
    },
    secondary: {
      main: "#f50057",
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
});

export default theme;
