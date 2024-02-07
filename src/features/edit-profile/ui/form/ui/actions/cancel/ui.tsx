import { Button, ButtonProps } from "@mui/material";
import * as React from "react";

export function Cancel({ ...props }: ButtonProps) {
  return (
    <Button
      variant="secondary"
      size="large"
      onClick={() => {
        // setIsOpen(false);
      }}
      {...props}
    >
      Отмена
    </Button>
  );
}
