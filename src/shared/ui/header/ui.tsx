import Stack, { StackProps } from "@mui/material/Stack";
import { forwardRef } from "react";
import * as React from "react";

export const Header = forwardRef<HTMLDivElement, StackProps>(function Header(
  { ...props },
  ref
) {
  return <Stack {...props} component="header" ref={ref} />;
});
