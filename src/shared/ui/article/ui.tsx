import Stack, { StackProps } from "@mui/material/Stack";
import { forwardRef } from "react";
import * as React from "react";

export const Article = forwardRef<HTMLDivElement, StackProps>(function Article(
  { ...props },
  ref
) {
  return <Stack {...props} component="article" ref={ref} />;
});
