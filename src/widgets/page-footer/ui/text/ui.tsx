import { css } from "@emotion/react";
import { Typography, TypographyProps } from "@mui/material";
import * as React from "react";

import { useCommon } from "@/shared/lib";

export function PageFooterText({ ...props }: TypographyProps) {
  const { theme } = useCommon();
  return (
    <Typography
      css={css`
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
        color: ${theme?.palette?.gray?.main};
      `}
      {...props}
    />
  );
}
