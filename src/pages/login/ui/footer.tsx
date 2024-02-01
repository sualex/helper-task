import Stack, { StackProps } from "@mui/material/Stack";
import * as React from "react";

import { SignUpButton } from "@/entities/user/ui/sign-up";
import { PageFooter, PageFooterText } from "@/widgets/page-footer";

export const LoginPageFooter = ({ ...props }: StackProps) => {
  return (
    <PageFooter {...props}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <PageFooterText>Еще нет аккаунта?</PageFooterText>
        <SignUpButton variant="link" />
      </Stack>
    </PageFooter>
  );
};
