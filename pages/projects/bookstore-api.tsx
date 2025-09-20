import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import Layout from "../../components/layouts/article";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import { Router } from "next/router";
import { HeadingImage, Meta, Title } from "../../components/projects";

const BookstoreAPI: NextPageWithLayout = () => {
  return (
    <Layout title="Bookstore API">
      <Container>
        <HeadingImage id="bookstore-api" />
        <Title>
          Bookstore API <Badge>07/2022</Badge>
        </Title>
        <Text as="p">
          Bookstore API was my first Golang project, a simple API that handles
          books. It contains the API, unit- and integrations tests.
        </Text>
        <List my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            Golang & PostgreSQL
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link
              target="_blank"
              href="https://github.com/jamey-schaap/bookstore-api"
            >
              https://github.com/jamey-schaap/bookstore-api
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

BookstoreAPI.getLayout = (page: ReactElement, router: Router) => {
  return (
    <MainLayout router={router}>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default BookstoreAPI;
