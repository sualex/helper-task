import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

export const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export default createTheme({
  //  https://screensiz.es/
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      desktop: 1280,
      xl: 1536,
    },
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});
