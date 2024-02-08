import { css } from "@emotion/react";
import { Container } from "@mui/material";
import * as React from "react";

import { SignUpForm } from "@/features/sign-up";
import { useCommon, useMediaDown } from "@/shared/lib";
import { StaticDialog } from "@/shared/ui";

import { SignUpPageFooter } from "./footer";

SignUpPage.footer = <SignUpPageFooter />;

export function SignUpPage() {
  const sm = useMediaDown("sm");
  const { pxToRem } = useCommon();
  return (
    <Container
      maxWidth="sm"
      css={css`
        justify-content: ${sm ? "flex-start" : "center"};
      `}
    >
      <StaticDialog spacing={pxToRem(25)}>
        <SignUpForm />
      </StaticDialog>
    </Container>
  );
}
