import { Button, ButtonProps } from "@mui/material";
import * as React from "react";

export const LoginButton = ({ ...props }: ButtonProps) => {
  return (
    <Button href="/login" {...props}>
      Войти
    </Button>
  );
};
