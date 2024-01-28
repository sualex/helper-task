import { AppCacheProvider as MuiCacheProvider } from "@mui/material-nextjs/v14-pagesRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import type { AppProps } from "next/app";
import { PropsWithChildren } from "react";

import theme from "@/app/styles/theme";

export const MuiProvider = ({
  children,
  ...props
}: PropsWithChildren & AppProps) => {
  return (
    <MuiCacheProvider {...props}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </MuiCacheProvider>
  );
};
