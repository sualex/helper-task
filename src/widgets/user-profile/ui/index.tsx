import { css } from "@emotion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Dialog, Skeleton, Typography, useTheme } from "@mui/material";
import Stack, { StackProps } from "@mui/material/Stack";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/router";
import { useState } from "react";
import * as React from "react";
import { TextFieldElement } from "react-hook-form-mui";

import { useUser } from "@/entities/user/model";
import { UserAvatar } from "@/entities/user/ui/avatar";
import { EditProfileButton } from "@/features/edit-profile";
import {
  SignUpFormSubmitButton,
  schema,
} from "@/features/edit-profile/ui/edit-profile-form";
import { Email } from "@/features/login/ui/login-form/ui/email";
import { LogoutButton } from "@/features/logout";
import Name from "@/features/sign-up/ui/sign-up-form/ui/name/ui";
import { ProfileDto } from "@/shared/api";
import { useMediaDown } from "@/shared/lib";
import { useCommon } from "@/shared/lib/useCommon";
import { Article } from "@/shared/ui";
import { Footer } from "@/shared/ui/footer";
import { H1 } from "@/shared/ui/h1";
import { Form } from "@/widgets";
import { StaticDialog } from "@/widgets/static-dialog";
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

  return (
    <Article spacing={3} {...props}>
      <UserAvatar profile={profile?.data} size={100} />
      <Stack spacing="60px">
        <Stack>
          <Grid container rowSpacing="8px">
            <Grid xs={12} md={8}>
              <Stack spacing={1}>
                <H1>{profile ? profile?.data?.name : <Skeleton />}</H1>
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
                        <Name label="Имя" placeholder="" InputProps={{}} />
                      </Stack>
                      <Stack
                        css={css`
                          padding: 0 ${pxToRem(30)};
                        `}
                      >
                        <Email label="Адрес профиля" InputProps={{}} />
                      </Stack>
                      <Stack
                        css={css`
                          padding: 0 ${pxToRem(30)};
                        `}
                      >
                        <TextFieldElement
                          name="description"
                          label="Описание"
                          multiline
                          rows={5}
                          css={css`
                            &&& {
                              .MuiInputBase-root {
                                padding-left: 8px;
                                padding-right: 8px;
                              }
                            }
                          `}
                        />
                      </Stack>
                    </Stack>
                    <Footer
                      direction="row"
                      spacing={pxToRem(10)}
                      justifyContent="space-between"
                      css={css`
                        padding: 0 ${pxToRem(30)};
                      `}
                    >
                      <Button
                        variant="secondary"
                        size="large"
                        fullWidth
                        onClick={() => {
                          setIsOpen(false);
                        }}
                      >
                        Отмена
                      </Button>
                      <SignUpFormSubmitButton fullWidth />
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
