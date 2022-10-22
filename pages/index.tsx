import {
  Text,
  Box,
  Container,
  Button,
  SimpleGrid,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
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
import ImageGridItem from "../components/imageGridItem";
import { AiOutlineDoubleRight } from "react-icons/ai";
import { AnimatePresence } from "framer-motion";
import Fade from "../components/transitions/fade";

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
              <Text as="i" color="teal">
                present{" "}
              </Text>
            </DateSection>
            <Text as="i" color="teal">
              Computer Science
            </Text>
            <Box pl="10.25rem">at Rotterdam University of Applied Sciences</Box>
          </InfoSection>
          <InfoSection>
            <DateSection>09-2019 to 03-2020</DateSection>
            <Text as="i" color="teal">
              Human Resource Management
            </Text>
            <Box pl="10.25rem">at Rotterdam University of Applied Sciences</Box>
          </InfoSection>
          <InfoSection>
            <DateSection>09-2018 to 12-2018</DateSection>
            <Text as="i" color="teal">
              Business IT management
            </Text>
            <Box pl="10.25rem">at Rotterdam University of Applied Sciences</Box>
          </InfoSection>
          <InfoSection>
            <DateSection>09-2012 to 07-2017</DateSection>
            <Text as="i" color="teal">
              HAVO Economics and Society
            </Text>
            <Box pl="10.25rem">at CSG Calvijn Vreewijk</Box>
          </InfoSection>
          <br />
          <SectionHeading>Experience</SectionHeading>
          <InfoSection>
            <DateSection>
              08-2022 to{" "}
              <Text as="i" color="teal">
                present{" "}
              </Text>{" "}
            </DateSection>
            <Text as="i" color="teal">
              (Intern) Software Engineer DevOps
            </Text>{" "}
            at Sweco
          </InfoSection>
          <InfoSection>
            <DateSection>04-2019 to 09-2019</DateSection>
            <Text as="i" color="teal">
              Sales promotor
            </Text>{" "}
            at Pepperminds
          </InfoSection>
          <InfoSection>
            <DateSection>01-2019 to 06-2019</DateSection>
            <Text as="i" color="teal">
              Store clerk
            </Text>{" "}
            at Albert Heijn
          </InfoSection>
          <InfoSection>
            <DateSection>08-2018 to 09-2018</DateSection>
            <Text as="i" color="teal">
              Waiter & Bartender
            </Text>{" "}
            at Verwiel en Wijngaard
          </InfoSection>
          <InfoSection>
            <DateSection>09-2017 to 06-2018</DateSection>
            <Text as="i" color="teal">
              Cashier & Customer service
            </Text>{" "}
            at Makro
          </InfoSection>
          <InfoSection>
            <DateSection>06-2015 to 06-2017</DateSection>
            <Text as="i" color="teal">
              Store clerk
            </Text>{" "}
            at Albert Heijn
          </InfoSection>
          <br />
          <Tabs
            isLazy
            isFitted
            align="center"
            variant="line"
            colorScheme={useColorModeValue("#000", "#fff")}
            borderColor={useColorModeValue("white", "#525252")}
          >
            <TabList borderBottomWidth="2px" borderRadius="2px" color="gray">
              <Tab
                _selected={{
                  borderBottomColor: useColorModeValue("#525252", "white"),
                  borderRadius: "2px",
                  fontWeight: "bold",
                  textColor: useColorModeValue("#000", "#fff")
                }}
              >
                <Text fontSize={20}>Languages</Text>
              </Tab>
              <Tab
                _selected={{
                  borderBottomColor: useColorModeValue("#525252", "white"),
                  borderRadius: "2px",
                  fontWeight: "bold",
                  textColor: useColorModeValue("#000", "#fff")
                }}
              >
                <Text fontSize={20}>Frameworks</Text>
              </Tab>
              <Tab
                _selected={{
                  borderBottomColor: useColorModeValue("#525252", "white"),
                  borderRadius: "2px",
                  fontWeight: "bold",
                  textColor: useColorModeValue("#000", "#fff")
                }}
              >
                <Text fontSize={20}>DevOps</Text>
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Fade>
                  {/* <SectionHeading>Languages</SectionHeading> */}
                  <SimpleGrid columns={[1, 3, 3]} gap={6}>
                    <ImageGridItem href="/golang" thumbnail="/svgs/gopher.svg">
                      <Button leftIcon={<AiOutlineDoubleRight />}>
                        Golang
                      </Button>
                    </ImageGridItem>
                    <ImageGridItem href="/" thumbnail="/svgs/csharp.svg">
                      <Button leftIcon={<AiOutlineDoubleRight />}>C# </Button>
                    </ImageGridItem>
                    <ImageGridItem href="/" thumbnail="/svgs/python.svg">
                      <Button leftIcon={<AiOutlineDoubleRight />}>
                        Python
                      </Button>
                    </ImageGridItem>
                    <ImageGridItem href="/" thumbnail="/svgs/nodejs.svg">
                      <Button leftIcon={<AiOutlineDoubleRight />}>
                        Node.js
                      </Button>
                    </ImageGridItem>
                    <ImageGridItem href="/" thumbnail="/svgs/sql.svg">
                      <Button leftIcon={<AiOutlineDoubleRight />}>SQL</Button>
                    </ImageGridItem>
                    <ImageGridItem href="/" thumbnail="/svgs/other.svg">
                      <Button leftIcon={<AiOutlineDoubleRight />}>Other</Button>
                    </ImageGridItem>
                  </SimpleGrid>
                </Fade>
              </TabPanel>
              <TabPanel>
                <Fade>
                  {/* <SectionHeading>Frameworks</SectionHeading> */}
                  <SimpleGrid columns={[1, 3, 3]} gap={6}>
                    <ImageGridItem href="/" thumbnail="/svgs/dotnet.svg">
                      <Button leftIcon={<AiOutlineDoubleRight />}>.NET</Button>
                    </ImageGridItem>
                    <ImageGridItem href="/" thumbnail="/svgs/dotnetcore.svg">
                      <Button leftIcon={<AiOutlineDoubleRight />}>
                        ASP.NET Core
                      </Button>
                    </ImageGridItem>
                    <ImageGridItem href="/" thumbnail="/svgs/dotnetcore.svg">
                      <Button leftIcon={<AiOutlineDoubleRight />}>
                        EF Core
                      </Button>
                    </ImageGridItem>
                    <ImageGridItem href="/" thumbnail="/svgs/react.svg">
                      <Button leftIcon={<AiOutlineDoubleRight />}>React</Button>
                    </ImageGridItem>
                    <ImageGridItem href="/" thumbnail="/svgs/vue.svg">
                      <Button leftIcon={<AiOutlineDoubleRight />}>Vue</Button>
                    </ImageGridItem>
                  </SimpleGrid>
                </Fade>
              </TabPanel>
              <TabPanel>
                <Fade>
                  {/* <SectionHeading>DevOps</SectionHeading> */}
                  <SimpleGrid columns={[1, 3, 3]} gap={6}>
                    <ImageGridItem href="/" thumbnail="/svgs/docker.svg">
                      <Button leftIcon={<AiOutlineDoubleRight />}>
                        Docker
                      </Button>
                    </ImageGridItem>
                    <ImageGridItem href="/" thumbnail="/svgs/Kubernetes.svg">
                      <Button leftIcon={<AiOutlineDoubleRight />}>
                        Kubernetes
                      </Button>
                    </ImageGridItem>
                    <ImageGridItem href="/" thumbnail="/svgs/githubactions.svg">
                      <Button leftIcon={<AiOutlineDoubleRight />}>
                        Actions
                      </Button>
                    </ImageGridItem>
                    <ImageGridItem href="/" thumbnail="/svgs/githubactions.svg">
                      <Button leftIcon={<AiOutlineDoubleRight />}>
                        Actions
                      </Button>
                    </ImageGridItem>
                  </SimpleGrid>
                </Fade>
              </TabPanel>
            </TabPanels>
          </Tabs>
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
