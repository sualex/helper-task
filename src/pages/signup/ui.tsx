import { css } from "@emotion/react";
import { Button, Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import * as React from "react";

import { LoginButton } from "@/entities/auth";
import { useMediaDown } from "@/shared/lib";
import { Main } from "@/shared/ui";
import { SignUpForm } from "@/widgets/auth/signup";
import Title from "@/widgets/auth/signup/ui/title/ui";
import { Dialog } from "@/widgets/dialog";
import { Footer } from "@/widgets/footer";

export const SignupPage = () => {
  const isMobile = useMediaDown("sm");
  return (
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
        <Dialog
          open
          titleSlot={<Title />}
          actionsSlot={
            <Stack flex={1}>
              <Button
                type="submit"
                form="SignUpForm"
                variant="primary"
                size="large"
              >
                Создать аккаунт
              </Button>
            </Stack>
          }
        >
          <SignUpForm />
        </Dialog>
      </Container>
    </Main>
  );
};

SignupPage.footer = (
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
