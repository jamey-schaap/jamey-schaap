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

const JenkinsMSTeamsIntegration: NextPageWithLayout = () => {
  return (
    <Layout title="JenkinsMSTeamsIntegration">
      <Container>
        <HeadingImage id="jenkins-msteams-integration" />
        <Title>
          Jenkins & Microsoft Teams integration <Badge>11/2022 - 01/2023</Badge>
        </Title>
        <Text as="p">
          The project is in a integration I created during my internship at{" "}
          <NextLink href="https://www.swecogroup.com/" passHref>
            <Link target="_blank">Sweco</Link>
          </NextLink>{" "}
          for the Obsurv Software team. This integration makes it possible to
          notify developers of about the results of specific Jenkins builds.{" "}
          <br />
          <br /> The project consists of two version, Post-Job-Sequence (Main
          version) which monitors a sequence of jobs and is able to notify if
          one of the jobs had the status NOT_BUILT. And Post-Job which monitors
          a single job (or an array of independent jobs) and is not able to notify if a job had the status
          NOT_BUILT.
        </Text>
        <List my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            PowerShell Core 7.2
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <NextLink
              href="https://github.com/jaim-io/jenkins-ms_teams-plugin"
              passHref
            >
              <Link target="_blank">
                https://github.com/jaim-io/jenkins-ms_teams-plugin
              </Link>
            </NextLink>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

JenkinsMSTeamsIntegration.getLayout = (page: ReactElement, router: Router) => {
  return (
    <MainLayout router={router}>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default JenkinsMSTeamsIntegration;
