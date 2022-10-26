import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import { Container, useColorModeValue, Link } from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import NoContent from "../no-content";
import NextLink from "next/link";
import { AiOutlineRight } from "react-icons/ai";
import { Router } from "next/router";

const Golang: NextPageWithLayout = () => (
  <Layout>
    <Container>
      {/* <NextLink href="/" passHref>
        <Link color={useColorModeValue("#000", "#fff")}>Home</Link>
      </NextLink>
      <AiOutlineRight />
      <NextLink href="/languages" passHref>
        <Link color={useColorModeValue("#000", "#fff")}>Languages</Link>
      </NextLink>
      <AiOutlineRight />
      <Link color={useColorModeValue("purple", "orange")}>Golang</Link> */}
      <NoContent />
    </Container>
  </Layout>
);

Golang.getLayout = (page: ReactElement, router: Router) => {
  return (
    <MainLayout router={router}>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default Golang;
