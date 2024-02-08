import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactNode } from "react";
import { SWRDevTools } from "swr-devtools";

import { Main } from "@/shared/ui";
import { PageHeader } from "@/widgets/page-header";

import { MuiProvider } from "./providers";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  const {
    header = null,
    footer = null,
    bgcolor = "transparent",
  } = Component as typeof Component & {
    header?: ReactNode;
    footer?: ReactNode;
    bgcolor?: string;
  };
  return (
    <>
      <Head>
        <title>Yoldi</title>
      </Head>
      <SWRDevTools>
        <MuiProvider {...props}>
          {header || <PageHeader />}
          <Main
            flex={1}
            sx={{
              bgcolor,
            }}
          >
            <Component {...pageProps} />
          </Main>
          {footer}
        </MuiProvider>
      </SWRDevTools>
    </>
  );
};

export default App;
