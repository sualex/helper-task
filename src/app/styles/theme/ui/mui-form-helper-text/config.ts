import { css } from "@emotion/react";
import { Components } from "@mui/material";
import { DefaultTheme } from "@mui/private-theming";

export const MuiFormHelperText: Components<DefaultTheme>["MuiFormHelperText"] =
  {
    defaultProps: {},
    styleOverrides: {
      root: () => css`
        font-size: 0.8rem;
        margin-left: 0;
      `,
    },
  };
