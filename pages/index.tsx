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
} from "@chakra-ui/react";
import MainLayout from "../components/layouts/main";
import ArticleLayout from "../components/layouts/article";
import { NextPageWithLayout } from "./_app";
import { ReactElement, useContext } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import SectionHeading from "../components/section-header";
import { InfoSection, DateSection } from "../components/sub-section";
import ImageGridItem from "../components/image-grid-item";
import Fade from "../components/transitions/fade";
import NextLink from "next/link";
import TabContext from "../contexts/tab-context";
import TabButton from "../components/tab-button";
import Head from "next/head";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop: any) =>
    ["width", "height", "src", "alt"].includes(prop),
});

const Home: NextPageWithLayout = () => {
  const { tabIndex, setTabIndex } = useContext(TabContext);

  return (
    <>
      {/* <Head>
        <title>Jamey&apos;s Portfolio</title>
      </Head> */}
      <Layout>
        <Container>
          <Box mt={3} mb={5}>
            <Box display={{ md: "flex" }}>
              <Box
                flexShrink={0}
                mt={{ base: 4, md: 0 }}
                mr={{ md: 6 }}
                textAlign="center"
              >
                <Box w="130px" h="160px">
                  <ProfileImage
                    borderRadius="xl"
                    width="100%"
                    height="100%"
                    src="profile-picture.png"
                    alt="Profile image"
                  />
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
            {/* Hello, I am a computer science student based in The Netherlands. */}
            Hello, I am a third-year computer science student, based in The
            Netherlands.
          </Box>
          <Section delay={0.2}>
            <SectionHeading>Education</SectionHeading>
            <InfoSection>
              <DateSection>
                09-2020 to{" "}
                <Text as="i" color={useColorModeValue("#3d7aed", "#ffdd99")}>
                  present{" "}
                </Text>
              </DateSection>
              <Text as="i">Computer Science</Text>
              <Box pl="10.25rem">
                at{" "}
                <NextLink href="https://www.rotterdamuas.com/" passHref>
                  <Link target="_blank">
                    Rotterdam University of Applied Sciences
                  </Link>
                </NextLink>
              </Box>
            </InfoSection>
            <InfoSection>
              <DateSection>09-2019 to 03-2020</DateSection>
              <Text as="i">Human Resource Management</Text>
              <Box pl="10.25rem">
                {" "}
                at{" "}
                <NextLink href="https://www.rotterdamuas.com/" passHref>
                  <Link target="_blank">
                    Rotterdam University of Applied Sciences
                  </Link>
                </NextLink>
              </Box>
            </InfoSection>
            <InfoSection>
              <DateSection>09-2018 to 12-2018</DateSection>
              <Text as="i">Business IT management</Text>
              <Box pl="10.25rem">
                {" "}
                at{" "}
                <NextLink href="https://www.rotterdamuas.com/" passHref>
                  <Link target="_blank">
                    Rotterdam University of Applied Sciences
                  </Link>
                </NextLink>
              </Box>
            </InfoSection>
            <InfoSection>
              <DateSection>09-2012 to 07-2017</DateSection>
              <Text as="i">HAVO Economics and Society</Text>
              <Box pl="10.25rem">
                at{" "}
                <Tooltip label="No website exists anymore, unfortunately.">
                  <Link>Calvijn Vreewijk</Link>
                </Tooltip>
              </Box>
            </InfoSection>
            <br />
            <SectionHeading>Experience</SectionHeading>
            <InfoSection>
              <DateSection>
                08-2022 to{" "}
                <Text as="i" color={useColorModeValue("#3d7aed", "#ffdd99")}>
                  present{" "}
                </Text>{" "}
              </DateSection>
              <Text as="i">(Intern) Software Engineer DevOps</Text> at{" "}
              <NextLink href="https://www.swecogroup.com/" passHref>
                <Link target="_blank">Sweco</Link>
              </NextLink>
            </InfoSection>
            <InfoSection>
              <DateSection>04-2019 to 09-2019</DateSection>
              <Text as="i">Sales promotor</Text> at{" "}
              <NextLink href="https://www.pepperminds.com/" passHref>
                <Link target="_blank">Pepperminds</Link>
              </NextLink>
            </InfoSection>
            <InfoSection>
              <DateSection>01-2019 to 06-2019</DateSection>
              <Text as="i">Store clerk</Text> at{" "}
              <NextLink href="https://www.ah.nl/over-ah" passHref>
                <Link target="_blank">Albert Heijn</Link>
              </NextLink>
            </InfoSection>
            <InfoSection>
              <DateSection>08-2018 to 09-2018</DateSection>
              <Text as="i">Waiter & Bartender</Text> at{" "}
              <NextLink href="https://venw.com/" passHref>
                <Link target="_blank">Verwiel en Wijngaard</Link>
              </NextLink>
            </InfoSection>
            <InfoSection>
              <DateSection>09-2017 to 06-2018</DateSection>
              <Text as="i">Cashier & Customer service</Text> at{" "}
              <NextLink href="https://www.makro.nl/over-makro" passHref>
                <Link target="_blank">Marko</Link>
              </NextLink>
            </InfoSection>
            <InfoSection>
              <DateSection>06-2015 to 06-2017</DateSection>
              <Text as="i">Store clerk</Text> at{" "}
              <NextLink href="https://www.ah.nl/over-ah" passHref>
                <Link target="_blank">Albert Heijn</Link>
              </NextLink>
            </InfoSection>
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
                <Tab
                  _selected={{
                    borderBottomColor: useColorModeValue("#525252", "#fff"),
                    borderRadius: "2px",
                    fontWeight: "bold",
                    textColor: useColorModeValue("#000", "#fff"),
                  }}
                >
                  <Text fontSize={20}>Languages</Text>
                </Tab>
                <Tab
                  _selected={{
                    borderBottomColor: useColorModeValue("#525252", "#fff"),
                    borderRadius: "2px",
                    fontWeight: "bold",
                    textColor: useColorModeValue("#000", "#fff"),
                  }}
                >
                  <Text fontSize={20}>Frameworks</Text>
                </Tab>
                <Tab
                  _selected={{
                    borderBottomColor: useColorModeValue("#525252", "#fff"),
                    borderRadius: "2px",
                    fontWeight: "bold",
                    textColor: useColorModeValue("#000", "#fff"),
                  }}
                >
                  <Text fontSize={20}>DevOps</Text>
                </Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <Fade>
                    <SimpleGrid columns={[1, 3, 3]} gap={6}>
                      <ImageGridItem
                        href="/languages/golang"
                        thumbnail="/svgs/gopher.svg"
                      >
                        <TabButton>Golang</TabButton>
                      </ImageGridItem>
                      <ImageGridItem
                        href="/languages/c-sharp"
                        thumbnail="/svgs/c-sharp.svg"
                      >
                        <TabButton>C# </TabButton>
                      </ImageGridItem>
                      <ImageGridItem
                        href="/languages/python"
                        thumbnail="/svgs/python.svg"
                      >
                        <TabButton>Python</TabButton>
                      </ImageGridItem>
                      <ImageGridItem
                        href="/languages/nodejs"
                        thumbnail="/svgs/nodejs.svg"
                      >
                        <TabButton>Node.js</TabButton>
                      </ImageGridItem>
                      <ImageGridItem
                        href="/languages/sql"
                        thumbnail="/svgs/sql.svg"
                      >
                        <TabButton>SQL</TabButton>
                      </ImageGridItem>
                      <ImageGridItem
                        href="/languages/other"
                        thumbnail="/svgs/other.svg"
                      >
                        <TabButton>Other</TabButton>
                      </ImageGridItem>
                    </SimpleGrid>
                  </Fade>
                </TabPanel>
                <TabPanel>
                  <Fade>
                    <SimpleGrid columns={[1, 3, 3]} gap={6}>
                      <ImageGridItem
                        href="/frameworks/dotnet"
                        thumbnail="/svgs/dotnet.svg"
                      >
                        <TabButton>.NET</TabButton>
                      </ImageGridItem>
                      <ImageGridItem
                        href="/frameworks/aspnet-core"
                        thumbnail="/svgs/dotnet-core.svg"
                        tooltip="ASP.NET Core"
                      >
                        <TabButton>ASP.NET ...</TabButton>
                      </ImageGridItem>
                      <ImageGridItem
                        href="/frameworks/ef-core"
                        thumbnail="/svgs/dotnet-core.svg"
                        tooltip="Entity Framework Core"
                      >
                        <TabButton>Entity Fr...</TabButton>
                      </ImageGridItem>
                      <ImageGridItem
                        href="/frameworks/react"
                        thumbnail="/svgs/react.svg"
                      >
                        <TabButton>React</TabButton>
                      </ImageGridItem>
                      <ImageGridItem
                        href="/frameworks/vue"
                        thumbnail="/svgs/vue.svg"
                      >
                        <TabButton>Vue</TabButton>
                      </ImageGridItem>
                    </SimpleGrid>
                  </Fade>
                </TabPanel>
                <TabPanel>
                  <Fade>
                    <SimpleGrid columns={[1, 3, 3]} gap={6}>
                      <ImageGridItem
                        href="/devops/docker"
                        thumbnail="/svgs/docker.svg"
                      >
                        <TabButton>Docker</TabButton>
                      </ImageGridItem>
                      <ImageGridItem
                        href="/devops/kubernetes"
                        thumbnail="/svgs/kubernetes.svg"
                      >
                        <TabButton>Kubernet...</TabButton>
                      </ImageGridItem>
                      <ImageGridItem
                        href="/devops/githubactions"
                        thumbnail="/svgs/github-actions.svg"
                        tooltip="GitHub Actions"
                      >
                        <TabButton>GitHub A...</TabButton>
                      </ImageGridItem>
                      <ImageGridItem
                        href="/devops/azure-pipelines"
                        thumbnail="/svgs/azure-pipelines.svg"
                        tooltip="Azure Pipelines"
                      >
                        <TabButton>Azure Pi...</TabButton>
                      </ImageGridItem>
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

Home.getLayout = (page: ReactElement) => {
  return (
    <MainLayout>
      <ArticleLayout>{page}</ArticleLayout>
    </MainLayout>
  );
};

export default Home;
