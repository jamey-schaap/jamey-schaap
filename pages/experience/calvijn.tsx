import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import Layout from "../../components/layouts/article";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import { Router } from "next/router";
import { HeadingImage, Meta, Title } from "../../components/experience";
import { ReactElement } from "react";

const Calvijn: NextPageWithLayout = () => {
  return (
    <Layout title="Calvijn">
      <Container>
        <HeadingImage id="calvijn" />
        <Title>
          CSG Calvijn Vreewijk <Badge>08/2012 - 07/2017</Badge>
        </Title>
        <Text as="p">
          CSG Calvijn Vreewijk is the Highschool I graduated from. I obtained my
          HAVO in &apos;Economy & Society&apos; in 2017. I graduated with high
          grades in economics, management and organisation, math and English.
        </Text>
        <Text as="p" my={4}>
          After my grudation the school went through a number of changes. First
          being renamed to &apos;Vreewijk Lyceum&apos; and later being renamed
          to &apos;Zuider Gymnasium&apos;.
        </Text>
        <List my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="">No website exists anymore</Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

Calvijn.getLayout = (page: ReactElement, router: Router) => {
  return (
    <MainLayout router={router}>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default Calvijn;
