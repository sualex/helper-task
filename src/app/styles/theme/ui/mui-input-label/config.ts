import { css } from "@emotion/react";
import { Components } from "@mui/material";
import { DefaultTheme } from "@mui/private-theming";

export const MuiInputLabel: Components<DefaultTheme>["MuiInputLabel"] = {
  defaultProps: {
    shrink: true,
  },
  styleOverrides: {
    root: ({ theme }) => css`
      color: ${theme.palette.gray.main};
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      &,
      &.Mui-focused,
      &.Mui-error,
      & span.MuiFormLabel-asterisk {
        // ...(!error && {
        color: ${theme.palette.gray.main};
        // }),
      }
    `,
    shrink: css`
      transform: translate(0px, 0px) scale(1);
    `,
  },
};
