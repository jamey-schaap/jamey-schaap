import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import Layout from "../../components/layouts/article";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import { Router } from "next/router";
import { HeadingImage, Meta, Title } from "../../components/projects";

const JaimIO: NextPageWithLayout = () => {
  return (
    <Layout title="jamey-schaap">
      <Container>
        <HeadingImage id="jamey-schaap" />
        <Title>
          jamey-schaap <Badge>10/2022 - 11/2022</Badge>
        </Title>
        <Text as="p">
          jamey-schaap is the website you are currently looking at! This is my
          portfolio website where I showcase my experience and education. This
          project has been inspired by{" "}
          <Link target="_blank" href="https://www.youtube.com/c/devaslife">
            DevAsLife
          </Link>
          and is powered by{" "}
          <Link target="_blank" href="https://nextjs.org">
            Next.js
          </Link>
          and{" "}
          <Link target="_blank" href="https://vercel.com">
            Vercel
          </Link>
          .
        </Text>
        <List my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target="_blank" href="https://jamey-schaap.vercel.app">
              https://jamey-schaap.vercel.app
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            Next.js 12, Typescript & Vercel
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link
              target="_blank"
              href="https://github.com/jamey-schaap/jamey-schaap"
            >
              https://github.com/jamey-schaap/jamey-schaap
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

JaimIO.getLayout = (page: ReactElement, router: Router) => {
  return (
    <MainLayout router={router}>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default JaimIO;
