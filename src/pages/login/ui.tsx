import { css } from "@emotion/react";
import { Button, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import type { NextPage } from "next";

import { useMediaDown } from "@/shared/lib";
import { Main } from "@/shared/ui";
import { LoginForm } from "@/widgets/auth";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export const LoginPage: NextPage = () => {
  const isMobile = useMediaDown("sm");
  return (
    <>
      <Header>
        <Button
          href="/login"
          css={css`
            width: 114px;
          `}
        >
          Войти
        </Button>
      </Header>
      <Main flex={1}>
        <Container
          maxWidth="sm"
          disableGutters
          css={css`
            max-width: 400px;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: ${isMobile ? "flex-start" : "center"};
          `}
        >
          <LoginForm />
        </Container>
      </Main>
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
            Еще нет аккаунта?
          </Typography>
          <Button href="/signup" variant="link">
            Зарегистрироваться
          </Button>
        </Stack>
      </Footer>
    </>
  );
};
