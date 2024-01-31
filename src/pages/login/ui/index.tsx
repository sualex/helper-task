import { css } from "@emotion/react";
import { Button, Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import * as React from "react";

import { useMediaDown } from "@/shared/lib";
import { Main } from "@/shared/ui";
import { LoginForm } from "@/widgets/auth";
import Title from "@/widgets/auth/login/ui/title/ui";
import { Dialog } from "@/widgets/dialog";

import { LoginPageFooter } from "./footer";

export const LoginPage = () => {
  const isMobile = useMediaDown("sm");
  return (
    <Main flex={1}>
      <Container
        maxWidth="sm"
        disableGutters
        css={css`
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
  );
};

LoginPage.footer = <LoginPageFooter />;