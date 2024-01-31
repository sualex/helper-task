import { css } from "@emotion/react";
import { Avatar, Skeleton, Typography, useTheme } from "@mui/material";
import Stack, { StackProps } from "@mui/material/Stack";
import { useRouter } from "next/router";
import * as React from "react";

import { Article } from "@/shared/ui";

import { useUser } from "../api";

export const UserProfile = ({ ...props }: StackProps) => {
  const router = useRouter();
  const theme = useTheme();

  const profile = useUser({
    slug: router?.query?.slug as string,
  });

  return (
    <Article spacing={3} {...props}>
      {profile?.data ? (
        <Skeleton
          animation="wave"
          variant="circular"
          width={100}
          height={100}
          css={css`
            background-color: #f3f3f3;
            border: 1px solid #e6e6e6;
          `}
        />
      ) : (
        <Avatar
          sx={{ width: 100, height: 100 }}
          css={css`
            &&& {
              color: ${theme?.palette?.common?.black};
              background-color: #f3f3f3;
              border: 1px solid #e6e6e6;
              font-size: 36px;
              font-weight: 400;
              line-height: 50px;
              letter-spacing: 0em;
              text-align: center;
            }
          `}
        >
          {profile?.data?.name?.[0]}
        </Avatar>
      )}
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
