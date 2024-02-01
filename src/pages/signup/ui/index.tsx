import { css } from "@emotion/react";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import * as React from "react";

import { useMyProfile } from "@/entities/user";
import { SignUpDto, authApi } from "@/shared/api";
import { useMediaDown } from "@/shared/lib";
import { Main } from "@/shared/ui";
import { Footer } from "@/shared/ui/footer";
import { Form } from "@/widgets";
import { Email } from "@/widgets/auth/ui/email";
import Name from "@/widgets/auth/ui/name/ui";
import { Password } from "@/widgets/auth/ui/password";
import { OkButton } from "@/widgets/dialog/ok-button";
import { StaticDialog } from "@/widgets/dialog/static-dialog";

import { SignUpPageFooter } from "./footer";

export const SignUpPage = () => {
  const router = useRouter();
  const isMobile = useMediaDown("sm");
  const myProfile = useMyProfile();
  return (
    <Main
      flex={1}
      css={css`
        border: 4px solid magenta;
      `}
    >
      <Container
        maxWidth="sm"
        disableGutters
        css={css`
          border: 2px solid green;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: ${isMobile ? "flex-start" : "center"};
        `}
      >
        <StaticDialog>
          <Form<SignUpDto>
            onSuccess={async (signUpDto) => {
              await authApi?.signUp({
                signUpDto,
              });
              const newProfile = await myProfile?.mutate();
              router.push(`/profile/${newProfile?.slug}`);
            }}
          >
            <Stack
              // spacing={2}
              css={css`
                //padding: 0 5px;
              `}
            >
              <Name inputRef={(input) => input && input.focus()} />
              <Email />
              <Password />
            </Stack>
            <Footer>
              <OkButton type="submit">Создать аккаунт</OkButton>
            </Footer>
          </Form>
        </StaticDialog>
      </Container>
    </Main>
  );
};

SignUpPage.footer = <SignUpPageFooter />;
