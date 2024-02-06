import { css } from "@emotion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/router";
import { useState } from "react";
import * as zod from "zod";

import { useMyProfile } from "@/entities/user";
import { Err } from "@/features/login/ui/login-form/ui/error";
import { LoginDto, authApi } from "@/shared/api";
import { useCommon } from "@/shared/lib";
import { requiredEmail, requiredString } from "@/shared/lib/validation";
import { Footer, Form, H1, IFormProps, Section } from "@/shared/ui";
import { Header } from "@/shared/ui/header";

import { Submit } from "./actions/submit";
import { Email } from "./email";
import { Password } from "./password";

export { Email, Password };

export function LoginForm({ ...props }: IFormProps<LoginDto>) {
  const router = useRouter();
  const { pxToRem } = useCommon();
  const myProfile = useMyProfile();
  const [isFetching, setIsFetching] = useState(false);
  return (
    <Form<LoginDto>
      autoFocusField="email"
      resolver={zodResolver(
        zod.object({
          email: requiredEmail(),
          password: requiredString(),
        })
      )}
      onSuccess={async (loginDto: LoginDto) => {
        try {
          setIsFetching(true);
          await authApi?.login({
            loginDto,
          });
        } finally {
          setIsFetching(false);
        }
        await myProfile?.mutate();
        router.push("/");
      }}
      {...props}
    >
      <Header>
        <H1 padding={`0 ${pxToRem(30)}`}>Вход в Yoldi Agency</H1>
      </Header>
      <Section
        spacing={pxToRem(15)}
        css={css`
          &&& > * {
            padding: 0 ${pxToRem(35)};
          }
        `}
      >
        <Err />
        <Email name="email" placeholder="E-mail" disabled={isFetching} />
        <Password name="password" placeholder="Пароль" disabled={isFetching} />
      </Section>
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
