import {
  Text,
  Box,
  Container,
  Button,
  SimpleGrid,
  GridItem,
} from "@chakra-ui/react";
import MainLayout from "../components/layouts/main";
import ArticleLayout from "../components/layouts/article";
import { NextPageWithLayout } from "./_app";
import { ReactElement } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import SectionHeading from "../components/sectionHeader";
import { InfoSection, DateSection } from "../components/subSection";
import { TbPepper } from "react-icons/tb";
import ImageGridItem from "../components/imageGridItem";

const Home: NextPageWithLayout = () => {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          p={3}
          textAlign="center"
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
        >
          Hello, I&apos;m a Computer Science student.
        </Box>
        <Section delay={0.2}>
          <SectionHeading>Education</SectionHeading>
          <InfoSection>
            <DateSection>
              09-2020 to{" "}
              <Text as="i" color={useColorModeValue("purple", "orange")}>
                present{" "}
              </Text>
            </DateSection>
            <Text as="i" color={useColorModeValue("purple", "orange")}>
              Computer Science
            </Text>
            <Box pl="10.25rem">at Rotterdam University of Applied Sciences</Box>
          </InfoSection>
          <InfoSection>
            <DateSection>09-2019 to 03-2020</DateSection>
            <Text as="i" color="red">
              Human Resource Management
            </Text>
            <Box pl="10.25rem">at Rotterdam University of Applied Sciences</Box>
          </InfoSection>
          <InfoSection>
            <DateSection>09-2018 to 12-2018</DateSection>
            <Text as="i" color="red">
              Business IT management
            </Text>
            <Box pl="10.25rem">at Rotterdam University of Applied Sciences</Box>
          </InfoSection>
          <InfoSection>
            <DateSection>09-2012 to 07-2017</DateSection>
            <Text as="i" color="green">
              HAVO Economics and Society
            </Text>
            <Box pl="10.25rem">at CSG Calvijn Vreewijk</Box>
          </InfoSection>
          <br />
          <SectionHeading>Experience</SectionHeading>
          <InfoSection>
            <DateSection>
              08-2022 to{" "}
              <Text as="i" color={useColorModeValue("purple", "orange")}>
                present{" "}
              </Text>{" "}
            </DateSection>
            <Text as="i" color={useColorModeValue("purple", "orange")}>
              (Intern) Software Engineer DevOps
            </Text>{" "}
            at Sweco
          </InfoSection>
          <InfoSection>
            <DateSection>04-2019 to 09-2019</DateSection>
            <Text as="i" color={useColorModeValue("purple", "orange")}>
              Sales promotor
            </Text>{" "}
            at Pepperminds
          </InfoSection>
          <InfoSection>
            <DateSection>01-2019 to 06-2019</DateSection>
            <Text as="i" color={useColorModeValue("purple", "orange")}>
              Store clerk
            </Text>{" "}
            at Albert Heijn
          </InfoSection>
          <InfoSection>
            <DateSection>08-2018 to 09-2018</DateSection>
            <Text as="i" color={useColorModeValue("purple", "orange")}>
              Waiter & Bartender
            </Text>{" "}
            at Verwiel en Wijngaard
          </InfoSection>
          <InfoSection>
            <DateSection>09-2017 to 06-2018</DateSection>
            <Text as="i" color={useColorModeValue("purple", "orange")}>
              Cashier & Customer service
            </Text>{" "}
            at Makro
          </InfoSection>
          <InfoSection>
            <DateSection>06-2015 to 06-2017</DateSection>
            <Text as="i" color={useColorModeValue("purple", "orange")}>
              Store clerk
            </Text>{" "}
            at Albert Heijn
          </InfoSection>
          <br />
          <SectionHeading>Languages</SectionHeading>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <ImageGridItem
              href="/golang"
              title="Golang"
              thumbnail="/svgs/gopher.svg"
            />
            <ImageGridItem href="/" title="C#" thumbnail="/svgs/csharp.svg" />
            <ImageGridItem
              href="/"
              title="Python"
              thumbnail="/svgs/python.svg"
            />
            <ImageGridItem href="/" title="Other" thumbnail="/svgs/other.svg" />
          </SimpleGrid>
          <br />
          {/* Golang - C# - Python - Javascript/Typescript - SQL - Bash
          <SectionHeading>Frameworks</SectionHeading>
          React - Vue - Nextjs - ASP.Net core - Entity Framework Core - Gin
          <SectionHeading>Tech tools</SectionHeading>
          Docker - Kubernetes - GitHub Actions */}
        </Section>
      </Container>
    </Layout>
  );
};

Home.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default Home;
