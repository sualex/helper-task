import { Typography } from "@mui/material";
import Stack, { StackProps } from "@mui/material/Stack";
import * as React from "react";
import { useFormState } from "react-hook-form-mui";

export function Err({ ...props }: StackProps) {
  const state = useFormState();

  console.log("xxxxxxxxxxxxxxxxxxx ", state?.errors?.root?.serverError);

  return !state?.errors?.root?.serverError ? null : (
    <Stack {...props}>
      <Typography color="error">
        {state?.errors?.root?.serverError?.message}
      </Typography>
    </Stack>
  );
}
