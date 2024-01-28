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
            borderColor: `#838383`,
          },
          [`&.${buttonClasses.focusVisible}`]: {
            borderColor: `#838383`,
          },
          [`&.${buttonClasses.disabled}`]: {
            borderColor: "transparent",
            backgroundColor: `#D4D4D4`,
            color: `#F3F3F3`,
          },
        };
      },
    },
    {
      props: { variant: "link", color: "primary" },
      style: ({ theme }) => {
        return {
          background: `none`,
          border: `none`,
          borderRadius: 0,
          height: "auto",
          lineHeight: "normal",
          padding: 0,
          minWidth: "auto",
          "&:hover": {
            background: `none`,
            borderColor: "transparent",
            color: theme?.palette?.primary?.main,
          },
          [`&.${buttonClasses.focusVisible}`]: {
            background: `none`,
            borderColor: "transparent",
          },
          [`&.${buttonClasses.disabled}`]: {
            background: `none`,
            borderColor: "transparent",
            color: `#D4D4D4`,
          },
        };
      },
    },
  ],
};
