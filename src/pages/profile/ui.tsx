import { css } from "@emotion/react";
import { Container, useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import * as React from "react";

import { useMediaDown } from "@/shared/lib";
import { UserProfile } from "@/widgets/user-profile";

export const ProfilePage = () => {
  const isSm = useMediaDown("md");
  const theme = useTheme();
  return (
    <Container maxWidth="desktop">
      <Stack
        css={css`
          position: relative;
          height: 200px;
          background-color: ${theme?.palette?.backgroundSecondary?.main};
          border-bottom: 1px solid ${theme?.palette?.strokesSecondary?.main};
        `}
      >
        {/*<Image*/}
        {/*  alt="Cover"*/}
        {/*  src={isSm ? "/cover-small.png" : "/cover.png"}*/}
        {/*  fill*/}
        {/*  priority*/}
        {/*/>*/}
      </Stack>
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
        <UserProfile />
      </Container>
    </Container>
  );
};

ProfilePage.bgcolor = "common.white";
