import { css } from "@emotion/react";
import { Typography, useTheme } from "@mui/material";
import Stack, { StackProps } from "@mui/material/Stack";
import { useRouter } from "next/router";
import * as React from "react";

import { useUser } from "@/entities/user/model";
import { UserAvatar } from "@/entities/user/ui/avatar";
import { Article } from "@/shared/ui";

export const UserProfile = ({ ...props }: StackProps) => {
  const router = useRouter();
  const theme = useTheme();

  const profile = useUser({
    slug: router?.query?.slug as string,
  });

  return (
    <Article spacing={3} {...props}>
      <UserAvatar profile={profile?.data} size={100} />
      <Stack spacing={1}>
        <Typography
          variant="h1"
          css={css`
            font-size: 30px;
            font-weight: 500;
            line-height: 42px;
            letter-spacing: 0em;
            text-align: left;
          `}
        >
          {profile?.data?.name}
        </Typography>
        <Typography
          css={css`
            color: #838383;
            font-size: 16px;
            font-weight: 400;
            line-height: 26px;
            letter-spacing: 0em;
            text-align: left;
          `}
        >
          {profile?.data?.email}
        </Typography>
      </Stack>
      <Typography
        css={css`
          font-size: 16px;
          font-weight: 400;
          line-height: 26px;
          letter-spacing: 0em;
          text-align: left;
        `}
      >
        {profile?.data?.description}
      </Typography>
    </Article>
  );
};
