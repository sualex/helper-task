import { css } from "@emotion/react";
import { AppBar, AppBarProps, Toolbar, useTheme } from "@mui/material";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import * as React from "react";

import { useMediaDown } from "@/shared/lib";
import { HeaderActions } from "@/widgets/page-header/ui/actions/ui";
import { Logo } from "@/widgets/page-header/ui/logo";
import { Title } from "@/widgets/page-header/ui/title";

export function PageHeader({ position = "static", ...props }: AppBarProps) {
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
              flex-direction: row;
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
              <HeaderActions />
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
}
