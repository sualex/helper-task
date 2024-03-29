import { css } from "@emotion/react";
import { Toolbar, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import { StackProps } from "@mui/material/Stack";
import * as React from "react";

import { Footer } from "@/shared/ui/footer";

export * from "./text";

export function PageFooter({ children, ...props }: StackProps) {
  const theme = useTheme();
  return (
    <>
      <Footer
        css={css`
          background-color: ${theme?.palette?.common?.white};
          border-top: 1px solid ${theme?.palette?.strokesSecondary?.main};
        `}
        {...props}
      >
        <Toolbar
          css={css`
            min-height: 72px;
          `}
        >
          <Container
            component="nav"
            maxWidth="desktop"
            css={css`
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 0 ${theme?.spacing(2.5)};
            `}
          >
            {children}
          </Container>
        </Toolbar>
      </Footer>
    </>
  );
}
