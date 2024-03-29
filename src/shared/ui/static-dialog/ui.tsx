import { css } from "@emotion/react";
import { Paper, PaperProps, StackProps } from "@mui/material";

import { useMediaDown } from "@/shared/lib";
import { useCommon } from "@/shared/lib/useCommon";
import { Article } from "@/shared/ui";

export function StaticDialog({
  ...props
}: PaperProps & Pick<StackProps, "spacing">) {
  const sm = useMediaDown("sm");
  const { pxToRem, theme } = useCommon();
  return (
    <Paper
      component={Article}
      role="dialog"
      aria-modal="false"
      square
      elevation={0}
      css={css`
        flex: ${sm ? 1 : 0};
        margin: 0;
        padding: ${pxToRem(30)} 0;
        border: ${sm
          ? "none"
          : `1px solid ${theme?.palette?.strokesSecondary?.main}`};
        border-radius: ${pxToRem(sm ? 0 : 5)};
        background-color: ${theme?.palette?.common?.white};
      `}
      {...props}
    />
  );
}
