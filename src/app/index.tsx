import type { AppProps } from "next/app";
import Head from "next/head";

import { RootLayout } from "@/widgets/layout";

import { MuiProvider } from "./providers";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <MuiProvider {...props}>
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </MuiProvider>
    </>
  );
};

export default App;
