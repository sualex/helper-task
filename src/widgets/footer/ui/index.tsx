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
        <Toolbar>
          <Container
            component="nav"
            maxWidth="desktop"
            css={css`
              border: 1px dotted blue;
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0 ${theme?.spacing(2.5)};
            `}
          >
            <Stack
              component="nav"
              css={css`
                //border: 4px solid green;
                padding-right: 9.5px;
              `}
            >
              {children}
            </Stack>
          </Container>
        </Toolbar>
      </Stack>
    </>
  );
}
