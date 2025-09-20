import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import Layout from "../../components/layouts/article";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import { Router } from "next/router";
import { HeadingImage, Meta, Title } from "../../components/projects";

const SongAPI: NextPageWithLayout = () => {
  return (
    <Layout title="Song-API">
      <Container>
        <HeadingImage id="song-api" />
        <Title>
          Song-API <Badge>09/2022</Badge>
        </Title>
        <Text as="p">
          Song API is a simple API where I showcase my experience with C#,
          ASP.NET Core and Entity Framework Core. It contains the API, unit- and
          integrations tests and OpenAPI/Swagger documentation. With Docker and
          GitHub Actions a container image gets build and pushed to{" "}
          <Link target="_blank" href="https://hub.docker.com/">Docker Hub</Link>{" "}
          and then the latest version gets pushed to a{" "}
          <Link target="_blank" href="https://www.redhat.com/en/technologies/cloud-computing/openshift">Red Hat OpenShift</Link>{" "}
          developer sandbox.
        </Text>
        <List my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            C#, .NET 6 & Entity Framework Core
          </ListItem>
          <ListItem>
            <Meta>DevOps</Meta>
            Docker, GitHub Actions & Red Hat OpenShift
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link target="_blank" href="https://github.com/jamey-schaap/song-api">https://github.com/jamey-schaap/song-api</Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

SongAPI.getLayout = (page: ReactElement, router: Router) => {
  return (
    <MainLayout router={router}>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default SongAPI;
