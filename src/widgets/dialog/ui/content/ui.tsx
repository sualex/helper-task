import { css } from "@emotion/react";
import {
  DialogContentProps,
  DialogContent as MuiDialogContent,
} from "@mui/material";

export function DialogContent({ ...props }: DialogContentProps) {
  return (
    <MuiDialogContent
      css={css`
        padding: 0 30px;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      `}
      {...props}
    />
  );
}
