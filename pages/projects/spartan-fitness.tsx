import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import Layout from "../../components/layouts/article";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import { Router } from "next/router";
import { HeadingImage, Meta, Title } from "../../components/projects";

const SpartanFitness: NextPageWithLayout = () => {
  return (
    <Layout title="Spartan-Fitness">
      <Container>
        <HeadingImage id="spartan-fitness" />
        <Title>
          Spartan Fitness <Badge>02/2023 - 10/2023</Badge>
        </Title>
        <Text as="p">
          SpartanFitness is a fitness platform where users and coaches can register 
          and view and save workouts, exercises, muscle groups and muscles. Coaches have 
          the ability to create new workouts and new exercises.
        </Text>
        <List my={4}>
          <ListItem>
            <Meta>Backend-Stack</Meta>
            C#, .NET 7, ASP.NET Core, Entity Framework Core 7, XUnit & MSSQL
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
            <Link target="_blank" href="https://github.com/jaim-io/SpartanFitness">
                https://github.com/jaim-io/SpartanFitness
              </Link>
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
