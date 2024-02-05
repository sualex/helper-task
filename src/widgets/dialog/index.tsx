import { css } from "@emotion/react";
import { NoSsr } from "@mui/material";

import { useMediaDown } from "@/shared/lib";

import { StaticDialog } from "../static-dialog";
import { IDialogProps } from "./types";
import { ModalDialog } from "./ui/modal";

export * from "./ui/title";
export * from "./ui/content";
export * from "./ui/actions";

export const Dialog = ({
  children,
  open,
  modal = false,
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
        {children}
      </Wrapper>
    </NoSsr>
  );
};
