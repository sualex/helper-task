import { css } from "@emotion/react";
import { Button, Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import * as React from "react";

import { useMediaDown } from "@/shared/lib";
import { Main } from "@/shared/ui";
import { SignUpForm } from "@/widgets/auth/signup";
import Title from "@/widgets/auth/signup/ui/title/ui";
import { Dialog } from "@/widgets/dialog";

import { SignUpPageFooter } from "./footer";

export const SignUpPage = () => {
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

SignUpPage.footer = <SignUpPageFooter />;
