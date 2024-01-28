import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import type { NextPage } from "next";

import { Main } from "@/shared/ui";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export const LoginPage: NextPage = () => {
  return (
    <>
      <Header>
        <Button
          css={css`
            width: 114px;
          `}
        >
          Войти
        </Button>
      </Header>
      <Main
        flex={1}
        css={css`
          border: 6px solid yellow;
        `}
      />
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
          <Button href="/login" variant="link">
            Войти
          </Button>
        </Stack>
      </Footer>
    </>
  );
};
