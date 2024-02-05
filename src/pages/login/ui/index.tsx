import { css } from "@emotion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Stack } from "@mui/material";
import { useRouter } from "next/router";

import { useMyProfile } from "@/entities/user";
import {
  Email,
  LoginFormSubmitButton,
  Password,
  loginFormValidationSchema,
} from "@/features/login";
import { LoginDto, authApi } from "@/shared/api";
import { useCommon, useMediaDown } from "@/shared/lib";
import { Footer, H1, Main } from "@/shared/ui";
import { Form, StaticDialog } from "@/widgets";

import { LoginPageFooter } from "./footer";

export const LoginPage = () => {
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
          <H1 padding={`0 ${pxToRem(30)}`}>Вход в Yoldi Agency</H1>
          <Form<LoginDto>
            autoFocusField="email"
            resolver={zodResolver(loginFormValidationSchema)}
            FormProps={{
              style: {
                gap: pxToRem(25),
              },
            }}
            onSuccess={async (loginDto) => {
              await authApi?.login({
                loginDto,
              });
              await myProfile?.mutate();
              router.push("/");
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
              <LoginFormSubmitButton />
            </Footer>
          </Form>
        </StaticDialog>
      </Container>
    </Main>
  );
};

LoginPage.footer = <LoginPageFooter />;
