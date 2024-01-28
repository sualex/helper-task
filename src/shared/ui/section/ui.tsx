import Stack, { StackProps } from "@mui/material/Stack";
import { forwardRef } from "react";
import * as React from "react";

export const Section = forwardRef<HTMLDivElement, StackProps>(function Section(
  { ...props },
  ref
) {
  return <Stack {...props} component="section" ref={ref} />;
});
