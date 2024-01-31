import { css } from "@emotion/react";
import { Avatar, AvatarProps, Skeleton, useTheme } from "@mui/material";
import * as React from "react";

import { ProfileDto } from "@/shared/api";

export const UserAvatarStatic = ({
  profile,
  size = 50,
  ...props
}: AvatarProps & {
  profile?: ProfileDto;
  size?: number;
}) => {
  const theme = useTheme();
  return (
    <Avatar
      sx={{ width: size, height: size }}
      css={css`
        &&& {
          color: ${theme?.palette?.common?.black};
          background-color: #f3f3f3;
          border: 1px solid #e6e6e6;
          font-size: ${size === 50 ? 18 : 36}px;
          font-weight: 400;
          line-height: ${size === 50 ? 25.2 : 50}px;
          letter-spacing: 0em;
          text-align: center;
        }
      `}
      {...props}
    >
      {profile?.name?.[0]?.toUpperCase()}
    </Avatar>
  );
};

export const UserAvatar = ({
  profile,
  size = 50,
  ...props
}: AvatarProps & {
  profile?: ProfileDto;
  size?: number;
}) => {
  return !profile ? (
    <Skeleton
      animation="pulse"
      variant="circular"
      sx={{ width: size, height: size }}
      css={css`
        background-color: rgb(243, 243, 243);
        //border: 1px solid #e6e6e6;
      `}
    />
  ) : (
    <UserAvatarStatic size={size} profile={profile} {...props} />
  );
};
