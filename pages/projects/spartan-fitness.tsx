import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import Layout from "../../components/layouts/article";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import { Router } from "next/router";
import { HeadingImage, Meta, Title } from "../../components/projects";
import NextLink from "next/link";

const SpartanFitness: NextPageWithLayout = () => {
  return (
    <Layout title="Spartan-Fitness">
      <Container>
        <HeadingImage id="spartan-fitness" />
        <Title>
          Spartan Fitness <Badge>03/2023 - ongoing</Badge>
        </Title>
        <Text as="p">
          Spartan Fitness is a fitness platform for both users and coaches.
          Coaches create muscle groups, exercises and workouts for users to see, save and use. [Work in progress, more features will be added in the future.]
        </Text>
        <List my={4}>
          <ListItem>
            <Meta>Backend-Stack</Meta>
            C#, .NET 6, ASP.NET Core, Entity Framework Core 6, XUnit & MSSQL
          </ListItem>
          <ListItem>
            <Meta>Backend-Libraries</Meta>
            MediatR, ErrorOr, FluentValidation, Mapster & Swasbuckle
          </ListItem>
          <ListItem>
            <Meta>Frontend-Stack</Meta>
            React 18, Vite, Typescript, SWS & Prettier
          </ListItem>
          <ListItem>
            <Meta>DevOps</Meta>
            Docker, GitHub Actions & Kubernetes
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <NextLink href="https://github.com/jaim-io/SpartanFitness" passHref>
              <Link target="_blank">
                https://github.com/jaim-io/SpartanFitness
              </Link>
            </NextLink>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

SpartanFitness.getLayout = (page: ReactElement, router: Router) => {
  return (
    <MainLayout router={router}>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default SpartanFitness;
