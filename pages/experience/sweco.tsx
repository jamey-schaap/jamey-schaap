import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import Layout from "../../components/layouts/article";
import {
  Badge,
  Container,
  Link,
  List,
  ListItem,
  OrderedList,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import { Router } from "next/router";
import { HeadingImage, Meta, Title } from "../../components/experience";
import NextLink from "next/link";
import { ReactElement } from "react";

const Sweco: NextPageWithLayout = () => {
  return (
    <Layout title="Sweco">
      <Container>
        <HeadingImage id={useColorModeValue("sweco-black", "sweco-white")} />
        <Title>
          Sweco <Badge>08/2022 - present</Badge>
        </Title>
        <Text as="p">
          I am currently working an internship at{" "}
          <NextLink href="https://www.swecogroup.com/" passHref>
            <Link target="_blank">Sweco</Link>
          </NextLink>{" "}
          as a Software Engineer DevOps. I work in the GIS & IT department in
          team Obsurv Software. Team Obsurv Software develops a number of
          products, one of which{" "}
          <NextLink href="https://obsurv.nl/" passHref>
            <Link target="_blank">Obsurv</Link>
          </NextLink>
          , a web-based management system.
        </Text>
        <Text as="p" mt={4}>
          During my internship I:
        </Text>
        <UnorderedList pl={4}>
          <ListItem>
            researched and created an advisory report regarding three different
            DevOps platforms (Jenkins, Azure DevOps and GitHub Actions);
          </ListItem>
          <ListItem>
            researched and created POCs for CVE detection. For SCA (Snyk) and
            for DAST (OWASP Zap);
          </ListItem>
          <ListItem>
            setup a number of multi pipline projects in Jenkins;
          </ListItem>
          <ListItem>created a custom plugin in Powershell;</ListItem>
          <ListItem>worked on other work items from the scrumboard.</ListItem>
        </UnorderedList>
        <List my={4}>
          <ListItem>
            <Meta>Scripting</Meta>
            Powershell
          </ListItem>
          <ListItem>
            <Meta>DevOps</Meta>
            Jenkins & Azure DevOps
          </ListItem>
          <ListItem>
            <Meta>Scrum</Meta>
            Agile Scrum &{" "}
            <NextLink href="https://www.scaledagileframework.com/" passHref>
              <Link target="_blank">SAFe 5</Link>
            </NextLink>
          </ListItem>
        </List>
        <List my={4}>
          <ListItem>
            <Meta>Sweco</Meta>
            <NextLink href="https://www.swecogroup.com/" passHref>
              <Link target="_blank">https://www.swecogroup.com/</Link>
            </NextLink>
          </ListItem>{" "}
          <ListItem>
            <Meta>Obsurv</Meta>
            <NextLink href="https://obsurv.com/" passHref>
              <Link target="_blank">https://obsurv.com/</Link>
            </NextLink>
          </ListItem>
        </List>
        <List my={4}>
          <ListItem>
            <Meta>Sweco-NL</Meta>
            <NextLink href="https://www.sweco.nl/" passHref>
              <Link target="_blank">https://www.sweco.nl/</Link>
            </NextLink>
          </ListItem>{" "}
          <ListItem>
            <Meta>Obsurv-NL</Meta>
            <NextLink href="https://obsurv.nl/" passHref>
              <Link target="_blank">https://obsurv.nl/</Link>
            </NextLink>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

Sweco.getLayout = (page: ReactElement, router: Router) => {
  return (
    <MainLayout router={router}>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default Sweco;
