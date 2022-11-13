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
    <Layout title="Project C">
      <Container>
        <HeadingImage id="project-c" />
        <Title>
          Project C <Badge>09/2021 - 01/2022</Badge>
        </Title>
        <Text as="p">
          Project C was our first project with an external client,{" "}
          <NextLink href="https://www.star-shl.nl/patient/" passHref>
            <Link target="_blank">Star-shl</Link>
          </NextLink>
          . We created web application (phone view) to inform adults about the
          preparation and the procedure of a blood draw and to entertain
          children while waiting in the waiting room to draw blood.
        </Text>
        <Text as="p" mt={4}>
          In this project I was a frontend developer. I was responsible for the
          Home, blood- and urine information pages, the admin editor and the
          application the automatically backed up the content of the pages.
        </Text>
        <List my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            C#, .NET 5, PostgreSQL, Vue.js 3 & Typescript.
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <NextLink href="https://github.com/jaim-io/Groep1ProjectC" passHref>
              <Link target="_blank">
                https://github.com/jaim-io/Groep1ProjectC
              </Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <Meta>Demo</Meta>
            <NextLink href="https://youtu.be/6_TGA3oigoQ" passHref>
              <Link target="_blank">https://youtu.be/6_TGA3oigoQ</Link>
            </NextLink>
          </ListItem>
        </List>
        <AspectRatio ratio={16 / 9}>
          <iframe
            src="https://www.youtube.com/embed/6_TGA3oigoQ?rel=0"
            title="Project C Demo"
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
