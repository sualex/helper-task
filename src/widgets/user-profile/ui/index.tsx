import { css } from "@emotion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Button,
  Dialog,
  Skeleton,
  Stack,
  StackProps,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { useRouter } from "next/router";
import { useState } from "react";
import { TextFieldElement } from "react-hook-form-mui";

import { useUser } from "@/entities/user/model";
import { UserAvatar } from "@/entities/user/ui/avatar";
import { EditProfileLink } from "@/features/edit-profile";
import {
  SignUpFormSubmitButton,
  editProfileFormSchema,
} from "@/features/edit-profile";
import { Email } from "@/features/login";
import { LogoutButton } from "@/features/logout";
import { Name } from "@/features/sign-up";
import { ProfileDto } from "@/shared/api";
import { useCommon, useMediaDown } from "@/shared/lib";
import { Article, Footer, H1 } from "@/shared/ui";
import { Form, StaticDialog } from "@/widgets";
import { useIsMyProfile } from "@/widgets/user-profile/model";

export const UserProfile = ({ ...props }: StackProps) => {
  const { pxToRem, theme } = useCommon();
  const isMobile = useMediaDown("sm");

  const router = useRouter();
  const profile = useUser({
    slug: router?.query?.slug as string,
  });
  const isMyProfile = useIsMyProfile();
  const [isOpen, setIsOpen] = useState(false);

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
                    color: ${theme?.palette?.gray?.main};
                    font-size: 16px;
                    font-weight: 400;
                    line-height: normal;
                    letter-spacing: 0em;
                  `}
                >
                  {profile?.data?.email}
                </Typography>
              </Stack>
            </Grid>
            {isMyProfile && (
              <Grid xs={12} md={4}>
                <EditProfileLink
                  onClick={() => {
                    setIsOpen((isOpen) => !isOpen);
                  }}
                />
                <Dialog
                  open={isOpen}
                  fullScreen={isMobile}
                  scroll={!isMobile ? "body" : "paper"}
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
                    resolver={zodResolver(editProfileFormSchema)}
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
