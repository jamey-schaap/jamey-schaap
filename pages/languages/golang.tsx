import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import { Container, Box } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";

const Golang: NextPageWithLayout = () => (
  <Layout>
    <Container>
      <Box>Work in progress</Box>
    </Container>
  </Layout>
);

Golang.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default Golang;
