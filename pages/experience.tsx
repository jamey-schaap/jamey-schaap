import { NextPageWithLayout } from "./_app";
import MainLayout from "../components/layouts/main";
import ArticleLayout from "../components/layouts/article";
import Layout from "../components/layouts/article";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { ReactElement, ReactNode } from "react";
import { Router } from "next/router";
import Section, { SectionHeading } from "../components/section";
import {
  CalvijnVreewijkPreview,
  HogeschoolRotterdamPreview,
  SwecoPreview,
  VirtualVaultsPreview,
} from "../components/previews/experience-previews";

const Experience: NextPageWithLayout = () => {
  const work: ReactNode[] = [
    <VirtualVaultsPreview key="virtual-vaults" />,
    <SwecoPreview key="sweco" />,
  ];
  const education: ReactNode[] = [
    <CalvijnVreewijkPreview key="calvijn-vreewijk" />,
    <HogeschoolRotterdamPreview key="hogeschool-rotterdam" />,
  ];

  return (
    <Layout title="Experience">
      <Container>
        <SectionHeading>Work</SectionHeading>
        <SimpleGrid columns={[1, 1, 2]} gap={6} pb={5}>
          {work.map((project, index) => (
            <Section delay={0.1} key={`work-${index}`}>
              {project}
            </Section>
          ))}
        </SimpleGrid>
        <SectionHeading>Education</SectionHeading>
        <SimpleGrid columns={[1, 1, 2]} gap={6} pb={5}>
          {education.map((project, index) => (
            <Section delay={0.1} key={`education-${index}`}>
              {project}
            </Section>
          ))}
        </SimpleGrid>
      </Container>
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
