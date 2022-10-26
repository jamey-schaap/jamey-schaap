import { Box, Container } from "@chakra-ui/react";
import { ReactElement } from "react";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import Layout from "../../components/layouts/article";
import NoContent from "../no-content";
import { Router } from "next/router";

const AspNetCore = () => (
  <Layout>
    <Container>
      <NoContent />
    </Container>
  </Layout>
);

AspNetCore.getLayout = (page: ReactElement, router: Router) => {
  return (
    <MainLayout router={router}>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default AspNetCore;
