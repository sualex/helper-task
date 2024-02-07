import { css } from "@emotion/react";
import { Button, ButtonProps } from "@mui/material";
import { useRouter } from "next/router";
import * as React from "react";

import { useMyProfile } from "@/entities/user";
import { authApi } from "@/shared/api";
import IconSignOutAltSolid from "@/shared/ui/icons/sign-out-alt-solid.svg";

export const LogoutLink = ({ ...props }: ButtonProps) => {
  const router = useRouter();
  const myProfile = useMyProfile();
  return (
    <Button
      variant="secondary"
      startIcon={<IconSignOutAltSolid />}
      css={css`
        align-self: flex-start;
      `}
      onClick={() => {
        authApi?.logout().then(async () => {
          await myProfile?.mutate(() => undefined);
          router?.push("/");
        });
      }}
      {...props}
    >
      Выйти
    </Button>
  );
};
