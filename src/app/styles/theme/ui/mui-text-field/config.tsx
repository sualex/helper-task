import { Components, TextFieldProps } from "@mui/material";
import { DefaultTheme } from "@mui/private-theming";

export function inputPaddingFromSize(
  size: TextFieldProps["size"],
  multiline: TextFieldProps["multiline"]
) {
  return !size || size === "medium"
    ? {
        //medium
        padding: `${multiline ? 0 : 13}px 10px ${multiline ? 0 : 14}px 10px`,
      }
    : {
        //small
        padding: `${multiline ? 0 : 6}px 10px ${multiline ? 0 : 7}px 10px`,
      };
}

export const MuiTextField: Components<DefaultTheme>["MuiTextField"] = {
  defaultProps: {
    variant: "outlined",
    size: "medium",
    InputLabelProps: {
      shrink: true,
    },
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      borderRadius: 2,
      "& .MuiFormLabel-root": {
        transform: `translate(0px, 0px) scale(1)`,
        marginBottom: "4px",
      },
      "& .MuiInputBase-root": {
        marginTop: ownerState.label ? theme.spacing(3.5) : 0,
        borderRadius: 5,
        "& input,textarea": {
          ...inputPaddingFromSize(ownerState?.size, ownerState?.multiline),
          borderRadius: 5,
          // "&.Mui-disabled": {
          //   background: "#F3F3F3",
          //   // border: "none",
          // },
        },
        "&.Mui-disabled": {
          background: theme?.palette?.backgroundSecondary?.main,
          "& fieldset": {
            borderColor: "transparent",
          },
          [`& svg path`]: {
            fill: theme?.palette?.gray?.main,
          },
        },
        "& fieldset": {
          top: 0,
          "& legend": {
            display: "none",
          },
        },
        "&:hover fieldset": {
          ...(!ownerState?.disabled && {
            borderColor: theme?.palette?.gray?.main,
          }),
        },
        "&.Mui-focused fieldset": {
          borderColor: theme?.palette?.gray?.main,
          borderWidth: "1px",
          // borderColor: "transparent",
        },
        "&.Mui-error.Mui-focused fieldset": {
          borderColor: theme?.palette?.error?.main,
        },
        "&.Mui-error:hover fieldset": {
          borderColor: theme?.palette?.error?.main,
        },
      },
    }),
  },
};
