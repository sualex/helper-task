import { Button, useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { PropsWithChildren, useState } from "react";
import * as React from "react";
import {
  FieldValues,
  FormContainer,
  FormContainerProps,
} from "react-hook-form-mui";

import { authApi } from "@/shared/api";
import { LoginDto } from "@/shared/api/yoldi";
import { useMediaDown } from "@/shared/lib";
import { getError } from "@/shared/lib/error";

import LoginElement from "./login-element/ui";
import PasswordElement from "./password-element/ui";
import Title from "./title/ui";

const LoginFormContainer = <TFieldValues extends FieldValues = LoginDto>(
  props: PropsWithChildren<FormContainerProps<TFieldValues>>
) => <FormContainer {...props} />;

export function LoginForm({ ...props }) {
  const theme = useTheme();
  const isMobile = useMediaDown("sm");

  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const router = useRouter();

  return (
    <LoginFormContainer
      onSuccess={async (loginDto) => {
        setIsFetching(true);
        setErrorMessage("");
        try {
          await authApi?.login({
            loginDto,
          });
          router.push("/");
        } catch (error) {
          setErrorMessage((await getError(error))?.message);
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
    </LoginFormContainer>
  );
}
