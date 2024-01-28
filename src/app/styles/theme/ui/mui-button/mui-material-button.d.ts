import "@mui/material/Button";

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    small: true;
    large: true;
    medium: true;
  }
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    link: true;
    text: false;
    outlined: false;
    contained: false;
  }
}
