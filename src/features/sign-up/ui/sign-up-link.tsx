import { Button, ButtonProps } from "@mui/material";
import * as React from "react";

export const SignUpLink = ({ ...props }: ButtonProps) => {
  return (
    <Button href="/sign-up" {...props}>
      Зарегистрироваться
    </Button>
  );
};
