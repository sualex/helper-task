import { Button, ButtonProps } from "@mui/material";
import * as React from "react";
import { useWatch } from "react-hook-form-mui";

import { loginFormSubmitButtonValidationSchema } from "./model";

export function LoginFormSubmitButton({ ...props }: ButtonProps) {
  const fields = useWatch();

  const { success } = loginFormSubmitButtonValidationSchema.safeParse(fields);

  return (
    <Button
      variant="primary"
      size="large"
      type="submit"
      disabled={!success}
      {...props}
    >
      Войти
    </Button>
  );
}
