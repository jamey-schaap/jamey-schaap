import type { NextPage } from "next";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Image from "next/image";
import MainLayout from "../components/layouts/main";
import ArticleLayout from "../components/layouts/article";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";

const Home: NextPageWithLayout = () => {
  return <Box>Hello</Box>;
};

Home.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  )
}

export default Home;

