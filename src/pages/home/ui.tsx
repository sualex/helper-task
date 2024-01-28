import { css } from "@emotion/react";
import { Button } from "@mui/material";
import type { NextPage } from "next";

import { Main } from "@/shared/ui";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export const HomePage: NextPage = () => {
  return (
    <>
      <Header>
        <Button
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
          border: 2px solid crimson;
        `}
      />
      <Footer />
    </>
  );
};
