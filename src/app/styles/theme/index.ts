import { createTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

import { components } from "./ui";

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
      sm: 400,
      md: 900,
      lg: 1200,
      desktop: 1280,
      xl: 1536,
    },
  },
  palette: {
    mode: "light",
    text: {
      primary: "#000000",
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
