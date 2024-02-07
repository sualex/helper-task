import { css } from "@emotion/react";
import { Container } from "@mui/material";

import { LoginForm } from "@/features/login";
import { useCommon, useMediaDown } from "@/shared/lib";
import { Main, StaticDialog } from "@/shared/ui";

import { LoginPageFooter } from "./footer";

export const LoginPage = () => {
  const isMobile = useMediaDown("sm");
  const { pxToRem } = useCommon();
  return (
    <Main flex={1}>
      <Container
        maxWidth="sm"
        css={css`
          justify-content: ${isMobile ? "flex-start" : "center"};
        `}
      >
        <StaticDialog spacing={pxToRem(25)}>
          <LoginForm />
        </StaticDialog>
      </Container>
    </Main>
  );
};

LoginPage.footer = <LoginPageFooter />;
