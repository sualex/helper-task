import { css } from "@emotion/react";
import { Typography, TypographyProps } from "@mui/material";

export function Title({ ...props }: TypographyProps) {
  return (
    <Typography
      variant="h1"
      css={css`
        font-size: 16px;
        font-weight: 400;
        line-height: 25.6px;
        letter-spacing: 0em;
        text-align: left;
      `}
      {...props}
    >
      Разрабатываем и запускаем
      <br />
      сложные веб проекты
    </Typography>
  );
}
