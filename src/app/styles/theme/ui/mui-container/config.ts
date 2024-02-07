import { css } from "@emotion/react";
import { Components } from "@mui/material";
import { DefaultTheme } from "@mui/private-theming";

export const MuiContainer: Components<DefaultTheme>["MuiContainer"] = {
  defaultProps: {
    disableGutters: true,
  },
  styleOverrides: {
    root: () => {
      return css`
        flex: 1;
        display: flex;
        flex-direction: column;
      `;
    },
  },
};
