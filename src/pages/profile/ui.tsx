import { css } from "@emotion/react";
import { Container, useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
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
        <Stack
          css={css`
            position: relative;
            height: 200px;
            background-color: #f3f3f3;
            border-bottom: 1px solid #e6e6e6;
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
