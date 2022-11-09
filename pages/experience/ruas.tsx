import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import Layout from "../../components/layouts/article";
import {
  Badge,
  Container,
  Divider,
  Link,
  List,
  ListItem,
  SimpleGrid,
  Text,
  Tooltip,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import { Router } from "next/router";
import { HeadingImage, Meta, Title } from "../../components/experience";
import NextLink from "next/link";
import { ReactElement } from "react";

const Ruas: NextPageWithLayout = () => {
  return (
    <Layout title="Rotterdam University of Applied Sciences">
      <Container>
        <HeadingImage id="ruas" />
        <Title>
          <Tooltip label="Rotterdam University of Applied Sciences">
            RUAS
          </Tooltip>{" "}
          <Badge>08/2020 - present</Badge>
        </Title>
        <Text as="p">
          A good foundation has been built in the first year, here I learned the
          following concepts:
        </Text>
        <SimpleGrid columns={[1, 2, 2]}>
          <UnorderedList pl={4}>
            <ListItem>Basic programming;</ListItem>
            <ListItem>Set theory;</ListItem>
            <ListItem>Lambda&apos;s, recursion and HOF&apos;s;</ListItem>
          </UnorderedList>{" "}
          <UnorderedList pl={4}>
            <ListItem>OOP;</ListItem>
            <ListItem>UML modeling;</ListItem>
            <ListItem>Agile Scrum;</ListItem>
          </UnorderedList>{" "}
        </SimpleGrid>
        <Text as="p" mt={4}>
          The second year expanded upon this with:
        </Text>
        <SimpleGrid columns={[1, 2, 2]}>
          <UnorderedList pl={4}>
            <ListItem>SQL;</ListItem>
            <ListItem>Networking;</ListItem>
            <ListItem>Concurrency;</ListItem>
            <ListItem>Software design and analysis;</ListItem>
            <ListItem>Testings;</ListItem>
          </UnorderedList>
          <UnorderedList pl={4}>
            <ListItem>Web development;</ListItem>
            <ListItem>Web security;</ListItem>
            <ListItem>Cloud development;</ListItem>
            <ListItem>Algorithms and data structures;</ListItem>
          </UnorderedList>
        </SimpleGrid>
        <Text mt={4}>Over the two years I have also worked with:</Text>
        <List pl={4}>
          <ListItem>
            <Meta>Languages</Meta>
            Python, C#, Javascript, Typescript & SQL
          </ListItem>{" "}
          <ListItem>
            <Meta>Scripting</Meta>
            Bash
          </ListItem>
          <ListItem>
            <Meta>Frameworks</Meta>
            .NET, ASP.NET Core, Entity Framework Core, React & Vue.js
          </ListItem>
          <ListItem>
            <Meta>DevOps</Meta>
            Docker, GitHub Actions & AWS
          </ListItem>
        </List>
        <Text my={4}>
          I am currently working an internship and in februari 2023 I am
          starting a minor in Software Engineering.
        </Text>
        <List my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <NextLink href="https://www.rotterdamuas.com/" passHref>
              <Link target="_blank">
                Rotterdam University of Applied Sciences
              </Link>
            </NextLink>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

Ruas.getLayout = (page: ReactElement, router: Router) => {
  return (
    <MainLayout router={router}>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default Ruas;
