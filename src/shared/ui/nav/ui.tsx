import Stack, { StackProps } from "@mui/material/Stack";
import { forwardRef } from "react";
import * as React from "react";

export const Nav = forwardRef<HTMLDivElement, StackProps>(function Nav(
  { ...props },
  ref
) {
  return <Stack {...props} component="nav" ref={ref} />;
});
