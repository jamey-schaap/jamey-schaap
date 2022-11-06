import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import Layout from "../../components/layouts/article";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import { Router } from "next/router";
import { HeadingImage, Meta, Title } from "../../components/projects";
import NextLink from "next/link";

const Analysis8Assignment: NextPageWithLayout = () => {
  return (
    <Layout title="Analysis 8 Assignment">
      <Container>
        <HeadingImage id="analysis-8-assignment" />
        <Title>
          Analysis 8 Assignment <Badge>04/2022 - 06/2022</Badge>
        </Title>
        <Text as="p">
          This project was a part of the web security course I followed in the
          last quarter of my second year in my computer science studies. In this
          course I learned input validation, output validation, HTTPS, SQL- and shell
          injection, XSS and cryptography.
        </Text>
        <Text as="p" mt={4}>
          The project is a user managment application, with roles that have
          different permissions and that is SQL- and shell injection safe.
        </Text>
        <List my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            Python & SQLite
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <NextLink
              href="https://github.com/jaim-io/analysis-8-assignment"
              passHref
            >
              <Link target="_blank">
                https://github.com/jaim-io/analysis-8-assignment
              </Link>
            </NextLink>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

Analysis8Assignment.getLayout = (page: ReactElement, router: Router) => {
  return (
    <MainLayout router={router}>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default Analysis8Assignment;
