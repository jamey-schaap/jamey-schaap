import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import Layout from "../../components/layouts/article";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import { Router } from "next/router";
import { HeadingImage, Meta, Title } from "../../components/projects";
import NextLink from "next/link";

const Analysis7Assignment: NextPageWithLayout = () => {
  return (
    <Layout title="Analysis 7 Assignment">
      <Container>
        <HeadingImage id="analysis-7-assignment" />
        <Title>
          Analysis 7 Assignment <Badge>03/2023 - 05/2023</Badge>
        </Title>
        <Text as="p">
          This project was a part of the modelling / design patterns course I
          followed in the last quarter of my third year in my computer science
          studies. In this course I learned how to model application using
          design patterns.
        </Text>
        <Text as="p" mt={4}>
          The project is a tarding card game (TCG), which is very similar to
          Magic The Gathering. The project contains a static demo game, which
          shows the functionality of the code.
        </Text>
        <List my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            C#, .NET Core 6
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <NextLink
              href="https://github.com/jaim-io/analysis-7-assignment"
              passHref
            >
              <Link target="_blank">
                https://github.com/jaim-io/analysis-7-assignment
              </Link>
            </NextLink>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

Analysis7Assignment.getLayout = (page: ReactElement, router: Router) => {
  return (
    <MainLayout router={router}>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default Analysis7Assignment;
