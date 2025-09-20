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
  Text,
} from "@chakra-ui/react";
import { Router } from "next/router";
import { HeadingImage, Meta, Title } from "../../components/experience";
import { ReactElement } from "react";

const VirtualVaults: NextPageWithLayout = () => {
  return (
    <Layout title="Virtual Vaults">
      <Container>
        <HeadingImage id="virtual-vaults" />
        <Title>
          VirtualVaults <Badge>07/2024 - Present</Badge>
        </Title>
        <Box gap="12px" display="flex" flexDirection="column">
          <Text as="p">
            I am currently working for Virtual Vaults. I have worked on- and in
            the teams of both our products Data Rooms and Workspaces, the latter
            of which I&apos;m currently working on.
          </Text>
          <Text as="p">
            I&apos;m responsible for creating the necessary fronted- and backend
            code and infrastructure in collaboration with my team to get new
            features to our users.
          </Text>
        </Box>

        <List my={4}>
          <ListItem>
            <Meta>Languages</Meta>
            C#, TypeScript, HTML, SCSS & Bicep (DSL)
          </ListItem>
          <ListItem>
            <Meta>Frameworks</Meta>
            ASP.NET Core & Angular
          </ListItem>
          <ListItem>
            <Meta>DevOps</Meta>
            Azure, Bicep, Azure Pipelines & Docker
          </ListItem>
          <ListItem>
            <Meta>Scrum</Meta>
            Agile Scrum &{" "}
          </ListItem>
        </List>
        <List my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link target="_blank" href="https://virtualvaults.com/">
              virtualvaults.com
            </Link>
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

VirtualVaults.getLayout = (page: ReactElement, router: Router) => {
  return (
    <MainLayout router={router}>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default VirtualVaults;
