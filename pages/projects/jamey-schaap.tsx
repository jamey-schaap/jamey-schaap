import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import Layout from "../../components/layouts/article";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import { Router } from "next/router";
import { HeadingImage, Meta, Title } from "../../components/projects";
import NextLink from "next/link";

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
          <NextLink href="https://www.youtube.com/c/devaslife" passHref>
            <Link target="_blank">DevAsLife</Link>
          </NextLink>{" "}
          and is powered by{" "}
          <NextLink href="https://nextjs.org" passHref>
            <Link target="_blank">Next.js</Link>
          </NextLink>{" "}
          and{" "}
          <NextLink href="https://vercel.com" passHref>
            <Link target="_blank">Vercel</Link>
          </NextLink>
          .
        </Text>
        <List my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <NextLink href="https://jamey-schaap.vercel.app" passHref>
              <Link target="_blank">https://jamey-schaap.vercel.app</Link>
            </NextLink>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            Next.js 12, Typescript & Vercel
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <NextLink href="https://github.com/jamey-schaap/jamey-schaap" passHref>
              <Link target="_blank">https://github.com/jamey-schaap/jamey-schaap</Link>
            </NextLink>
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
