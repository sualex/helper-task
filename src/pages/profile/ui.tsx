import { css } from "@emotion/react";
import { Box, Container, useTheme } from "@mui/material";
import Image from "next/image";
import * as React from "react";

import { useMediaDown } from "@/shared/lib";
import { Main } from "@/shared/ui";
import { UserProfile } from "@/widgets/user-profile";

export const ProfilePage = () => {
  const isSm = useMediaDown("md");
  const theme = useTheme();
  return (
    <Main
      flex={1}
      css={css`
        background-color: ${theme?.palette?.common?.white};
      `}
    >
      <Container
        maxWidth="desktop"
        disableGutters
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
            priority
          />
        </Box>
        <Container
          maxWidth="md"
          css={css`
            &&& {
              flex: 1;
              display: flex;
              flex-direction: column;
              padding: 0 ${isSm ? 20 : 0};
            }
          `}
        >
          <UserProfile
            css={css`
              &&& {
                margin-top: -50px;
              }
            `}
          />
        </Container>
      </Container>
    </Main>
  );
};
