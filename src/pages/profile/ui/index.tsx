import { css } from "@emotion/react";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import * as React from "react";

import { useCommon, useMediaDown } from "@/shared/lib";
import { UserProfile } from "@/widgets/user-profile";

ProfilePage.bgcolor = "common.white";

export function ProfilePage() {
  const sm = useMediaDown("md");
  const { theme, pxToRem } = useCommon();
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
          padding: 0 ${pxToRem(sm ? 30 : 0)};
        `}
      >
        <UserProfile />
      </Container>
    </Container>
  );
}
