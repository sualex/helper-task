import { css } from "@emotion/react";
import { Container, useTheme } from "@mui/material";

import { useMediaDown } from "@/shared/lib";
import { Main } from "@/shared/ui";
import { UserList } from "@/widgets/user-list";

export const HomePage = () => {
  const isMobile = useMediaDown("sm");
  const theme = useTheme();
  return (
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
            padding: 0 ${isMobile ? 20 : 0};
          }
        `}
      >
        <UserList />
      </Container>
    </Main>
  );
};
