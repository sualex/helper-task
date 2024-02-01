import { Button, ButtonProps } from "@mui/material";
import * as React from "react";

export function CancelButton({ ...props }: ButtonProps) {
  return <Button variant="secondary" size="large" {...props} />;
}
