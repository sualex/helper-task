import { css } from "@emotion/react";
import { Components } from "@mui/material";
import { DefaultTheme } from "@mui/private-theming";

export const MuiAppBar: Components<DefaultTheme>["MuiAppBar"] = {
  defaultProps: {
    color: "inherit",
  },
  styleOverrides: {
    root: ({ theme }) => {
      return css`
        box-shadow: none;
        border-bottom: 1px solid ${theme?.palette?.strokesSecondary?.main};
      `;
    },
  },
};
