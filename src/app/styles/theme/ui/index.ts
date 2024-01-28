import { Components } from "@mui/material";
import { DefaultTheme } from "@mui/private-theming";

import { MuiAppBar } from "./mui-app-bar";
import { MuiButton } from "./mui-button";
import { MuiButtonBase } from "./mui-button-base";
import { MuiCssBaseline } from "./mui-css-base-line";
import { MuiToolbar } from "./mui-toolbar";

export const components: Components<DefaultTheme> = {
  MuiAppBar,
  MuiButtonBase,
  MuiButton,
  MuiToolbar,
  MuiCssBaseline,
};