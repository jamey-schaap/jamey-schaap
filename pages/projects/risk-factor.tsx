import { ReactElement } from "react";
import { NextPageWithLayout } from "../_app";
import MainLayout from "../../components/layouts/main";
import ArticleLayout from "../../components/layouts/article";
import Layout from "../../components/layouts/article";
import { Badge, Container, Link, List, ListItem, Text } from "@chakra-ui/react";
import { Router } from "next/router";
import { HeadingImage, Meta, Title } from "../../components/projects";

const RiskFactor: NextPageWithLayout = () => {
  return (
    <Layout title="Risk Factor">
      <Container>
        <HeadingImage id="risk-factor" />
        <Title>
          Risk Factor <Badge>08/2023 - 02/2024</Badge>
        </Title>
        <Text as="p">
          The research paper &quot;Risk Radar&quot; aims to predict the risk for investors to invest in a given
          country by analysing political and economic factors through data science. Using machine
          learning models such as K-Nearest Neighbors, Support Vector Machines, and Artificial
          Neural Networks, the study examines the relationship between political stability, governance,
          and economic performance in influencing investment outcomes. The report provides
          investors with actionable insights for strategic decision-making in complex global markets,
          offering a nuanced understanding of risk variables. The comprehensive approach includes a
          literature review, data processing, and rigorous model testing to enhance the effectiveness
          of risk assessment.
        </Text>
        <List my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            Python 3.10, Tensorflow 2.14 & Keras
          </ListItem>
          <ListItem>
            <Meta>Github</Meta>
            <Link target="_blank" href="https://github.com/jamey-schaap/Minor-Data_Science-Project">https://github.com/jamey-schaap/Minor-Data_Science-Project</Link>{" "}
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

RiskFactor.getLayout = (page: ReactElement, router: Router) => {
  return (
    <MainLayout router={router}>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default RiskFactor;
