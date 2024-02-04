import { css } from "@emotion/react";
import { Paper, PaperProps, StackProps } from "@mui/material";

import { useMediaDown } from "@/shared/lib";
import { useCommon } from "@/shared/lib/useCommon";
import { Section } from "@/shared/ui";

export function StaticDialog({
  ...props
}: PaperProps & Pick<StackProps, "gap">) {
  const isMobile = useMediaDown("sm");
  const { pxToRem, theme } = useCommon();
  return (
    <Paper
      component={Section}
      role="dialog"
      aria-modal="false"
      square
      elevation={0}
      css={css`
        flex: ${isMobile ? 1 : 0};
        margin: 0;
        padding: ${pxToRem(30)} 0;
        border: none;
        background-color: ${theme?.palette?.common?.white};
      `}
      {...props}
    />
  );
}
