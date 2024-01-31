import { useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useRouter } from "next/router";
import { useState } from "react";
import * as React from "react";
import { FormContainer, FormContainerProps } from "react-hook-form-mui";

import { authApi } from "@/shared/api";
import { SignUpDto } from "@/shared/api/yoldi";
import { useMediaDown } from "@/shared/lib";
import { getError } from "@/shared/lib/error";
import NameElement from "@/widgets/auth/signup/ui/name-element/ui";

import LoginElement from "./login-element/ui";
import PasswordElement from "./password-element/ui";

export const SignUpForm = ({ ...props }: FormContainerProps<SignUpDto>) => {
  const theme = useTheme();
  const isMobile = useMediaDown("sm");

  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const router = useRouter();

  return (
    <FormContainer<SignUpDto>
      onSuccess={async (signUpDto) => {
        setIsFetching(true);
        setErrorMessage("");
        try {
          await authApi?.signUp({
            signUpDto,
          });
          router.push("/");
        } catch (error) {
          setErrorMessage((await getError(error))?.message);
        } finally {
          setIsFetching(false);
        }
      }}
      FormProps={{
        id: "SignUpForm",
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
        <NameElement name="name" size="medium" />
        <LoginElement name="email" />
        <PasswordElement name="password" />
      </Stack>
    </FormContainer>
  );
};
