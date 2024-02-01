import { css } from "@emotion/react";
import { Dialog as MuiDialog } from "@mui/material";

import { IDialogProps } from "@/widgets/dialog/types";

export function ModalDialog({ ...props }: IDialogProps) {
  return (
    <MuiDialog {...props} css={css``} {...props} title="aaaaaaaaaaaaaaa" />
  );
}
