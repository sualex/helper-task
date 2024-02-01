import { css } from "@emotion/react";
import { Typography, TypographyProps } from "@mui/material";
import * as React from "react";

export function PageFooterText({ ...props }: TypographyProps) {
  return (
    <Typography
      css={css`
        font-size: 16px;
        font-weight: 400;
        line-height: 26px;
        letter-spacing: 0em;
        text-align: left;
        color: #838383;
      `}
      {...props}
    />
  );
}
