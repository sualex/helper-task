import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactNode } from "react";
import { SWRDevTools } from "swr-devtools";

import { Header } from "@/widgets/header";
import { RootLayout } from "@/widgets/layout";

import { MuiProvider } from "./providers";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  const { header, footer } = Component as typeof Component & {
    header?: ReactNode;
    footer?: ReactNode;
  };
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SWRDevTools>
        <MuiProvider {...props}>
          <RootLayout>
            {header || <Header />}
            <Component {...pageProps} />
            {!!footer && footer}
          </RootLayout>
        </MuiProvider>
      </SWRDevTools>
    </>
  );
};

export default App;
