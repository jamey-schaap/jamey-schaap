import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import {
  Container,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  useColorModeValue,
  Link,
  Box,
} from "@chakra-ui/react";
import Layout from "../../components/layouts/article";
import NoContent from "../no-content";
import NextLink from "next/link";
import { AiOutlineRight } from "react-icons/ai";

const Golang: NextPageWithLayout = () => (
  <Layout>
    <Container>
      <Breadcrumb>
        <NextLink href="/" passHref>
          <Link color={useColorModeValue("#000", "#fff")}>Home</Link>
        </NextLink>
        <AiOutlineRight />
        <NextLink href="/languages" passHref>
          <Link color={useColorModeValue("#000", "#fff")}>Languages</Link>
        </NextLink>
        <AiOutlineRight />
        <Link color={useColorModeValue("purple", "orange")}>Golang</Link>
      </Breadcrumb>
      <NoContent />
    </Container>
  </Layout>
);

Golang.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default Golang;
