import { css } from "@emotion/react";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import * as React from "react";

import { useMyProfile } from "@/entities/user";
import { SignUpDto, authApi } from "@/shared/api";
import { useMediaDown } from "@/shared/lib";
import { Main } from "@/shared/ui";
import { AuthForm } from "@/widgets/auth";
import { Email } from "@/widgets/auth/ui/email";
import Name from "@/widgets/auth/ui/name/ui";
import { Password } from "@/widgets/auth/ui/password";
import { Submit } from "@/widgets/auth/ui/submit";
import { Dialog, DialogActions } from "@/widgets/dialog";

import { SignUpPageFooter } from "./footer";

export const SignUpPage = () => {
  const router = useRouter();
  const isMobile = useMediaDown("sm");
  const myProfile = useMyProfile();
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
        <Dialog open>
          <AuthForm<SignUpDto>
            onSuccess={async (signUpDto) => {
              await authApi?.signUp({
                signUpDto,
              });
              const newProfile = await myProfile?.mutate();
              router.push(`/profile/${newProfile?.slug}`);
            }}
          >
            <Stack
              spacing={2}
              css={css`
                padding: 0 5px;
              `}
            >
              <Name inputRef={(input) => input && input.focus()} />
              <Email />
              <Password />
            </Stack>
            <DialogActions>
              <Submit
                css={css`
                  flex: 1;
                `}
              >
                Создать аккаунт
              </Submit>
            </DialogActions>
          </AuthForm>
        </Dialog>
      </Container>
    </Main>
  );
};

SignUpPage.footer = <SignUpPageFooter />;
