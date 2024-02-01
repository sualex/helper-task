import { Button, ButtonProps } from "@mui/material";
import * as React from "react";

export function OkButton({ ...props }: ButtonProps) {
  return <Button variant="primary" size="large" {...props} />;
}
