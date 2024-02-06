import { css } from "@emotion/react";
import { Container, Stack } from "@mui/material";

import { Email, LoginForm, Password } from "@/features/login";
import { useCommon, useMediaDown } from "@/shared/lib";
import { H1, Main, StaticDialog } from "@/shared/ui";

import { LoginPageFooter } from "./footer";

export const LoginPage = () => {
  const isMobile = useMediaDown("sm");
  const { pxToRem } = useCommon();
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
        <StaticDialog spacing={pxToRem(25)}>
          <H1 padding={`0 ${pxToRem(30)}`}>Вход в Yoldi Agency</H1>
          <LoginForm>
            <Stack
              css={css`
                padding: 0 ${pxToRem(35)};
              `}
            >
              <Email name="email" placeholder="E-mail" />
            </Stack>
            <Stack
              css={css`
                padding: 0 ${pxToRem(35)};
              `}
            >
              <Password name="password" placeholder="Пароль" />
            </Stack>
          </LoginForm>
        </StaticDialog>
      </Container>
    </Main>
  );
};

LoginPage.footer = <LoginPageFooter />;
