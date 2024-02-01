import Stack, { StackProps } from "@mui/material/Stack";
import { forwardRef } from "react";
import * as React from "react";

export const Footer = forwardRef<HTMLDivElement, StackProps>(function Footer(
  { ...props },
  ref
) {
  return <Stack {...props} component="footer" ref={ref} />;
});
