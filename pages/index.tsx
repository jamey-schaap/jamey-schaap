import {
  Text,
  Box,
  Container,
  SimpleGrid,
  Tabs,
  TabList,
  Tab,
  TabPanel,
  TabPanels,
  Link,
  Image,
  Tooltip,
  chakra,
  Heading,
  Divider,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import MainLayout from "../components/layouts/main";
import ArticleLayout from "../components/layouts/article";
import { NextPageWithLayout } from "./_app";
import { ReactElement, useContext } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import SectionHeading from "../components/section-header";
import TabItem from "../components/tab-item";
import Fade from "../components/transitions/fade";
import NextLink from "next/link";
import TabContext from "../contexts/tab-context";
import TabButton from "../components/tab-button";
import Head from "next/head";
import TabHeader from "../components/tab-header";
import { Router } from "next/router";
import SectionRow, {
  SectionDate,
  SectionInfo,
} from "../components/section-row";
import Unselectable from "../components/unselectable";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop: any) =>
    ["width", "height", "src", "alt"].includes(prop),
});

const Home: NextPageWithLayout = () => {
  const { tabIndex, setTabIndex } = useContext(TabContext);

  return (
    <>
      <Head key="page-title">
        <title>Jamey&apos;s Portfolio</title>
      </Head>
      <Layout>
        <Container>
          <Box mt={3} mb={5}>
            <Box
              display={{ sm: "flex" }}
              textAlign={{ base: "center", sm: "left" }}
            >
              <Box
                flexShrink={0}
                mt={{ base: 4, md: 0 }}
                mr={{ sm: 6 }}
                textAlign="center"
                display={{ base: "flex", sm: "" }}
                justifyContent={{ base: "center", sm: "" }}
              >
                <Box w="130px" h="160px">
                  <Unselectable>
                    <ProfileImage
                      borderRadius="xl"
                      width="100%"
                      height="100%"
                      src="/images/profile-picture.png"
                      alt="Profile image"
                    />
                  </Unselectable>
                </Box>
              </Box>
              <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                  Jamey Schaap
                </Heading>
                <Text as="i">Third-year computer science student</Text>
                <Divider
                  borderColor={useColorModeValue("#525252", "inherit")}
                />
                <Text as="i">Intern Software Engineer DevOps</Text>
                <Divider
                  borderColor={useColorModeValue("#525252", "inherit")}
                />
                <br />
                <Divider
                  borderColor={useColorModeValue("#525252", "inherit")}
                />
                <br />
                <Divider
                  borderColor={useColorModeValue("#525252", "inherit")}
                />
              </Box>
            </Box>
          </Box>
          <Box
            borderRadius="lg"
            p={3}
            textAlign="center"
            bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
            css={{ backdropFilter: "blur(10px)" }}
          >
            Hello, I am a third-year computer science student, based in The
            Netherlands.
          </Box>
          <Section delay={0.2}>
            <SectionHeading>Education</SectionHeading>
            <SectionRow>
              <SectionDate>
                09-2020 to{" "}
                <Text as="i" color={useColorModeValue("#3d7aed", "#ffdd99")}>
                  present{" "}
                </Text>
              </SectionDate>
              <SectionInfo>
                <Text as="i">Computer Science</Text> at{" "}
                <NextLink href="https://www.rotterdamuas.com/" passHref>
                  <Link target="_blank">
                    Rotterdam University of Applied Sciences
                  </Link>
                </NextLink>
              </SectionInfo>
            </SectionRow>
            <SectionRow>
              <SectionDate>09-2019 to 03-2020</SectionDate>
              <SectionInfo>
                <Text as="i">Human Resource Management</Text> at{" "}
                <NextLink href="https://www.rotterdamuas.com/" passHref>
                  <Link target="_blank">
                    Rotterdam University of Applied Sciences
                  </Link>
                </NextLink>
              </SectionInfo>
            </SectionRow>
            <SectionRow>
              <SectionDate>09-2018 to 12-2018</SectionDate>
              <SectionInfo>
                <Text as="i">Business IT management</Text> at{" "}
                <NextLink href="https://www.rotterdamuas.com/" passHref>
                  <Link target="_blank">
                    Rotterdam University of Applied Sciences
                  </Link>
                </NextLink>
              </SectionInfo>
            </SectionRow>
            <SectionRow>
              <SectionDate>09-2012 to 07-2017</SectionDate>
              <SectionInfo>
                <Text as="i">HAVO Economics and Society</Text> at{" "}
                <Tooltip label="No website exists anymore, unfortunately.">
                  <Link>Calvijn Vreewijk</Link>
                </Tooltip>
              </SectionInfo>
            </SectionRow>
            <br />
            <SectionHeading>Experience</SectionHeading>
            <SectionRow>
              <SectionDate>
                08-2022 to{" "}
                <Text as="i" color={useColorModeValue("#3d7aed", "#ffdd99")}>
                  present{" "}
                </Text>{" "}
              </SectionDate>
              <SectionInfo>
                <Text as="i">(Intern) Software Engineer DevOps</Text> at{" "}
                <NextLink href="https://www.swecogroup.com/" passHref>
                  <Link target="_blank">Sweco</Link>
                </NextLink>
              </SectionInfo>
            </SectionRow>
            <SectionRow>
              <SectionDate>04-2019 to 09-2019</SectionDate>
              <SectionInfo>
                <Text as="i">Sales promotor</Text> at{" "}
                <NextLink href="https://www.pepperminds.com/" passHref>
                  <Link target="_blank">Pepperminds</Link>
                </NextLink>
              </SectionInfo>
            </SectionRow>
            <SectionRow>
              <SectionDate>01-2019 to 06-2019</SectionDate>
              <SectionInfo>
                <Text as="i">Store clerk</Text> at{" "}
                <NextLink href="https://www.ah.nl/over-ah" passHref>
                  <Link target="_blank">Albert Heijn</Link>
                </NextLink>
              </SectionInfo>
            </SectionRow>
            <SectionRow>
              <SectionDate>08-2018 to 09-2018</SectionDate>
              <SectionInfo>
                <Text as="i">Waiter & Bartender</Text> at{" "}
                <NextLink href="https://venw.com/" passHref>
                  <Link target="_blank">Verwiel en Wijngaard</Link>
                </NextLink>
              </SectionInfo>
            </SectionRow>
            <SectionRow>
              <SectionDate>09-2017 to 06-2018</SectionDate>
              <SectionInfo>
                <Text as="i">Cashier & Customer service</Text> at{" "}
                <NextLink href="https://www.makro.nl/over-makro" passHref>
                  <Link target="_blank">Marko</Link>
                </NextLink>
              </SectionInfo>
            </SectionRow>
            <SectionRow>
              <SectionDate>06-2015 to 06-2017</SectionDate>
              <SectionInfo>
                <Text as="i">Store clerk</Text> at{" "}
                <NextLink href="https://www.ah.nl/over-ah" passHref>
                  <Link target="_blank">Albert Heijn</Link>
                </NextLink>
              </SectionInfo>
            </SectionRow>
            <br />
            <Tabs
              isLazy
              isFitted
              align="center"
              variant="line"
              colorScheme={useColorModeValue("#000", "#fff")}
              borderColor={useColorModeValue("white", "#525252")}
              onChange={(index) => setTabIndex(index)}
              defaultIndex={tabIndex}
            >
              <TabList borderBottomWidth="2px" borderRadius="2px" color="gray">
                <TabHeader>
                  <Text fontSize={{ base: "18", md: "20" }}>Languages</Text>
                </TabHeader>
                <TabHeader>
                  <Text fontSize={{ base: "18", md: "20" }}>Frameworks</Text>
                </TabHeader>
                <TabHeader>
                  <Text fontSize={{ base: "18", md: "20" }}>DevOps</Text>
                </TabHeader>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Fade>
                    <SimpleGrid columns={[2, 3, 3]} gap={6}>
                      <TabItem
                        href="https://go.dev/"
                        thumbnail="/svgs/gopher.svg"
                      >
                        <TabButton>Golang</TabButton>
                      </TabItem>
                      <TabItem
                        href="https://learn.microsoft.com/en-us/dotnet/csharp/"
                        thumbnail="/svgs/c-sharp.svg"
                      >
                        <TabButton>C# </TabButton>
                      </TabItem>
                      <TabItem
                        href="https://www.python.org/"
                        thumbnail="/svgs/python.svg"
                      >
                        <TabButton>Python</TabButton>
                      </TabItem>
                      <TabItem
                        href="https://www.typescriptlang.org/"
                        thumbnail="/svgs/typescript.svg"
                      >
                        <TabButton>Typescript</TabButton>
                      </TabItem>
                      <TabItem
                        href="https://en.wikipedia.org/wiki/SQL"
                        thumbnail="/svgs/sql.svg"
                      >
                        <TabButton>SQL</TabButton>
                      </TabItem>
                    </SimpleGrid>
                  </Fade>
                </TabPanel>
                <TabPanel>
                  <Fade>
                    <SimpleGrid columns={[2, 3, 3]} gap={6}>
                      <TabItem
                        href="https://dotnet.microsoft.com/en-us/"
                        thumbnail="/svgs/dotnet.svg"
                      >
                        <TabButton>.NET</TabButton>
                      </TabItem>
                      <TabItem
                        href="https://dotnet.microsoft.com/en-us/apps/aspnet"
                        thumbnail="/svgs/dotnet-core.svg"
                        tooltip="ASP.NET Core"
                      >
                        <TabButton>ASP.NET ...</TabButton>
                      </TabItem>
                      <TabItem
                        href="https://learn.microsoft.com/en-us/ef/core/"
                        thumbnail="/svgs/dotnet-core.svg"
                        tooltip="Entity Framework Core"
                      >
                        <TabButton>Entity Fr...</TabButton>
                      </TabItem>
                      <TabItem
                        href="https://reactjs.org/"
                        thumbnail="/svgs/react.svg"
                      >
                        <TabButton>React</TabButton>
                      </TabItem>
                      <TabItem
                        href="https://vuejs.org/"
                        thumbnail="/svgs/vue.svg"
                      >
                        <TabButton>Vue</TabButton>
                      </TabItem>
                      <TabItem
                        href="https://nextjs.org/"
                        thumbnail={useColorModeValue(
                          "/svgs/nextjs-black.svg",
                          "/svgs/nextjs-white.svg"
                        )}
                      >
                        <TabButton>Next.js</TabButton>
                      </TabItem>
                    </SimpleGrid>
                  </Fade>
                </TabPanel>
                <TabPanel>
                  <Fade>
                    <SimpleGrid columns={[2, 3, 3]} gap={6}>
                      <TabItem
                        href="https://www.docker.com/"
                        thumbnail="/svgs/docker.svg"
                      >
                        <TabButton>Docker</TabButton>
                      </TabItem>
                      <TabItem
                        href="https://kubernetes.io/"
                        thumbnail="/svgs/kubernetes.svg"
                        tooltip="Kubernetes"
                      >
                        <TabButton>Kubernet...</TabButton>
                      </TabItem>
                      <TabItem
                        href="https://github.com/features/actions"
                        thumbnail="/svgs/github-actions.svg"
                        tooltip="GitHub Actions"
                      >
                        <TabButton>GitHub A...</TabButton>
                      </TabItem>
                      <TabItem
                        href="https://azure.microsoft.com/en-us/products/devops/pipelines/"
                        thumbnail="/svgs/azure-pipelines.svg"
                        tooltip="Azure Pipelines"
                      >
                        <TabButton>Azure Pi...</TabButton>
                      </TabItem>
                    </SimpleGrid>
                  </Fade>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Section>
        </Container>
      </Layout>
    </>
  );
};

Home.getLayout = (page: ReactElement, router: Router) => {
  return (
    <MainLayout router={router}>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default Home;
