import { Button, StackProps, useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import * as React from "react";
import { FormContainer } from "react-hook-form-mui";

import { LoginDto } from "@/shared/api/yoldi";
import { useMediaDown } from "@/shared/lib";
import { getErrorMessage } from "@/shared/lib/error";
import { useLoginMutation } from "@/widgets/auth/login/api";
import NameElement from "@/widgets/auth/signup/ui/name-element/ui";

import LoginElement from "./login-element/ui";
import PasswordElement from "./password-element/ui";
import Title from "./title/ui";

export function SignupDialog({ ...props }: StackProps) {
  const theme = useTheme();
  const isMobile = useMediaDown("sm");

  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const loginMutation = useLoginMutation();

  return (
    <FormContainer
      onSuccess={async (loginDto: LoginDto) => {
        setIsFetching(true);
        setErrorMessage("");
        try {
          const result = await loginMutation?.trigger({
            requestParameters: {
              loginDto,
            },
          });
          console.log("xxxxxxxxxxxxxxxxxxxxxxx ", result);
        } catch (error) {
          setErrorMessage(await getErrorMessage(error));
        } finally {
          setIsFetching(false);
        }
      }}
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
      <Stack gap="1rem" padding="0 5px">
        {errorMessage && <Typography color="error">{errorMessage}</Typography>}
        <NameElement name="name" size="medium" />
        <LoginElement name="email" />
        <PasswordElement name="password" />
      </Stack>
      <Button
        type="submit"
        variant="primary"
        size="large"
        // disabled={isFetching}
        disabled
      >
        Войти
      </Button>
    </FormContainer>
  );
}
