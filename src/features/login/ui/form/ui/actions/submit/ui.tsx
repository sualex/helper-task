import { Button, ButtonProps } from "@mui/material";
import { useMemo } from "react";
import * as React from "react";
import { useWatch } from "react-hook-form-mui";
import * as zod from "zod";

import { requiredString } from "@/shared/lib/validation";

export function Submit({ disabled, ...props }: ButtonProps) {
  const fields = useWatch();
  const schema = useMemo(
    () =>
      zod.object({
        email: requiredString(),
        password: requiredString(),
      }),
    []
  );
  const { success } = schema.safeParse(fields);
  return (
    <Button
      variant="primary"
      size="large"
      type="submit"
      disabled={disabled || !success}
      {...props}
    >
      Войти
    </Button>
  );
}
