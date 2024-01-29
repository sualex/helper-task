import { Components, TextFieldProps } from "@mui/material";
import { DefaultTheme } from "@mui/private-theming";

export function inputPaddingFromSize(size: TextFieldProps["size"]) {
  return !size || size === "medium"
    ? {
        //medium
        padding: "13px 10px 14px 10px",
      }
    : {
        //small
        padding: "7px 10px 6px 10px",
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
        "& input": {
          ...inputPaddingFromSize(ownerState?.size),
          borderRadius: 5,
          // "&.Mui-disabled": {
          //   background: "#F3F3F3",
          //   // border: "none",
          // },
        },

        "&.Mui-disabled": {
          background: "#F3F3F3",
          // border: "none",
        },

        "& fieldset": {
          // borderColor: "#D4D4D4",
          top: 0,
          "& legend": {
            display: "none",
          },
        },

        "&:hover fieldset": {
          ...(!ownerState?.disabled && {
            borderColor: "#838383",
          }),
        },
        "&.Mui-focused fieldset": {
          borderColor: "#838383",
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
