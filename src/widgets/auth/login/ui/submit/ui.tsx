import { Button, ButtonProps } from "@mui/material";
import * as React from "react";

export function Submit({ ...props }: ButtonProps) {
  return (
    <Button
      type="submit"
      variant="primary"
      size="large"
      // disabled={isFetching}
      {...props}
    >
      Войти
    </Button>
  );
}
