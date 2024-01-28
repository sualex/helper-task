import { css } from "@emotion/react";
import { StackProps } from "@mui/material/Stack";

import { Main } from "@/shared/ui";

export const RootLayout = ({ children, ...props }: StackProps) => {
  return (
    <Main
      css={css`
        min-height: 100vh;
        border: 8px solid crimson;
      `}
      {...props}
    >
      {children}
    </Main>
  );
};
