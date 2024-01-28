import { css } from "@emotion/react";
import { Button } from "@mui/material";
import type { NextPage } from "next";

import { Header } from "@/widgets/header";

export const HomePage: NextPage = () => (
  <Header>
    <Button
      css={css`
        width: 114px;
      `}
    >
      Войти
    </Button>
  </Header>
);
