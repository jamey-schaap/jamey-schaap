import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import MainLayout from "../components/layouts/main";
import ArticleLayout from "../components/layouts/article";
import Layout from "../components/layouts/article";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { Router } from "next/router";
import { ProjectGridItem } from "../components/grid-item";
import Section from "../components/section";

const Projects: NextPageWithLayout = () => {
  return (
    <Layout>
      <Container>
        {" "}
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section delay={0.1}>
            <ProjectGridItem
              thumbnail="/svgs/projects/arcade.svg"
              title="Arcade"
              id="arcade"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              orci leo, vehicula
            </ProjectGridItem>
          </Section>
          <Section delay={0.1}>
            <ProjectGridItem
              thumbnail="/svgs/projects/go-fitness.svg"
              title=" Go Fitness"
              id="go-fitness"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              orci leo, vehicula
            </ProjectGridItem>
          </Section>
        </SimpleGrid>
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
