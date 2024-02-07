import { css } from "@emotion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import * as zod from "zod";

import { Name, useMyProfile } from "@/entities/user";
import { Cancel } from "@/features/edit-profile/ui/form/ui/actions/cancel";
import { UpdateProfileDto, profileApi } from "@/shared/api";
import { useCommon } from "@/shared/lib";
import { requiredEmail, requiredString } from "@/shared/lib/validation";
import { Footer, Form, H1, IFormProps } from "@/shared/ui";
import { FieldSection } from "@/shared/ui/form/field-section";
import { Header } from "@/shared/ui/header";

import { Submit } from "./actions/submit";

export function EditProfileForm({ ...props }: IFormProps<UpdateProfileDto>) {
  const { pxToRem } = useCommon();
  const myProfile = useMyProfile();
  const [isFetching, setIsFetching] = useState(false);
  return (
    <Form<UpdateProfileDto>
      autoFocusField="name"
      resolver={zodResolver(
        zod.object({
          email: requiredEmail(),
          password: requiredString(),
        })
      )}
      onSuccess={async (updateProfileDto) => {
        try {
          setIsFetching(true);
          await profileApi?.updateMyProfile({
            updateProfileDto,
          });
          await myProfile?.mutate();
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
            name="name"
            label="Имя"
            placeholder=""
            InputProps={{}}
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
        <Cancel fullWidth />
        <Submit disabled={isFetching} fullWidth />
      </Footer>
    </Form>
  );
}
