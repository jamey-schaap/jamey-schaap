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
import { ReactElement } from "react";

const Sweco: NextPageWithLayout = () => {
  return (
    <Layout title="Sweco">
      <Container>
        <HeadingImage id={useColorModeValue("sweco-black", "sweco-white")} />
        <Title>
          Sweco <Badge>08/2022 - 02/2023</Badge>
        </Title>
        <Text as="p">
          From August 2022 to Febuary 2023, I worked an internship at{" "}
          <Link target="_blank" href="https://www.swecogroup.com/">Sweco</Link>{" "}
          as a Software Engineer DevOps. I worked within the DevSecOps team of
          Obsurv Software which falls under the GIS & ICT department. Team
          Obsurv Software develops a number of products, one of which{" "}
          <Link target="_blank" href="https://obsurv.nl/">Obsurv</Link>
          , a web-based management system.
          <br />
          <br />
          During my internship I mainly focused on ten learning objectives,
          which were linked to six competencies (manage and control, analysing,
          advising, designing, realizing and professional skills) and created a
          portfolio about this. In addition to this I also worked on the product
          backlog. These were diverse tasks such as automation, working on the
          CI/CD infrastructure and executing many different Scrum Spikes.
        </Text>
        <Text as="p" mt={4}>
          These were some things I did in order to complete my learning objectives:
        </Text>
        <UnorderedList pl={4}>
          <ListItem>
            Conducted research and created an advisory report regarding three
            DevOps platforms (Jenkins, Azure DevOps and GitHub Actions);
          </ListItem>
          <ListItem>
            Conducted research and createds POCs (Proof of Concepts) for CVE
            detection regarding SCA (Software Composition Analysis) and DAST
            (Dynamic Application Security Scanning) scanning. For SCA
            (Retire.js, Owasp Dependency Check, Grype, Debricked, Snyk and Mend
            bolt) and for DAST (OWASP Zap Proxy, StackHawk and Probely);
          </ListItem>
          <ListItem>
            Setup a number of multi pipline projects in Jenkins;
          </ListItem>
          <ListItem>Created an integration between Jenkins and Microsoft Teams in PowerShell Core;</ListItem>
        </UnorderedList>
        <List my={4}>
          <ListItem>
            <Meta>Scripting</Meta>
            Powershell, Bash & Batch
          </ListItem>
          <ListItem>
            <Meta>DevOps</Meta>
            Ansible (IaC), Jenkins & Azure DevOps
          </ListItem>
          <ListItem>
            <Meta>Security</Meta>
            SCA, SBOM, SAST & DAST
          </ListItem>
          <ListItem>
            <Meta>Scrum</Meta>
            Agile Scrum &{" "}
            <Link target="_blank" href="https://www.scaledagileframework.com/">SAFe 5</Link>
          </ListItem>
        </List>
        <List my={4}>
          <ListItem>
            <Meta>Sweco</Meta>
            <Link target="_blank" href="https://www.swecogroup.com/">https://www.swecogroup.com/</Link>
          </ListItem>{" "}
          <ListItem>
            <Meta>Obsurv</Meta>
            <Link target="_blank" href="https://obsurv.com/">https://obsurv.com/</Link>
          </ListItem>
        </List>
        <List my={4}>
          <ListItem>
            <Meta>Sweco-NL</Meta>
            <Link href="https://www.sweco.nl/" target="_blank">https://www.sweco.nl/</Link>
          </ListItem>{" "}
          <ListItem>
            <Meta>Obsurv-NL</Meta>
            <Link href="https://obsurv.nl/" target="_blank">https://obsurv.nl/</Link>
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
