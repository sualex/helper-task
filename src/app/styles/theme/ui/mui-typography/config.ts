import { Components } from "@mui/material";
import { DefaultTheme } from "@mui/private-theming";

export const MuiTypography: Components<DefaultTheme>["MuiTypography"] = {
  defaultProps: {},
  styleOverrides: {},
  variants: [
    {
      props: { variant: "h1" },
      style: () => ({
        fontSize: 30,
        fontWeight: 500,
        lineHeight: "42px",
        letterSpacing: 0,
        textAlign: "left",
      }),
    },
  ],
};
