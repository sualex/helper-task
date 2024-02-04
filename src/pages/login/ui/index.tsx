import { css } from "@emotion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";

import { useMyProfile } from "@/entities/user";
import { schema } from "@/features/login/ui/login-form/model";
import { LoginFormSubmitButton } from "@/features/login/ui/login-form/ui/submit-button/ui";
import { LoginDto, authApi } from "@/shared/api";
import { useMediaDown } from "@/shared/lib";
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
            onSuccess={async (loginDto) => {
              await authApi?.login({
                loginDto,
              });
              await myProfile?.mutate();
              router.push("/");
            }}
          >
            <Stack
              // spacing={2}
              css={css`
                padding: 0 5px;
              `}
            >
              <Email />
              <Password />
            </Stack>
            <Footer>
              <LoginFormSubmitButton />
            </Footer>
          </Form>
        </StaticDialog>
      </Container>
    </Main>
  );
};

LoginPage.footer = <LoginPageFooter />;
