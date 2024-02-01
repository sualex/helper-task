import Stack, { StackProps } from "@mui/material/Stack";
import * as React from "react";

import { LoginButton } from "@/entities/user/ui/login";
import { PageFooter, PageFooterText } from "@/widgets/page-footer";

export const SignUpPageFooter = ({ ...props }: StackProps) => {
  return (
    <PageFooter>
      <Stack direction="row" alignItems="center" spacing={1}>
        <PageFooterText>Уже есть аккаунт?</PageFooterText>
        <LoginButton href="/login" variant="link">
          Войти
        </LoginButton>
      </Stack>
    </PageFooter>
  );
};
