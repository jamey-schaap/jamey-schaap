import Head from "next/head";
import { ReactNode } from "react";
import Fade from "../transitions/fade";

const variants = {
  hidden: { opacity: 0, x: 0, y: 20 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: 20 },
};

type LayoutProps = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title }: LayoutProps) => {
  const completeTitle = `${title} - Jamey Schaap`;
  return (
    <Fade>
      <>
        {title && (
          <Head>
            <title>{completeTitle}</title>
            <meta name="twitter:title" content={completeTitle} />
            <meta property="og:title" content={completeTitle} />
          </Head>
        )}
        {children}

        {/* <GridItemStyle /> */}
      </>
    </Fade>
  );
};

export default Layout;
