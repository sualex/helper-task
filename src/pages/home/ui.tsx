import { css } from "@emotion/react";
import { Container } from "@mui/material";

import { useCommon } from "@/shared/lib";
import { Main } from "@/shared/ui";
import { UserList } from "@/widgets/user-list";

export const HomePage = () => {
  const { theme } = useCommon();
  return (
    <Main
      flex={1}
      css={css`
        background-color: ${theme?.palette?.common?.white};
      `}
    >
      <Container maxWidth="md">
        <UserList />
      </Container>
    </Main>
  );
};
