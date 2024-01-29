import type { AppProps } from "next/app";
import Head from "next/head";
import { SWRDevTools } from "swr-devtools";

import { RootLayout } from "@/widgets/layout";

import { MuiProvider } from "./providers";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <SWRDevTools>
        <MuiProvider {...props}>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </MuiProvider>
      </SWRDevTools>
    </>
  );
};

export default App;
