import { css } from "@emotion/react";
import { Container } from "@mui/material";
import * as React from "react";

import { SignUpForm } from "@/features/sign-up";
import { useCommon, useMediaDown } from "@/shared/lib";
import { StaticDialog } from "@/shared/ui";

import { SignUpPageFooter } from "./footer";

export const SignUpPage = () => {
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
        <SignUpForm />
      </StaticDialog>
    </Container>
  );
};

SignUpPage.footer = <SignUpPageFooter />;
