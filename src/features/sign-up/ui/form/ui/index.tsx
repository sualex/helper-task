import { css } from "@emotion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useState } from "react";
import * as zod from "zod";

import { Email, Name, Password, useMyProfile } from "@/entities/user";
import { SignUpDto, authApi } from "@/shared/api";
import { useCommon } from "@/shared/lib";
import { requiredEmail, requiredString } from "@/shared/lib/validation";
import { Footer, Form, H1, IFormProps } from "@/shared/ui";
import { FieldSection } from "@/shared/ui/form/field-section";
import { Header } from "@/shared/ui/header";

import { Submit } from "./actions/submit";

export function SignUpForm({ ...props }: IFormProps<SignUpDto>) {
  const router = useRouter();
  const { pxToRem } = useCommon();
  const myProfile = useMyProfile();
  const [isFetching, setIsFetching] = useState(false);
  return (
    <Form<SignUpDto>
      autoFocusField="name"
      resolver={zodResolver(
        zod.object({
          name: requiredString(),
          email: requiredEmail(),
          password: requiredString(),
        })
      )}
      onSuccess={async (signUpDto) => {
        try {
          setIsFetching(true);
          await authApi?.signUp({
            signUpDto,
          });
          const newProfile = await myProfile?.mutate();
          router.push(`/profile/${newProfile?.slug}`);
        } finally {
          setIsFetching(false);
        }
      }}
      {...props}
    >
      <Header>
        <H1 padding={`0 ${pxToRem(30)}`}>Регистрация в Yoldi Agency</H1>
      </Header>
      <FieldSection>
        <Name name="name" placeholder="Имя" disabled={isFetching} />
        <Email name="email" placeholder="E-mail" disabled={isFetching} />
        <Password name="password" placeholder="Пароль" disabled={isFetching} />
      </FieldSection>
      <Footer
        css={css`
          padding: 0 ${pxToRem(30)};
        `}
      >
        <Submit disabled={isFetching} />
      </Footer>
    </Form>
  );
}
