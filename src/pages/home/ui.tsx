import { css } from "@emotion/react";
import { Button, Container, useTheme } from "@mui/material";
import type { NextPage } from "next";

import { useMediaDown } from "@/shared/lib";
import { Main } from "@/shared/ui";
import { Header } from "@/widgets/header";
import { UserList } from "@/widgets/user-list";

export const HomePage: NextPage = () => {
  const isMobile = useMediaDown("sm");
  const theme = useTheme();
  return (
    <>
      <Header>
        <Button
          href="/login"
          css={css`
            width: 114px;
          `}
        >
          Войти
        </Button>
      </Header>
      <Main
        flex={1}
        css={css`
          background-color: ${theme?.palette?.common?.white};
        `}
      >
        <Container
          maxWidth="md"
          css={css`
            &&& {
              flex: 1;
              display: flex;
              flex-direction: column;
              // justify-content: ${isMobile ? "flex-start" : "center"};
              padding: 0 ${isMobile ? 20 : 0};
            }
          `}
        >
          <UserList />
        </Container>
      </Main>
    </>
  );
};
