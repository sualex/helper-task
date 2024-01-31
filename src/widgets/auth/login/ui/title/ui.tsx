import { css } from "@emotion/react";
import { TypographyProps } from "@mui/material";
import Typography from "@mui/material/Typography";
import * as React from "react";

import { useMediaDown } from "@/shared/lib";

export function Title({ ...props }: TypographyProps) {
  const isMobile = useMediaDown("sm");
  return (
    <Typography
      variant="h1"
      css={css`
        font-size: 30px;
        font-weight: 500;
        line-height: normal;
        letter-spacing: 0em;
        text-align: left;
      `}
      {...props}
    >
      Вход в Yoldi Agency
    </Typography>
  );
}
