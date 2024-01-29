import { css } from "@emotion/react";
import { StackProps } from "@mui/material/Stack";

import { Section } from "@/shared/ui";

export const RootLayout = ({ children, ...props }: StackProps) => {
  return (
    <Section
      css={css`
        min-height: 100vh;
      `}
      {...props}
    >
      {children}
    </Section>
  );
};
