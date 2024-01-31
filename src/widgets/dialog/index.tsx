import { css } from "@emotion/react";
import {
  DialogActions,
  DialogContent,
  DialogTitle,
  NoSsr,
} from "@mui/material";
import Stack from "@mui/material/Stack";

import { useMediaDown } from "@/shared/lib";

import { IDialogProps } from "./types";
import { ModalDialog } from "./ui/modal";
import { StaticDialog } from "./ui/static";

export const Dialog = ({
  children,
  open,
  modal = false,
  titleSlot = null,
  actionsSlot = null,
  ...props
}: IDialogProps) => {
  const isMobile = useMediaDown("sm");
  const Wrapper = modal ? ModalDialog : StaticDialog;
  return (
    <NoSsr>
      <Wrapper
        open={open}
        css={css`
          flex: ${!modal && isMobile ? 1 : 0};
        `}
        {...props}
      >
        {titleSlot && (
          <DialogTitle
            component={Stack}
            css={css`
              padding: 30px 30px;
            `}
          >
            {titleSlot}
          </DialogTitle>
        )}
        {children && (
          <DialogContent
            css={css`
              padding: 0 30px;
            `}
          >
            {children}
          </DialogContent>
        )}
        {actionsSlot && (
          <DialogActions
            css={css`
              padding: 30px;
            `}
          >
            {actionsSlot}
          </DialogActions>
        )}
      </Wrapper>
    </NoSsr>
  );
};
