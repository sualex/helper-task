import { Button, ButtonProps } from "@mui/material";
import * as React from "react";

export const SignUpButton = ({ ...props }: ButtonProps) => {
  return (
    <Button href="/signup" {...props}>
      Зарегистрироваться
    </Button>
  );
};
