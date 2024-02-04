import { css } from "@emotion/react";
import { Button, Skeleton, Typography } from "@mui/material";
import Stack, { StackProps } from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/router";
import * as React from "react";

import { useUser } from "@/entities/user/model";
import { UserAvatar } from "@/entities/user/ui/avatar";
import { LogoutButton } from "@/features/logout";
import { Article } from "@/shared/ui";
import IconPenSolid from "@/shared/ui/icons/pen-solid.svg";
import { useIsMyProfile } from "@/widgets/user-profile/model";

export const UserProfile = ({ ...props }: StackProps) => {
  const router = useRouter();

  const profile = useUser({
    slug: router?.query?.slug as string,
  });

  const isMyProfile = useIsMyProfile();

  return (
    <Article spacing={3} {...props}>
      <UserAvatar profile={profile?.data} size={100} />
      <Stack spacing="60px">
        <Stack>
          <Grid container rowSpacing="8px">
            <Grid xs={12} md={8}>
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
                  {profile ? profile?.data?.name : <Skeleton />}
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
            </Grid>
            {isMyProfile && (
              <Grid xs={12} md={4}>
                <Button variant="secondary" startIcon={<IconPenSolid />}>
                  Редактировать
                </Button>
              </Grid>
            )}
            {profile?.data?.description && (
              <Grid xs={12} md={8}>
                <Typography
                  css={css`
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 26px;
                    letter-spacing: 0em;
                    text-align: left;
                    padding-top: 22px;
                  `}
                >
                  {profile?.data?.description}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Stack>
        {isMyProfile && <LogoutButton />}
      </Stack>
    </Article>
  );
};
