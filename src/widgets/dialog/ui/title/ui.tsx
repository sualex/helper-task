import { css } from "@emotion/react";
import { DialogTitle as MuiDialogTitle } from "@mui/material";
import Stack, { StackProps } from "@mui/material/Stack";

export function DialogTitle({ ...props }: StackProps) {
  return (
    <MuiDialogTitle
      component={Stack}
      css={css`
        padding: 0 30px;
      `}
      {...props}
    />
  );
}
