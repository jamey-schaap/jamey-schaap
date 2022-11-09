import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import Layout from "../../components/layouts/article";
import {
  Badge,
  Box,
  Container,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { Router } from "next/router";
import { HeadingImage, Meta, Title } from "../../components/projects";
import NextLink from "next/link";
import Image from "next/image";

const Arcade: NextPageWithLayout = () => {
  return (
    <Layout title="Arcade">
      <Container>
        <HeadingImage id="arcade" />
        <Title>
          Arcade <Badge>08/2022</Badge>
        </Title>
        <Text as="p">
          Arcade, as the name implies, is an arcade with a couple of games. Only
          &apos;Hangman&apos; is available currently, but I am planning to
          create &apos;Black Jack 21&apos; and a &apos;Color Memory Game&apos;
          in the future.
        </Text>
        <List my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            Golang
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <NextLink href="https://github.com/jaim-io/arcade" passHref>
              <Link target="_blank">https://github.com/jaim-io/arcade</Link>
            </NextLink>
          </ListItem>
        </List>
        <SimpleGrid
          columns={[1, 1, 2]}
          display="flex"
          justifyContent="center"
          gap={6}
          mt={6}
        >
          <Box>
            <Image
              src="/images/projects/arcade/hangman-lose.png"
              alt="hangman-lose"
              width="192"
              height="292"
              loading="lazy"
            />
          </Box>
          <Box>
            <Image
              src="/images/projects/arcade/hangman-win.png"
              alt="hangman-win"
              width="192"
              height="292"
              loading="lazy"
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Layout>
  );
};

Arcade.getLayout = (page: ReactElement, router: Router) => {
  return (
    <MainLayout router={router}>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default Arcade;
