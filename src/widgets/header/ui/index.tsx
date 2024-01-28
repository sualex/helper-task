import { css } from "@emotion/react";
import { AppBar, AppBarProps, Toolbar } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import * as React from "react";

import { useMediaDown } from "@/shared/lib";
import { Logo } from "@/widgets/header/ui/logo";

export function Header({
  position = "static",
  children,
  ...props
}: AppBarProps) {
  const isMobile = useMediaDown("sm");
  return (
    <>
      {position === "fixed" && <Toolbar />}
      <AppBar position={position} {...props}>
        <Toolbar>
          <Container
            component="nav"
            maxWidth="desktop"
            disableGutters={isMobile}
            css={css`
              border: 1px dotted yellow;
              display: flex;
              align-items: center;
              justify-content: space-between;
            `}
          >
            <Logo />
            <Stack
              component="nav"
              css={css`
                //border: 4px solid green;
              `}
            >
              {children}
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
