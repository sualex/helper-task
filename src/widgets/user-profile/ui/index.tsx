import { css } from "@emotion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Dialog, Skeleton, Typography, useTheme } from "@mui/material";
import Stack, { StackProps } from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/router";
import { useState } from "react";
import * as React from "react";

import { useUser } from "@/entities/user/model";
import { UserAvatar } from "@/entities/user/ui/avatar";
import { EditProfileButton } from "@/features/edit-profile";
import {
  SignUpFormSubmitButton,
  schema,
} from "@/features/edit-profile/ui/edit-profile-form";
import { LogoutButton } from "@/features/logout";
import { ProfileDto } from "@/shared/api";
import { useMediaDown } from "@/shared/lib";
import { useCommon } from "@/shared/lib/useCommon";
import { Article } from "@/shared/ui";
import { Footer } from "@/shared/ui/footer";
import { H1 } from "@/shared/ui/h1";
import { Form } from "@/widgets";
import { Email } from "@/widgets/auth/ui/email";
import Name from "@/widgets/auth/ui/name/ui";
import { Password } from "@/widgets/auth/ui/password";
import { StaticDialog } from "@/widgets/dialog/static-dialog";
import { useIsMyProfile } from "@/widgets/user-profile/model";

export const UserProfile = ({ ...props }: StackProps) => {
  const router = useRouter();

  const profile = useUser({
    slug: router?.query?.slug as string,
  });

  const isMyProfile = useIsMyProfile();

  const { pxToRem } = useCommon();

  const [isOpen, setIsOpen] = useState(false);

  const isMobile = useMediaDown("sm");

  const theme = useTheme();

  console.log("xxxxxxxxxxxxxxxxx ", profile?.data);

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
                <EditProfileButton
                  onClick={() => {
                    setIsOpen((isOpen) => !isOpen);
                  }}
                />
                <Dialog
                  open={isOpen}
                  fullScreen={isMobile}
                  scroll="body"
                  fullWidth
                  maxWidth={!isMobile && "galaxyTab2"}
                  PaperComponent={StaticDialog}
                  PaperProps={{
                    spacing: pxToRem(25),
                  }}
                >
                  <H1 padding={`0 ${pxToRem(30)}`}>Редактировать профиль</H1>
                  <Form<ProfileDto>
                    defaultValues={profile?.data}
                    autoFocusField="name"
                    resolver={zodResolver(schema)}
                    FormProps={{
                      style: {
                        gap: pxToRem(25),
                      },
                    }}
                    onSuccess={async (signUpDto) => {
                      // await authApi?.signUp({
                      //   signUpDto,
                      // });
                      // const newProfile = await myProfile?.mutate();
                      // router.push(`/profile/${newProfile?.slug}`);
                    }}
                  >
                    <Stack
                      spacing={pxToRem(15)}
                      css={css`
                        //padding: 0 5px;
                      `}
                    >
                      <Stack
                        css={css`
                          padding: 0 ${pxToRem(30)};
                        `}
                      >
                        <Name />
                      </Stack>
                      <Stack
                        css={css`
                          padding: 0 ${pxToRem(30)};
                        `}
                      >
                        <Email />
                      </Stack>
                      <Stack
                        css={css`
                          padding: 0 ${pxToRem(30)};
                        `}
                      >
                        <Password />
                      </Stack>
                    </Stack>
                    <Footer
                      css={css`
                        padding: 0 ${pxToRem(30)};
                      `}
                    >
                      <SignUpFormSubmitButton />
                    </Footer>
                  </Form>
                </Dialog>
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
