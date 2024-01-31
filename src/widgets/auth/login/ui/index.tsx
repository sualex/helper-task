import { useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useState } from "react";
import * as React from "react";
import { FormContainer, FormContainerProps } from "react-hook-form-mui";

import { useMyProfile } from "@/entities/user";
import { authApi } from "@/shared/api";
import { LoginDto } from "@/shared/api/yoldi";
import { useMediaDown } from "@/shared/lib";
import { getError } from "@/shared/lib/error";

import LoginElement from "./login-element/ui";
import PasswordElement from "./password-element/ui";

export const LoginForm = ({ ...props }: FormContainerProps<LoginDto>) => {
  const theme = useTheme();
  const isMobile = useMediaDown("sm");

  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const router = useRouter();

  const { mutate } = useMyProfile();

  return (
    <FormContainer<LoginDto>
      onSuccess={async (loginDto) => {
        setIsFetching(true);
        setErrorMessage("");
        try {
          await authApi?.login({
            loginDto,
          });
          await mutate();
          router.push("/");
        } catch (error) {
          setErrorMessage((await getError(error))?.message);
        } finally {
          setIsFetching(false);
        }
      }}
      FormProps={{
        id: "LoginForm",
        style: {
          flex: isMobile ? 1 : "initial",
          display: "flex",
          flexDirection: "column",
          gap: "25px",
          // borderRadius: "4px",
          // padding: "30px",
          backgroundColor: theme.palette.common.white,
        },
      }}
      {...props}
    >
      <Stack gap="1rem" padding="0 5px">
        {errorMessage && <Typography color="error">{errorMessage}</Typography>}
        <LoginElement name="email" autoFocus />
        <PasswordElement name="password" />
      </Stack>
    </FormContainer>
  );
};
