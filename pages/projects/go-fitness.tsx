import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import Layout from "../../components/layouts/article";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import { Router } from "next/router";
import { HeadingImage, Meta, Title } from "../../components/projects";
import NextLink from "next/link";

const GoFitness: NextPageWithLayout = () => {
  return (
    <Layout title="Go Fitness">
      <Container>
        <HeadingImage id="go-fitness" />
        <Title>
          Go Fitness <Badge>09/2022 - ....</Badge>
        </Title>
        <Text as="p">
          Go Fitness is a, work in progress, fitness platform. The goal is to be
          able to view a catalog of exercises, track workouts and track and view
          your progress on tracked exercises. It contains the API, unit- and
          integrations tests and OpenAPI/Swagger documentation.
        </Text>
        <List my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            Golang, Gin, PostgreSQL, React, Typescript & Tailwind CSS
          </ListItem>
          <ListItem>
            <Meta>DevOps</Meta>
            Docker & GitHub Actions
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <NextLink href="https://github.com/jamey-schaap/go-fitness" passHref>
              <Link target="_blank">https://github.com/jamey-schaap/go-fitness</Link>
            </NextLink>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

GoFitness.getLayout = (page: ReactElement, router: Router) => {
  return (
    <MainLayout router={router}>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default GoFitness;
