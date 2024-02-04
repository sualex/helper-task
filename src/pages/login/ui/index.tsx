import { css } from "@emotion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";

import { useMyProfile } from "@/entities/user";
import { schema } from "@/features/login/ui/login-form";
import { LoginFormSubmitButton } from "@/features/login/ui/login-form/ui/submit-button/ui";
import { LoginDto, authApi } from "@/shared/api";
import { useMediaDown } from "@/shared/lib";
import { useCommon } from "@/shared/lib/useCommon";
import { Main } from "@/shared/ui";
import { Footer } from "@/shared/ui/footer";
import { Form } from "@/widgets";
import { Email } from "@/widgets/auth/ui/email";
import { Password } from "@/widgets/auth/ui/password";
import { StaticDialog } from "@/widgets/dialog/static-dialog";

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
        <StaticDialog>
          <Form<LoginDto>
            autoFocusField="email"
            resolver={zodResolver(schema)}
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
            css={css`
              > * {
                padding: 0 ${pxToRem(30)};
              }
            `}
          >
            <Typography
              variant="h1"
              css={css`
                font-size: 30px;
                font-weight: 500;
                line-height: 42px;
                letter-spacing: 0em;
                text-align: left;
                padding: 0 ${pxToRem(30)};
              `}
            >
              Вход в Yoldi Agency
            </Typography>
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
