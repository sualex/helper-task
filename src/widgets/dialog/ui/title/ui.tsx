import { css } from "@emotion/react";
import { DialogTitleProps, DialogTitle as MuiDialogTitle } from "@mui/material";
import Stack from "@mui/material/Stack";

export function DialogTitle({ ...props }: DialogTitleProps) {
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
