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
  const isSm = useMediaDown("md");
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
          maxWidth="desktop"
          disableGutters={isSm}
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <Box
            css={css`
              position: relative;
              height: 200px;
            `}
          >
            <Image
              alt="Cover"
              src={isSm ? "/cover-small.png" : "/cover.png"}
              fill
            />
          </Box>
          <Container
            maxWidth="md"
            css={css`
              &&& {
                flex: 1;
                display: flex;
                flex-direction: column;
                // justify-content: ${isSm ? "flex-start" : "center"};
                padding: 0 ${isSm ? 20 : 0};
                margin-top: -50px;
              }
            `}
          >
            <UserProfile />
          </Container>
        </Container>
      </Main>
    </>
  );
};
