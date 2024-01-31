import { css } from "@emotion/react";
import {
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
  Dialog as MuiDialog,
  NoSsr,
  Paper,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { ReactNode } from "react";

export interface IDialogProps extends DialogProps {
  modal?: boolean;
  titleSlot?: ReactNode;
  actionsSlot?: ReactNode;
}

export const Dialog = ({
  children,
  open = false,
  modal = false,
  titleSlot = null,
  actionsSlot = null,
  ...props
}: IDialogProps) => {
  return (
    <NoSsr>
      {modal ? (
        <MuiDialog open={open} {...props}>
          <DialogTitle>{titleSlot}</DialogTitle>
          <DialogContent>{children}</DialogContent>
          <DialogActions>{actionsSlot}</DialogActions>
        </MuiDialog>
      ) : (
        <Paper
          component={Stack}
          role="dialog"
          aria-modal="false"
          aria-label="Cookie banner"
          square
          variant="outlined"
          tabIndex={-1}
          sx={{
            m: 0,
            p: 0,
            borderWidth: 0,
          }}
        >
          {titleSlot && (
            <DialogTitle
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
        </Paper>
      )}
    </NoSsr>
  );
};
