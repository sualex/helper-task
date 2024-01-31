import { css } from "@emotion/react";
import { Button, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import type { NextPage } from "next";
import * as React from "react";

import { useMediaDown } from "@/shared/lib";
import { Main } from "@/shared/ui";
import { LoginForm } from "@/widgets/auth";
import Title from "@/widgets/auth/login/ui/title/ui";
import { Dialog } from "@/widgets/dialog";
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
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: ${isMobile ? "flex-start" : "center"};
            border: 1px solid red;
          `}
        >
          <Dialog
            open
            titleSlot={<Title />}
            actionsSlot={
              <Stack flex={1}>
                <Button
                  type="submit"
                  form="LoginForm"
                  variant="primary"
                  size="large"
                  // disabled={isFetching}
                >
                  Войти
                </Button>
              </Stack>
            }
          >
            <LoginForm />
          </Dialog>
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
