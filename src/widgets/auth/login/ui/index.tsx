import { css } from "@emotion/react";
import { Typography, useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import { useState } from "react";
import * as React from "react";
import { FormContainer, FormContainerProps } from "react-hook-form-mui";

import { useMyProfile } from "@/entities/user";
import { authApi } from "@/shared/api";
import { LoginDto } from "@/shared/api/yoldi";
import { useMediaDown } from "@/shared/lib";
import { getError } from "@/shared/lib/error";
import { Email, Password, Submit, Title } from "@/widgets/auth/login";
import { DialogActions, DialogContent, DialogTitle } from "@/widgets/dialog";

export const LoginForm = ({
  children,
  ...props
}: FormContainerProps<LoginDto>) => {
  const theme = useTheme();
  const isMobile = useMediaDown("sm");

  const [isFetching, setIsFetching] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const router = useRouter();

  const myProfile = useMyProfile();

  return (
    <FormContainer<LoginDto>
      onSuccess={async (loginDto) => {
        setIsFetching(true);
        setErrorMessage("");
        try {
          await authApi?.login({
            loginDto,
          });
          await myProfile?.mutate();
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
          // gap: "25px",
          // borderRadius: "4px",
          // padding: "30px",
          backgroundColor: theme.palette.common.white,
        },
      }}
      {...props}
    >
      <DialogTitle>
        <Title />
      </DialogTitle>
      <DialogContent>
        <Stack
          spacing={2}
          css={css`
            padding: 0 5px;
          `}
        >
          {errorMessage && (
            <Typography color="error">{errorMessage}</Typography>
          )}
          <Email />
          <Password />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Submit
          css={css`
            flex: 1;
          `}
        />
      </DialogActions>
    </FormContainer>
  );
};
