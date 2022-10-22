import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import MainLayout from "../components/layouts/main";
import ArticleLayout from "../components/layouts/article";
import Layout from "../components/layouts/article";
import { Container } from "@chakra-ui/react";
import NoContent from "./nocontent";

const Projects: NextPageWithLayout = () => {
  return (
    <Layout>
      <Container>
        <NoContent />
      </Container>
    </Layout>
  );
};

Projects.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default Projects;
