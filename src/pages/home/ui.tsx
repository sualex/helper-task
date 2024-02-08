import { css } from "@emotion/react";
import { Container } from "@mui/material";

import { useCommon, useMediaDown } from "@/shared/lib";
import { UserList } from "@/widgets/user-list";

export const HomePage = () => {
  const { pxToRem } = useCommon();
  const sm = useMediaDown("md");
  return (
    <Container
      maxWidth="md"
      css={css`
        padding: 0 ${pxToRem(sm ? 20 : 0)};
      `}
    >
      <UserList />
    </Container>
  );
};

HomePage.bgcolor = "common.white";
