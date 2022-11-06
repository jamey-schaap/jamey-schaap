import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import Layout from "../../components/layouts/article";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import { Router } from "next/router";
import { HeadingImage, Meta, Title } from "../../components/projects";
import NextLink from "next/link";

const ProjectC: NextPageWithLayout = () => {
  return (
    <Layout title="Project D">
      <Container>
        <HeadingImage id="project-d" />
        <Title>
          Project D <Badge>02/2022 - 06/2022</Badge>
        </Title>
        <Text as="p">
          Project D was our second project with external clients,{" "}
          <NextLink href="https://www.alten.com/" passHref>
            <Link target="_blank">Alten</Link>
          </NextLink>{" "}
          and{" "}
          <NextLink href="https://chengetawildlife.org/" passHref>
            <Link target="_blank">Chengeta Wildlife</Link>
          </NextLink>
          . In the wild area that Chengeta monitors, there are a number of nodes
          that listen for events. By means of machine learning, it is determined
          on the node what kind of sound has been collected.
        </Text>
        <Text as="p" mt={4}>
          In this project we researched various solutions to display this data
          in a dashboard and made a proof of concept with the chosen solution.
          The solution that was ultimately chosen is Streamlit. Streamlit is an
          open source app framework in Python.
        </Text>
        <Text as="p" mt={4}>
          In the project I was responsible for the middleware, the layout of the downloadable
          PDF, the event map and the Docker integration.
        </Text>
        <List my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            Python 3.9 &{" "}
            <NextLink href=" https://streamlit.io/" passHref>
              <Link target="_blank">Streamlit</Link>
            </NextLink>{" "}
            and SQLite
          </ListItem>
          <ListItem>
            <Meta>DevOps</Meta>
            Docker
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <NextLink href="https://github.com/jaim-io/Groep1ProjectD" passHref>
              <Link target="_blank">
                https://github.com/jaim-io/Groep1ProjectD
              </Link>
            </NextLink>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

ProjectC.getLayout = (page: ReactElement, router: Router) => {
  return (
    <MainLayout router={router}>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default ProjectC;
