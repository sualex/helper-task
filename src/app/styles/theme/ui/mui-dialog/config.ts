import { css } from "@emotion/react";
import { Components } from "@mui/material";
import { DefaultTheme } from "@mui/private-theming";

export const MuiDialog: Components<DefaultTheme>["MuiDialog"] = {
  defaultProps: {},
  styleOverrides: {
    container: ({ theme, ownerState }) => {
      return css`
        //border: 2px solid red;
      `;
    },
    // root: ({ theme }) => {
    //   return css`
    //     box-shadow: none;
    //     border-bottom: 1px solid ${theme?.palette?.strokesSecondary?.main};
    //   `;
    // },
  },
};
