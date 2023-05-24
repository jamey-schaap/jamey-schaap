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
  AlbumViewerPreview,
  Analysis7AssignmentPreview,
  Analysis8AssignmentPreview,
  ArcadePreview,
  BookstoreAPIPreview,
  GoFitnessPreview,
  JaimIOPreview,
  JenkinsMSTeamsIntegrationPreview,
  ProjectCPreview,
  ProjectDPreview,
  SongAPIPreview,
  SpartanFitnessPreview,
} from "../components/previews/project-previews";

const Projects: NextPageWithLayout = () => {
  const personalProjects: ReactNode[] = [
    <JaimIOPreview key="jaim-io" />,
    <SpartanFitnessPreview key="spartan-fitness" />,
    <JenkinsMSTeamsIntegrationPreview key="jenkins-msteams-integration" />,
    <ArcadePreview key="arcade" />,
    <SongAPIPreview key="song-api" />,
    <GoFitnessPreview key="go-fitness" />,
    <BookstoreAPIPreview key="bookstore-api" />,
  ];

  const universityProjects: ReactNode[] = [
    <ProjectCPreview key="project-c" />,
    <ProjectDPreview key="project-d" />,
    <Analysis7AssignmentPreview key="analysis-7-assignment" />,
    <Analysis8AssignmentPreview key="analysis-8-assignment" />,
    <AlbumViewerPreview key="album-viewer" />,
  ];

  return (
    <Layout title="Projects">
      <Container>
        <SectionHeading>Personal Projects</SectionHeading>
        <SimpleGrid columns={[1, 1, 2]} gap={6} pb={5}>
          {personalProjects.map((project, index) => (
            <Section delay={0.1} key={`personal-${index}`}>
              {project}
            </Section>
          ))}
        </SimpleGrid>
        <SectionHeading>University Projects</SectionHeading>
        <SimpleGrid columns={[1, 1, 2]} gap={6} pb={5}>
          {universityProjects.map((project, index) => (
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
