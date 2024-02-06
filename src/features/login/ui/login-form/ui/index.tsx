import { css } from "@emotion/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Stack } from "@mui/material";
import { useRouter } from "next/router";

import { useMyProfile } from "@/entities/user";
import { LoginDto, authApi } from "@/shared/api";
import { useCommon } from "@/shared/lib";
import { Footer, Form, IFormProps } from "@/shared/ui";

import { schema } from "../model";
import { Submit } from "./actions/submit";
import { Email } from "./email";
import { Password } from "./password";

export { Email, Password };

export function LoginForm({ children, ...props }: IFormProps<LoginDto>) {
  const router = useRouter();
  const { pxToRem } = useCommon();
  const myProfile = useMyProfile();
  return (
    <Form<LoginDto>
      autoFocusField="email"
      resolver={zodResolver(schema)}
      FormProps={{
        style: {
          gap: pxToRem(25),
        },
      }}
      onSuccess={async (loginDto) => {
        await authApi?.login({
          loginDto,
        });
        await myProfile?.mutate();
        router.push("/");
      }}
      {...props}
    >
      <Stack spacing={pxToRem(15)}>{children}</Stack>
      <Footer
        css={css`
          padding: 0 ${pxToRem(30)};
        `}
      >
        <Submit />
      </Footer>
    </Form>
  );
}
