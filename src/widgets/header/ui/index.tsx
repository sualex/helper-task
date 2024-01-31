import { css } from "@emotion/react";
import { AppBar, AppBarProps, Toolbar, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import * as React from "react";

import { useMediaDown } from "@/shared/lib";
import { Logo } from "@/widgets/header/ui/logo";
import { Title } from "@/widgets/header/ui/title";
import { HeaderUser } from "@/widgets/header/ui/user/ui";

export function Header({
  position = "static",
  children,
  ...props
}: AppBarProps) {
  const theme = useTheme();
  const isSm = useMediaDown("md");
  return (
    <>
      {position === "fixed" && <Toolbar />}
      <AppBar position={position} {...props}>
        <Toolbar>
          <Container
            component="nav"
            maxWidth="desktop"
            css={css`
              display: flex;
              align-items: center;
              justify-content: space-between;
              padding: 0 ${theme?.spacing(2.5)};
            `}
          >
            <Stack direction="row" alignItems="center" spacing={2.5}>
              <Logo />
              {!isSm && <Title />}
            </Stack>
            <Stack
              component="nav"
              css={css`
                //border: 4px solid green;
                padding-right: 9.5px;
              `}
            >
              <HeaderUser />
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
