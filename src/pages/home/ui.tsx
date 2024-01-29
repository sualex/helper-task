import { css } from "@emotion/react";
import { Button, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import type { NextPage } from "next";
import { useEffect } from "react";

import { AuthApi } from "@/shared/api";
import { Main } from "@/shared/ui";
import { Footer } from "@/widgets/footer";
import { Header } from "@/widgets/header";

export const HomePage: NextPage = () => {
  useEffect(() => {
    // ProfileApi.myProfile()
    //   .then((res) => {
    //     console.log("xxxxxxxxxxxxxxxxxxxxxx rrrrrrrrrrrrr ", res);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    AuthApi.login({
      loginDto: {
        email: "admin@admin.ru",
        password: "123456",
      },
    })
      .then((res) => {
        console.log("xxxxxxxxxxxxxxxxxxxxxx rrrrrrrrrrrrr ", res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
          border: 2px solid crimson;
        `}
      />
      <Footer>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography
            css={css`
              font-size: 16px;
              font-weight: 400;
              line-height: 26px;
              letter-spacing: 0em;
              text-align: left;
              color: #838383;
            `}
          >
            Уже есть аккаунт?
          </Typography>
          <Button href="/login" variant="link">
            Войти
          </Button>
        </Stack>
      </Footer>
    </>
  );
};
