import "@emotion/react";
import {
  Palette as MuiPalette,
  PaletteOptions as MuiPaletteOptions,
} from "@mui/material";
import "@mui/material/styles";
import { Theme } from "@mui/material/styles";

declare module "@mui/private-theming/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

declare module "@emotion/react" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface Theme extends Theme {}
}

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    galaxyTab2: true;
    md: true;
    lg: true;
    desktop: true;
    xl: true;
  }
  export interface PaletteOptions extends MuiPaletteOptions {
    backgroundSecondary: PaletteColorOptions;
    strokesPrimary: PaletteColorOptions;
    strokesSecondary: PaletteColorOptions;
  }
  export interface Palette extends MuiPalette {
    backgroundSecondary: SimplePaletteColorOptions;
    strokesPrimary: SimplePaletteColorOptions;
    strokesSecondary: SimplePaletteColorOptions;
  }
}
