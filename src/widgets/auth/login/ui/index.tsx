import { Button, StackProps, useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import * as React from "react";
import { FormContainer } from "react-hook-form-mui";

import { useMediaDown } from "@/shared/lib";

import LoginElement from "./login-element/ui";
import PasswordElement from "./password-element/ui";
import Title from "./title/ui";

export function LoginDialog({ ...props }: StackProps) {
  const theme = useTheme();
  const isMobile = useMediaDown("sm");

  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  // const onSuccess = useCallback(async ({ phone, password }: ISignInQuery) => {
  //   try {
  //     setIsFetching(true);
  //     const { error } = await signIn({
  //       query: { phone, password },
  //     });
  //     if (error) {
  //       setErrorMessage(error);
  //     } else {
  //       const deck = await getDeck();
  //       console.log("xxxxxxxxxxxxxxxx deckkkkkkkkkkkk ", deck);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setIsFetching(false);
  //   }
  // }, []);

  return (
    <FormContainer
      // onSuccess={onSuccess}
      FormProps={{
        style: {
          flex: isMobile ? 1 : "initial",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          // borderRadius: "4px",
          padding: "30px",
          backgroundColor: theme.palette.common.white,
        },
      }}
    >
      <Title />
      {errorMessage && <Typography color="error">{errorMessage}</Typography>}
      <Stack gap="1rem" padding="0 5px">
        <LoginElement name="email" />
        <PasswordElement name="password" />
      </Stack>
      <Button
        type="submit"
        variant="primary"
        size="large"
        disabled={isFetching}
      >
        Войти
      </Button>
    </FormContainer>
  );
}
