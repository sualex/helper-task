import { Components, buttonClasses } from "@mui/material";
import { DefaultTheme } from "@mui/private-theming";

export const MuiButton: Components<DefaultTheme>["MuiButton"] = {
  defaultProps: {
    size: "medium",
    variant: "secondary",
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      height: {
        small: "30px",
        medium: "40px",
        large: "50px",
      }[ownerState.size!],
      borderRadius: 5,
      textTransform: "none",
      fontSize: "16px",
      fontWeight: 500,
      lineHeight: "25.6px",
    }),
  },
  variants: [
    {
      props: { variant: "secondary", color: "primary" },
      style: ({ theme }) => {
        return {
          backgroundColor: theme.palette.common.white,
          border: `1px solid #D4D4D4`,
          "&:hover": {
            backgroundColor: theme.palette.common.white,
            // borderColor: theme.palette.green_200.main,
            borderColor: `#838383`,
            // color: theme.palette.grey_950.main,
          },
          [`&.${buttonClasses.focusVisible}`]: {
            // borderColor: theme.palette.green_400.main,
            borderColor: `#838383`,
            // boxShadow: "0px 0px 0px 4px #BCDCC0",
          },
          [`&.${buttonClasses.disabled}`]: {
            // borderColor: theme.palette.green_200.main,
            borderColor: "transparent",
            backgroundColor: `#D4D4D4`,
            // color: theme.palette.grey_300,
            color: `#F3F3F3`,
          },
        };
      },
    },
  ],
};
