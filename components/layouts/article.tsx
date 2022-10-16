import { motion } from "framer-motion";
import Head from "next/head";
import { ReactNode } from "react";

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
    <motion.article
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ duration: 0.4, type: "easInOut" }}
      style={{ position: "relative" }}
    >
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
    </motion.article>
  );
};

export default Layout;
