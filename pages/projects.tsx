import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import MainLayout from "../components/layouts/main";
import ArticleLayout from "../components/layouts/article";
import Layout from "../components/layouts/article";
import { Container } from "@chakra-ui/react";
import NoContent from "./no-content";
import { Router } from "next/router";

const Projects: NextPageWithLayout = () => {
  return (
    <Layout>
      <Container>
        <NoContent />
      </Container>
    </Layout>
  );
};

Projects.getLayout = (page: ReactElement, router: Router) => {
  return (
    <MainLayout router={router}>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default Projects;
