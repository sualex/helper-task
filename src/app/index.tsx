import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactNode } from "react";
import { SWRDevTools } from "swr-devtools";

import { RootLayout } from "@/widgets/layout";
import { PageHeader } from "@/widgets/page-header";

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
        <title>Yoldi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <SWRDevTools>
        <MuiProvider {...props}>
          <RootLayout>
            {header || <PageHeader />}
            <Component {...pageProps} />
            {footer || null}
          </RootLayout>
        </MuiProvider>
      </SWRDevTools>
    </>
  );
};

export default App;
