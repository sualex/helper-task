import { css } from "@emotion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import * as React from "react";

import { useMyProfile } from "@/entities/user";
import { Email, Password } from "@/features/login";
import {
  Name,
  SignUpFormSubmitButton,
  signUpFormValidationSchema,
} from "@/features/sign-up";
import { SignUpDto, authApi } from "@/shared/api";
import { useCommon, useMediaDown } from "@/shared/lib";
import { Footer, H1, Main } from "@/shared/ui";
import { Form, StaticDialog } from "@/widgets";

import { SignUpPageFooter } from "./footer";

export const SignUpPage = () => {
  const router = useRouter();
  const isMobile = useMediaDown("sm");
  const myProfile = useMyProfile();
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
          <H1 padding={`0 ${pxToRem(30)}`}>Регистрация в Yoldi Agency</H1>
          <Form<SignUpDto>
            autoFocusField="name"
            resolver={zodResolver(signUpFormValidationSchema)}
            FormProps={{
              style: {
                gap: pxToRem(25),
              },
            }}
            onSuccess={async (signUpDto) => {
              await authApi?.signUp({
                signUpDto,
              });
              const newProfile = await myProfile?.mutate();
              router.push(`/profile/${newProfile?.slug}`);
            }}
          >
            <Stack
              spacing={pxToRem(15)}
              css={css`
                padding: 0 5px;
              `}
            >
              <Stack
                css={css`
                  padding: 0 ${pxToRem(30)};
                `}
              >
                <Name />
              </Stack>
              <Stack
                css={css`
                  padding: 0 ${pxToRem(30)};
                `}
              >
                <Email />
              </Stack>
              <Stack
                css={css`
                  padding: 0 ${pxToRem(30)};
                `}
              >
                <Password />
              </Stack>
            </Stack>
            <Footer
              css={css`
                padding: 0 ${pxToRem(30)};
              `}
            >
              <SignUpFormSubmitButton />
            </Footer>
          </Form>
        </StaticDialog>
      </Container>
    </Main>
  );
};

SignUpPage.footer = <SignUpPageFooter />;
