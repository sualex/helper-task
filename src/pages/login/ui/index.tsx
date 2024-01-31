import { css } from "@emotion/react";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import * as React from "react";

import { useMediaDown } from "@/shared/lib";
import { Main } from "@/shared/ui";
import { LoginForm } from "@/widgets/auth";
import { Email, Password, Submit, Title } from "@/widgets/auth/login";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@/widgets/dialog";

import { LoginPageFooter } from "./footer";

export const LoginPage = () => {
  const isMobile = useMediaDown("sm");
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
          <LoginForm>
            <DialogTitle>
              <Title />
            </DialogTitle>
            <DialogContent>
              <Stack
                spacing={2}
                css={css`
                  padding: 0 5px;
                `}
              >
                {/*{errorMessage && (*/}
                {/*  <Typography color="error">{errorMessage}</Typography>*/}
                {/*)}*/}
                <Email />
                <Password />
              </Stack>
            </DialogContent>
            <DialogActions>
              <Submit
                css={css`
                  flex: 1;
                `}
              />
            </DialogActions>
          </LoginForm>
        </Dialog>
      </Container>
    </Main>
  );
};

LoginPage.footer = <LoginPageFooter />;
