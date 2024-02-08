import { Typography, TypographyProps } from "@mui/material";
import { forwardRef } from "react";
import * as React from "react";

export const H1 = forwardRef<HTMLHeadingElement, TypographyProps>(function H1(
  { ...props },
  ref
) {
  return <Typography {...props} variant="h1" ref={ref} lineHeight="42px" />;
});
