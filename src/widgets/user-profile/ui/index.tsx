import { css } from "@emotion/react";
import {
  Avatar,
  LinearProgress,
  ListProps,
  Typography,
  useTheme,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import * as React from "react";

import { getErrorMessage } from "@/shared/lib/error";
import { Article } from "@/shared/ui";

import { useUser } from "../api";

export const UserProfile = ({ ...props }: ListProps) => {
  const router = useRouter();
  const theme = useTheme();

  const profile = useUser({
    slug: router?.query?.slug as string,
  });

  return profile?.error ? (
    <Typography variant="h5" alignSelf="center">
      {getErrorMessage(profile?.error)}
    </Typography>
  ) : (
    <Article spacing={3} css={css``}>
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
      {profile?.isLoading && <LinearProgress />}
      {!!profile?.data && <>{/**/}</>}
    </Article>
  );
};
