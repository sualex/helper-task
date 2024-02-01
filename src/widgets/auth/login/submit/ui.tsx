import { Button, ButtonProps } from "@mui/material";
import * as React from "react";
import { useWatch } from "react-hook-form-mui";

export function Submit({ ...props }: ButtonProps) {
  const fields = useWatch();

  console.log("xxxxxxxxxxxxxxx ", fields);

  return (
    <Button
      type="submit"
      variant="primary"
      size="large"
      // disabled={isFetching}
      {...props}
    />
  );
}
