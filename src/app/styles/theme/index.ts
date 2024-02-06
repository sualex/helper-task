import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

import { components } from "./ui";

export const inter = Inter({
  weight: ["100", "200", "300", "400", "500", "600"],
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const theme = createTheme({
  //  https://screensiz.es/
  breakpoints: {
    values: {
      xs: 0,
      sm: 400,
      galaxyTab2: 600,
      md: 800,
      lg: 1200,
      desktop: 1280,
      xl: 1536,
    },
  },
  palette: {
    mode: "light",
    error: {
      main: "#F00000",
    },
    text: {
      primary: "#000000",
    },
    backgroundSecondary: {
      main: "#F3F3F3",
    },
    strokesPrimary: {
      main: "#D4D4D4",
    },
    strokesSecondary: {
      main: "#E6E6E6",
    },
    gray: {
      main: "#838383",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
  mixins: {
    toolbar: {
      minHeight: 80,
    },
  },
  components,
});
