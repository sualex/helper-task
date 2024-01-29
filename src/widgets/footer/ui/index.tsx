import { css } from "@emotion/react";
import { Toolbar, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import Stack, { StackProps } from "@mui/material/Stack";
import * as React from "react";

export function Footer({ children, ...props }: StackProps) {
  const theme = useTheme();
  return (
    <>
      <Stack
        component="footer"
        css={css`
          background-color: ${theme?.palette?.common?.white};
          height: 72px;
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
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0 ${theme?.spacing(2.5)};
            `}
          >
            {children}
          </Container>
        </Toolbar>
      </Stack>
    </>
  );
}
