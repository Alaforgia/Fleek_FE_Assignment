import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#1D3557",
      light: "#F1FAEE",
    },
    secondary: {
      main: "#A8DADC",
      light: "#F1FAEE",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
