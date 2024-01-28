import { css } from "@emotion/react";
import { Components } from "@mui/material";
import { DefaultTheme } from "@mui/private-theming";

export const MuiCssBaseline: Components<DefaultTheme>["MuiCssBaseline"] = {
  styleOverrides: (theme) => css`
    body {
      background: #f3f3f3;
      min-height: 100%;
    }
  `,
};
