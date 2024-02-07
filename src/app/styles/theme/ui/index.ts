import { Components } from "@mui/material";
import { DefaultTheme } from "@mui/private-theming";

import { MuiAppBar } from "./mui-app-bar";
import { MuiButton } from "./mui-button";
import { MuiButtonBase } from "./mui-button-base";
import { MuiContainer } from "./mui-container";
import { MuiCssBaseline } from "./mui-css-base-line";
import { MuiDialog } from "./mui-dialog";
import { MuiFormHelperText } from "./mui-form-helper-text";
import { MuiTextField } from "./mui-text-field";
import { MuiToolbar } from "./mui-toolbar";
import { MuiTypography } from "./mui-typography";

export const components: Components<DefaultTheme> = {
  MuiAppBar,
  MuiButtonBase,
  MuiButton,
  MuiToolbar,
  MuiCssBaseline,
  MuiTextField,
  MuiFormHelperText,
  MuiTypography,
  MuiDialog,
  MuiContainer,
};
