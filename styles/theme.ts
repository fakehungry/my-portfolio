import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    common: {
      black: "#142226",
      white: "#17252a",
    },
    primary: {
      main: "#feffff",
      dark: "#def2f1",
    },
    secondary: {
      main: "#3aafa9",
      dark: "#2b7a78",
    },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
});

// --primary-color: #feffff;
// --primary-color-darker: #def2f1;
// --secondary-color: #3aafa9;
// --dark-primary-color: #17252a;
// --dark-primary-color-darker: #142226;
// --dark-secondary-color: #2b7a78;

export default theme;
