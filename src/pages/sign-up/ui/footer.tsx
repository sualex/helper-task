import Stack, { StackProps } from "@mui/material/Stack";
import * as React from "react";

import { LoginLink } from "@/features/login";
import { PageFooter, PageFooterText } from "@/widgets/page-footer";

export const SignUpPageFooter = ({ ...props }: StackProps) => {
  return (
    <PageFooter {...props}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <PageFooterText>Уже есть аккаунт?</PageFooterText>
        <LoginLink href="/login" variant="link">
          Войти
        </LoginLink>
      </Stack>
    </PageFooter>
  );
};
