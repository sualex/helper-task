import { css } from "@emotion/react";
import {
  DialogActionsProps,
  DialogActions as MuiDialogActions,
} from "@mui/material";

export function DialogActions({ ...props }: DialogActionsProps) {
  return (
    <MuiDialogActions
      css={css`
        padding: 30px;
      `}
      {...props}
    />
  );
}
