import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import Layout from "../../components/layouts/article";
import {
  AspectRatio,
  Badge,
  Container,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
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
          <Link target="_blank" href="https://www.alten.com/">
            Alten
          </Link>
          and{" "}
          <Link target="_blank" href="https://chengetawildlife.org/">
            Chengeta Wildlife
          </Link>
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
          In the project I was responsible for the middleware, the layout of the
          downloadable PDF, the event map and the Docker integration.
        </Text>
        <List my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            Python 3.9 &{" "}
            <NextLink href="https://streamlit.io/" passHref>
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
            <NextLink
              href="https://github.com/jamey-schaap/Groep1ProjectD"
              passHref
            >
              <Link target="_blank">
                https://github.com/jamey-schaap/Groep1ProjectD
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <Meta>Demo</Meta>
            <NextLink href="https://youtu.be/ewKxmAW7dcM" passHref>
              <Link target="_blank">https://youtu.be/ewKxmAW7dcM</Link>
            </NextLink>
          </ListItem>
        </List>
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.youtube.com/embed/ewKxmAW7dcM?rel=0"
            title="Project D Demo"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </AspectRatio>
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
