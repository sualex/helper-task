import Stack, { StackProps } from "@mui/material/Stack";
import * as React from "react";

import { SignUpLink } from "@/features/_sign-up";
import { PageFooter, PageFooterText } from "@/widgets/page-footer";

export const LoginPageFooter = ({ ...props }: StackProps) => {
  return (
    <PageFooter {...props}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <PageFooterText>Еще нет аккаунта?</PageFooterText>
        <SignUpLink variant="link" />
      </Stack>
    </PageFooter>
  );
};
