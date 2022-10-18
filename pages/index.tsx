import { Box, Container, Heading } from "@chakra-ui/react";
import MainLayout from "../components/layouts/main";
import ArticleLayout from "../components/layouts/article";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";

const Home: NextPageWithLayout = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hello, I&apos;m a Computer Science student.
        </Box>

        <Section delay={0.2}>
          {/* @ts-ignore */}
          <Heading as="h3" variant="section-title" align="center">
            Education
          </Heading>
        </Section>
      </Container>
    </Layout>
  );
};

Home.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default Home;
