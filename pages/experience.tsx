import { NextPageWithLayout } from "./_app";
import MainLayout from "../components/layouts/main";
import ArticleLayout from "../components/layouts/article";
import Layout from "../components/layouts/article";
import { Container } from "@chakra-ui/react";
import { ReactElement, useContext } from "react";
import { Router } from "next/router";
import TabContext from "../contexts/tab-context";

const Experience: NextPageWithLayout = () => {
  const { tabIndex, setTabIndex } = useContext(TabContext);
  return (
    <Layout>
      <Container></Container>
    </Layout>
  );
};

Experience.getLayout = (page: ReactElement, router: Router) => {
  return (
    <MainLayout router={router}>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default Experience;
