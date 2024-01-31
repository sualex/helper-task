import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Stack, { StackProps } from "@mui/material/Stack";
import * as React from "react";

import { LoginButton } from "@/entities/user/ui/login";
import { Footer } from "@/widgets/footer";

export const SignUpPageFooter = ({ ...props }: StackProps) => {
  return (
    <Footer>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Typography
          css={css`
            font-size: 16px;
            font-weight: 400;
            line-height: 26px;
            letter-spacing: 0em;
            text-align: left;
            color: #838383;
          `}
        >
          Уже есть аккаунт?
        </Typography>
        <LoginButton href="/login" variant="link">
          Войти
        </LoginButton>
      </Stack>
    </Footer>
  );
};
