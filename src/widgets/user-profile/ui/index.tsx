import { css } from "@emotion/react";
import { Skeleton, Stack, StackProps, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

import { useUser } from "@/entities/user/model";
import { UserAvatar } from "@/entities/user/ui/avatar";
import { EditProfileLink } from "@/features/edit-profile";
import { LogoutLink } from "@/features/logout";
import { useCommon, useMediaDown } from "@/shared/lib";
import { Article, H1 } from "@/shared/ui";
import { useIsMyProfile } from "@/widgets/user-profile/model";

export const UserProfile = ({ ...props }: StackProps) => {
  const { pxToRem, theme } = useCommon();
  const sm = useMediaDown("md");
  const profile = useUser();
  const isMyProfile = useIsMyProfile();
  return (
    <Article
      spacing={pxToRem(35)}
      css={css`
        margin-top: -50px;
      `}
      {...props}
    >
      <Stack>
        <UserAvatar profile={profile?.data} size={100} />
      </Stack>
      <Stack spacing={pxToRem(60)}>
        <Stack>
          <Grid container rowSpacing="8px">
            <Grid xs={12} md={9}>
              <Stack spacing={1}>
                <H1 lineHeight="42px">
                  {profile ? profile?.data?.name : <Skeleton />}
                </H1>
                <Typography
                  css={css`
                    color: ${theme?.palette?.gray?.main};
                    font-size: 16px;
                    font-weight: 400;
                    line-height: 25.6px;
                    letter-spacing: 0em;
                  `}
                >
                  {profile?.data?.email}
                </Typography>
              </Stack>
            </Grid>
            {isMyProfile && (
              <Grid xs={12} md={3}>
                <EditProfileLink
                  css={css`
                    width: ${sm ? "auto" : "100%"};
                  `}
                />
              </Grid>
            )}
            {profile?.data?.description && (
              <Grid xs={12} md={9}>
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
        {isMyProfile && <LogoutLink />}
      </Stack>
      <div />
    </Article>
  );
};
