import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import Stack, { StackProps } from "@mui/material/Stack";
import * as React from "react";

import { SignUpButton } from "@/entities/auth/sign-up";
import { Footer } from "@/widgets/footer";

export const LoginPageFooter = ({ ...props }: StackProps) => {
  return (
    <Footer {...props}>
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
          Еще нет аккаунта?
        </Typography>
        <SignUpButton variant="link" />
      </Stack>
    </Footer>
  );
};
