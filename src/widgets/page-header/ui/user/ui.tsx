import { css } from "@emotion/react";
import { Button, useTheme } from "@mui/material";
import { StackProps } from "@mui/material/Stack";

import { useMyProfile } from "@/entities/user";
import { UserAvatar } from "@/entities/user/ui/avatar";
import { LoginButton } from "@/entities/user/ui/login";

export const HeaderUser = ({ ...props }: StackProps) => {
  const theme = useTheme();
  const myProfile = useMyProfile();
  return myProfile?.data ? (
    <Button
      href={`/profile/${myProfile?.data?.slug}`}
      endIcon={<UserAvatar profile={myProfile?.data} />}
      variant="link"
      css={css`
        color: ${theme?.palette?.common?.black};
        font-size: 16px;
        font-weight: 400;
        line-height: normal;
        letter-spacing: 0em;
        text-align: center;
        .MuiButton-endIcon {
          margin-left: 16px;
        }
      `}
    >
      {myProfile?.data?.name}
    </Button>
  ) : (
    <LoginButton />
  );
};
