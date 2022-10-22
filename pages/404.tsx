import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import MainLayout from "../components/layouts/main";
import ArticleLayout from "../components/layouts/article";
import Layout from "../components/layouts/article";

const OnHoverTextStyle = {
  "&:hover": {
    color: "teal",
  },
};

const NotFound: NextPageWithLayout = () => {
  return (
    <Layout>
      {/* @ts-ignore */}
      <Container align="center">
        <Heading as="h1">Not found</Heading>
        <Text>The page you&apos;re looking for was not found.</Text>
        <Divider
          orientation="horizontal"
          borderTop="2px solid #525252;"
          borderRadius="lg"
          marginBottom="2"
          my={6}
        />
        {/* @ts-ignore */}
        <Box my={6} align="center">
          <NextLink href="/" passHref>
            <Button
              color={useColorModeValue("black", "white")}
              css={OnHoverTextStyle}
            >
              Return to home
            </Button>
          </NextLink>
        </Box>
      </Container>
    </Layout>
  );
};

NotFound.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default NotFound;
