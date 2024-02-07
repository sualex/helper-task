import { css } from "@emotion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import Stack from "@mui/material/Stack";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction, useState } from "react";
import * as zod from "zod";

import {
  Description,
  Name,
  Slug,
  useMyProfile,
  useUser,
} from "@/entities/user";
import { Cancel } from "@/features/edit-profile/ui/form/ui/actions/cancel";
import { UpdateProfileDto, profileApi } from "@/shared/api";
import { useCommon } from "@/shared/lib";
import { nullableString, requiredString } from "@/shared/lib/validation";
import { Footer, Form, H1, IFormProps } from "@/shared/ui";
import { FieldSection } from "@/shared/ui/form/field-section";
import { Header } from "@/shared/ui/header";

import { Submit } from "./actions/submit";

export function EditProfileForm({
  setIsOpen,
  ...props
}: IFormProps<UpdateProfileDto> & {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const router = useRouter();
  const { pxToRem } = useCommon();
  const [isFetching, setIsFetching] = useState(false);

  const profile = useUser();
  const myProfile = useMyProfile();

  return (
    <Form<UpdateProfileDto>
      autoFocusField="name"
      resolver={zodResolver(
        zod.object({
          name: requiredString(),
          slug: requiredString(),
          description: nullableString(),
        })
      )}
      onSuccess={async (updateProfileDto) => {
        try {
          setIsFetching(true);
          const newProfile = await profileApi?.updateMyProfile({
            updateProfileDto,
          });
          if (newProfile?.slug !== profile?.data?.slug) {
            await myProfile?.mutate();
            router.push(`/profile/${newProfile?.slug}`);
            return;
          }
          await profile?.mutate();
          setIsOpen(false);
        } finally {
          setIsFetching(false);
        }
      }}
      {...props}
    >
      <Header>
        <H1 padding={`0 ${pxToRem(30)}`}>Редактировать профиль</H1>
      </Header>
      <FieldSection gutter={30}>
        <Stack>
          <Name
            required
            name="name"
            label="Имя"
            placeholder=""
            InputProps={{}}
            disabled={isFetching}
          />
        </Stack>
        <Stack>
          <Slug
            required
            name="slug"
            label="Адрес профиля"
            placeholder=""
            disabled={isFetching}
          />
        </Stack>
        <Stack>
          <Description
            name="description"
            label="Описание"
            placeholder=""
            rows={5}
            disabled={isFetching}
          />
        </Stack>
      </FieldSection>
      <Footer
        direction="row"
        spacing={pxToRem(10)}
        justifyContent="space-between"
        css={css`
          padding: 0 ${pxToRem(30)};
        `}
      >
        <Cancel fullWidth onClick={() => setIsOpen(false)} />
        <Submit disabled={isFetching} fullWidth />
      </Footer>
    </Form>
  );
}
