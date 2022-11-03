import { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";
import MainLayout from "../components/layouts/main";
import ArticleLayout from "../components/layouts/article";
import Layout from "../components/layouts/article";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { Router } from "next/router";
import Section, { SectionHeading } from "../components/section";
import { ReactNode } from "react";
import {
  AlbumAPIPreview,
  AlbumFrontendPreview,
  Analysis8AssignmentPreview,
  ArcadePreview,
  BookstoreAPIPreview,
  GoFitnessPreview,
  JaimIOPreview,
  ProjectCPreview,
  ProjectDPreview,
  SongAPIPreview,
} from "../components/previews/project-previews";

const Projects: NextPageWithLayout = () => {
  const personalProjects: ReactNode[] = [
    <JaimIOPreview key="jaim-io" />,
    <SongAPIPreview key="song-api" />,
    <ArcadePreview key="arcade" />,
    <GoFitnessPreview key="go-fitness" />,
    <BookstoreAPIPreview key="bookstore-api" />,
  ];

  const schoolProjects: ReactNode[] = [
    <ProjectCPreview key="project-c" />,
    <ProjectDPreview key="project-d" />,
    <AlbumAPIPreview key="album-api" />,
    <AlbumFrontendPreview key="album-frontend" />,
    <Analysis8AssignmentPreview key="analysis-8-assignment" />,
  ];
  return (
    <Layout>
      <Container>
        <SectionHeading>Personal Projects</SectionHeading>
        <SimpleGrid columns={[1, 1, 2]} gap={6} pb={5}>
          {personalProjects.map((project, index) => (
            <Section delay={0.1} key={`personal-${index}`}>
              {project}
            </Section>
          ))}
        </SimpleGrid>
        <SectionHeading>School Projects</SectionHeading>
        <SimpleGrid columns={[1, 1, 2]} gap={6} pb={5}>
          {schoolProjects.map((project, index) => (
            <Section delay={0.1} key={`school-${index}`}>
              {project}
            </Section>
          ))}
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
