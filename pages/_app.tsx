import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";
import { AnimatePresence } from "framer-motion";
import Fonts from "../components/fonts";
import Chakra from "../components/chakra";
import { TabProvider } from "../contexts/tabcontext";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps, router }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    // @ts-ignore
    <Chakra cookies={pageProps.cookies}>
      <TabProvider>
        <Fonts />
        {getLayout(
          <AnimatePresence
            mode="wait"
            initial={true}
            onExitComplete={() => {
              if (typeof window !== "undefined") {
                window.scrollTo({ top: 0 });
              }
            }}
          >
            <Component {...pageProps} key={router.route} />
          </AnimatePresence>
        )}
      </TabProvider>
    </Chakra>
  );
}

export default App;
