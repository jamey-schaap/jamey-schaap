import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import Layout from "../../components/layouts/article";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import { Router } from "next/router";
import { HeadingImage, Meta, Title } from "../../components/projects";
import NextLink from "next/link";

const AlbumViewer: NextPageWithLayout = () => {
  return (
    <Layout title="Album Viewer">
      <Container>
        <HeadingImage id="album-viewer" />
        <Title>
          Album Viewer <Badge>04/2022 - 06/2022</Badge>
        </Title>
        <Text as="p">
          This project was a part of the cloud development course I followed in
          the last quarter of my second year in my computer science studies. In
          this course I learned alot about OpenAPI/Swagger, CI/CD, DevOps,
          Docker, GitHub Actions and AWS. The course consisted of a theory and
          practicum part, which I finished with a 9.8/10.
        </Text>
        <Text as="p" mt={4}>
          The project consits of a front- and backend (API), which gets build and
          tested in a GitHub Actions pipeline. A container image then gets build
          of this build and gets pushed to AWS ECR. The frontend is deployed on
          and by AWS S3 and the API gets deployed by AWS CodeDeploy.
        </Text>
        <List my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            C#, .NET 5, Entity Framework Core, PostgreSQL, React & Material UI.
          </ListItem>
          <ListItem>
            <Meta>DevOps</Meta>
            Docker, GitHub Actions, AWS (EC2, ECR, ECS, RDS, S3, Fargate,
            CloudWatch & CodeDeploy)
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <NextLink href="https://github.com/jaim-io/album-api" passHref>
              <Link target="_blank">https://github.com/jaim-io/album-api</Link>
            </NextLink>{" "}
            <NextLink href="https://github.com/jaim-io/album-frontend" passHref>
              <Link target="_blank">
                https://github.com/jaim-io/album-frontend
              </Link>
            </NextLink>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

AlbumViewer.getLayout = (page: ReactElement, router: Router) => {
  return (
    <MainLayout router={router}>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default AlbumViewer;
