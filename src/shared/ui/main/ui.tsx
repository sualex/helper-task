import Stack, { StackProps } from "@mui/material/Stack";
import { forwardRef } from "react";
import * as React from "react";

export const Main = forwardRef<HTMLDivElement, StackProps>(function Main(
  { ...props },
  ref
) {
  return <Stack {...props} component="main" ref={ref} />;
});
