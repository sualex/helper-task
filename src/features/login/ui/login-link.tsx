import { css } from "@emotion/react";
import { Button, ButtonProps } from "@mui/material";

export const LoginLink = ({ ...props }: ButtonProps) => {
  return (
    <Button
      href="/login"
      css={css`
        min-width: 114px;
      `}
      {...props}
    >
      Войти
    </Button>
  );
};
