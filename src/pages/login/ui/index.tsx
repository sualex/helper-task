import { css } from "@emotion/react";
import { Container } from "@mui/material";

import { LoginForm } from "@/features/login";
import { useCommon, useMediaDown } from "@/shared/lib";
import { StaticDialog } from "@/shared/ui";

import { LoginPageFooter } from "./footer";

LoginPage.footer = <LoginPageFooter />;

export function LoginPage() {
  const isMobile = useMediaDown("sm");
  const { pxToRem } = useCommon();
  return (
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
  );
}
