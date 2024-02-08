import type { AppProps } from "next/app";
import { ReactNode } from "react";
import { SWRDevTools } from "swr-devtools";

import { PageHeader } from "@/widgets/page-header";

import { MuiProvider } from "./providers";

const App = (props: AppProps) => {
  const { Component, pageProps } = props;
  const { header = null, footer = null } = Component as typeof Component & {
    header?: ReactNode;
    footer?: ReactNode;
  };
  return (
    <>
      <SWRDevTools>
        <MuiProvider {...props}>
          {header || <PageHeader />}
          <Component {...pageProps} />
          {footer}
        </MuiProvider>
      </SWRDevTools>
    </>
  );
};

export default App;
