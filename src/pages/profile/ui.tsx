import { css } from "@emotion/react";
import { Box, Button, Container, useTheme } from "@mui/material";
import type { NextPage } from "next";
import Image from "next/image";
import * as React from "react";

import { useMediaDown } from "@/shared/lib";
import { Main } from "@/shared/ui";
import { Header } from "@/widgets/header";
import { UserProfile } from "@/widgets/user-profile";

export const ProfilePage: NextPage = () => {
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
      <Box
        css={css`
          position: relative;
          height: 200px;
        `}
      >
        <Image alt="Logo" src="/cover.png" fill />
      </Box>
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
              margin-top: -50px;
            }
          `}
        >
          <UserProfile />
        </Container>
      </Main>
    </>
  );
};
