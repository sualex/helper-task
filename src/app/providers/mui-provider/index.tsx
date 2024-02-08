import { css } from "@emotion/react";
import { GlobalStyles } from "@mui/material";
import { AppCacheProvider as MuiCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { PropsWithChildren, useEffect, useState } from "react";

import { theme } from "@/app/styles/theme";

export const MuiProvider = ({
  children,
  ...props
}: PropsWithChildren & AppProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <MuiCacheProvider {...props}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles
          styles={css`
            #__next {
              visibility: ${!mounted ? "hidden" : "visible"};
              min-height: 100vh;
              display: flex;
              flex-direction: column;
            }
          `}
        />
        {children}
      </MuiThemeProvider>
    </MuiCacheProvider>
  );
};
