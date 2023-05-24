import {
  Text,
  Box,
  Container,
  SimpleGrid,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Link,
  Image,
  Tooltip,
  chakra,
  Heading,
  Divider,
  Center,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import MainLayout from "../components/layouts/main";
import ArticleLayout from "../components/layouts/article";
import { NextPageWithLayout } from "./_app";
import { ReactElement, useContext, useState } from "react";
import { useColorModeValue } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section, {
  SectionHeading,
  SectionRow,
  SectionDate,
  SectionInfo,
} from "../components/section";
import TabItem, {
  TabButton,
  TabActionButton,
  TabHeader,
  TabItemManager,
} from "../components/tab";
import Fade from "../components/transitions/fade";
import NextLink from "next/link";
import TabContext from "../contexts/tab-context";
import Head from "next/head";
import { Router } from "next/router";
import Unselectable from "../components/unselectable";
import {
  BashModal,
  CSharpModal,
  GolangModal,
  PowershellModal,
  PythonModal,
  SQLModal,
  TypescriptModal,
} from "../components/modal-content/language-modals";
import {
  ASPNETCoreModal,
  DotNetModal,
  EFCoreModal,
  NextJSModal,
  ReactModal,
  VueModal,
} from "../components/modal-content/framework-modals";
import {
  AzurePipelinesModal,
  DockerModal,
  GitHubActionsModal,
  JenkinsModal,
  KubernetesModal,
} from "../components/modal-content/devops-modals";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";

const ProfileImage = chakra(Image, {
  shouldForwardProp: (prop: any) =>
    ["width", "height", "src", "alt"].includes(prop),
});

const Home: NextPageWithLayout = () => {
  const { tabIndex, setTabIndex } = useContext(TabContext);
  const dividerColor = useColorModeValue("#525252", "inherit");
  const certificateLinkStyle = {
    color: useColorModeValue("black", "white"),
    "&:hover": {
      color: useColorModeValue("#3d7aed", "#ffdd99"),
    },
  };

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
                      borderColor="whiteAlpha.700"
                      borderWidth={2}
                      borderStyle="solid"
                      width="100%"
                      height="100%"
                      src="/images/profile-picture.png"
                      alt="Profile image"
                      placeholder
                    />
                  </Unselectable>
                </Box>
              </Box>
              <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                  Jamey Schaap
                </Heading>
                <Text as="i">Third-year computer science student</Text>
                <Divider borderColor={dividerColor} />
                <Text as="i">Fitness & programming enthusiast</Text>
                <Divider borderColor={dividerColor} />
                <br />
                <Divider borderColor={dividerColor} />
                <Text display="inline-flex" alignItems="center" gap={1} pr={10}>
                  <IoLogoGithub />
                  <NextLink href="https://github.com/jaim-io" passHref>
                    <Link target="_blank">GitHub</Link>
                  </NextLink>
                </Text>
                <Text display="inline-flex" alignItems="center" gap={1}>
                  <IoLogoLinkedin />
                  <NextLink
                    href="https://www.linkedin.com/in/jamey-schaap/"
                    passHref
                  >
                    <Link target="_blank">LinkedIn</Link>
                  </NextLink>
                </Text>
                <Divider borderColor={dividerColor} />
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
            <Section>
              <SectionRow>
                <SectionDate>
                  02-2023 to{" "}
                  <Text as="i" color={useColorModeValue("#3d7aed", "#ffdd99")}>
                    present{" "}
                  </Text>
                </SectionDate>
                <SectionInfo>
                  <Text as="i">Minor Software Engineering</Text> at{" "}
                  <NextLink href="https://www.rotterdamuas.com/" passHref>
                    <Link target="_blank">
                      Rotterdam University of Applied Sciences
                    </Link>
                  </NextLink>
                </SectionInfo>
              </SectionRow>
              <SectionRow>
                <SectionDate>
                  09-2020 to{" "}
                  <Text as="i" color={useColorModeValue("#3d7aed", "#ffdd99")}>
                    present{" "}
                  </Text>
                </SectionDate>
                <SectionInfo>
                  <Text as="i">BSc Computer Science</Text> at{" "}
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
                  <Text as="i">BSc Human Resource Management</Text> at{" "}
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
                  <Text as="i">BSc Business IT management</Text> at{" "}
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
                    <Link>CSG Calvijn Vreewijk</Link>
                  </Tooltip>
                </SectionInfo>
              </SectionRow>
            </Section>
            <br />
            <Tabs
              isLazy
              isFitted
              variant="line"
              colorScheme={useColorModeValue("#000", "#fff")}
              borderColor={useColorModeValue("white", "#525252")}
              onChange={(index) => setTabIndex(index)}
            >
              <TabList borderBottomWidth="2px" borderRadius="2px" color="gray">
                <TabHeader>
                  <Text fontSize={{ base: "18", md: "20" }}>Experience</Text>
                </TabHeader>
                <TabHeader>
                  <Text fontSize={{ base: "18", md: "20" }}>Certificates</Text>
                </TabHeader>
              </TabList>
              <TabPanels>
                <TabPanel pl={0} pr={0} pb={0} pt={2.5}>
                  <Section>
                    <SectionRow>
                      <SectionDate>08-2022 to 03-2023</SectionDate>
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
                        <NextLink
                          href="https://www.makro.nl/over-makro"
                          passHref
                        >
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
                  </Section>
                </TabPanel>
                <TabPanel pl={0} pr={0} pb={0} pt={2.5}>
                  <Section>
                    <SectionRow columnWith={70}>
                      <SectionDate>11-2022</SectionDate>
                      <SectionInfo>
                        <Text as="i">
                          Propedeutic Certificate in Computer Science
                        </Text>{" "}
                        at{" "}
                        <NextLink href="https://www.rotterdamuas.com/" passHref>
                          <Link target="_blank">
                            Rotterdam University of Applied Sciences
                          </Link>
                        </NextLink>
                      </SectionInfo>
                    </SectionRow>
                    <SectionRow columnWith={70}>
                      <SectionDate>11-2022</SectionDate>
                      <SectionInfo>
                        <NextLink
                          href="https://www.udemy.com/certificate/UC-b512d857-2377-4f19-a6aa-15b1a09474ce/"
                          passHref
                        >
                          <Link target="_blank" css={certificateLinkStyle}>
                            <Text as="i">
                              Kubernetes for the Absolute Beginners - Hands-on
                            </Text>{" "}
                            at{" "}
                            <NextLink
                              href="https://www.udemy.com/course/learn-kubernetes/"
                              passHref
                            >
                              <Link target="_blank">Udemy</Link>
                            </NextLink>
                          </Link>
                        </NextLink>
                      </SectionInfo>
                    </SectionRow>
                    <SectionRow columnWith={70}>
                      <SectionDate>10-2022</SectionDate>
                      <SectionInfo>
                        <NextLink
                          href="https://ude.my/UC-50f4e1df-7750-4371-a1b4-aef72cbcd49f/"
                          passHref
                        >
                          <Link target="_blank" css={certificateLinkStyle}>
                            <Text as="i">
                              The Complete SQL bootcamp 2022: Go from Zero to
                              Hero
                            </Text>
                            at{" "}
                            <NextLink
                              href="https://www.udemy.com/course/the-complete-sql-bootcamp/"
                              passHref
                            >
                              <Link target="_blank">Udemy</Link>
                            </NextLink>
                          </Link>
                        </NextLink>
                      </SectionInfo>
                    </SectionRow>
                    <SectionRow columnWith={70}>
                      <SectionDate>01-2022</SectionDate>
                      <SectionInfo>
                        <NextLink
                          href="https://ude.my/UC-cfec9deb-dcad-4353-90e1-14cba7797642/"
                          passHref
                        >
                          <Link target="_blank" css={certificateLinkStyle}>
                            <Text as="i">
                              C# Advanced Topics: Prepare for Technical
                              Interviews
                            </Text>{" "}
                            at{" "}
                            <NextLink
                              href="https://www.udemy.com/course/csharp-advanced/"
                              passHref
                            >
                              <Link target="_blank">Udemy</Link>
                            </NextLink>
                          </Link>
                        </NextLink>
                      </SectionInfo>
                    </SectionRow>
                    <SectionRow columnWith={70}>
                      <SectionDate>01-2022</SectionDate>
                      <SectionInfo>
                        <NextLink
                          href="https://ude.my/UC-e484720a-0081-43b8-895f-137890c601b5/"
                          passHref
                        >
                          <Link target="_blank" css={certificateLinkStyle}>
                            <Text as="i">
                              C# Intermediate: Classes, Interfaces and OOP
                            </Text>{" "}
                            at{" "}
                            <NextLink
                              href="https://www.udemy.com/course/csharp-intermediate-classes-interfaces-and-oop/"
                              passHref
                            >
                              <Link target="_blank">Udemy</Link>
                            </NextLink>
                          </Link>
                        </NextLink>
                      </SectionInfo>
                    </SectionRow>
                    <SectionRow columnWith={70}>
                      <SectionDate>10-2021</SectionDate>
                      <SectionInfo>
                        <NextLink
                          href="https://ude.my/UC-2624a9a1-0560-429c-a2c6-51f9784365d4/"
                          passHref
                        >
                          <Link target="_blank" css={certificateLinkStyle}>
                            <Text as="i">
                              C# Basics for Beginners: Learn C# Fundamentals by
                              Coding
                            </Text>{" "}
                            at{" "}
                            <NextLink
                              href="https://www.udemy.com/course/csharp-tutorial-for-beginners/"
                              passHref
                            >
                              <Link target="_blank">Udemy</Link>
                            </NextLink>
                          </Link>
                        </NextLink>
                      </SectionInfo>
                    </SectionRow>
                  </Section>
                </TabPanel>
              </TabPanels>
            </Tabs>
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
                  <TabItemManager>
                    <TabItem
                      thumbnail="/svgs/languages/c-sharp.svg"
                      title="C#"
                      modalContent={<CSharpModal />}
                    >
                      <TabButton>C# </TabButton>
                    </TabItem>
                    <TabItem
                      thumbnail="/svgs/languages/typescript.svg"
                      title="Typescript"
                      modalContent={<TypescriptModal />}
                    >
                      <TabButton>Typescript</TabButton>
                    </TabItem>
                    <TabItem
                      thumbnail="/svgs/languages/gopher.svg"
                      title="Golang"
                      modalContent={<GolangModal />}
                    >
                      <TabButton>Golang</TabButton>
                    </TabItem>
                    <TabItem
                      thumbnail="/svgs/languages/python.svg"
                      title="Python"
                      modalContent={<PythonModal />}
                    >
                      <TabButton>Python</TabButton>
                    </TabItem>
                    <TabItem
                      thumbnail="/svgs/languages/sql.svg"
                      title="SQL"
                      modalContent={<SQLModal />}
                    >
                      <TabButton>SQL</TabButton>
                    </TabItem>
                    <TabItem
                      thumbnail="/svgs/languages/powershell.svg"
                      title="Powershell"
                      modalContent={<PowershellModal />}
                    >
                      <TabButton>Powershell</TabButton>
                    </TabItem>
                    <TabItem
                      thumbnail="/svgs/languages/bash.svg"
                      title="Bash"
                      modalContent={<BashModal />}
                    >
                      <TabButton>Bash</TabButton>
                    </TabItem>
                  </TabItemManager>
                </TabPanel>
                <TabPanel>
                  <TabItemManager>
                    <TabItem
                      thumbnail="/svgs/frameworks/dotnet.svg"
                      title=".NET Core"
                      modalContent={<DotNetModal />}
                    >
                      <TabButton>.NET Core</TabButton>
                    </TabItem>
                    <TabItem
                      thumbnail="/svgs/frameworks/dotnet-core.svg"
                      tooltip="ASP.NET Core"
                      title="ASP.NET Core"
                      modalContent={<ASPNETCoreModal />}
                    >
                      <TabButton>ASP.NET ...</TabButton>
                    </TabItem>
                    <TabItem
                      thumbnail="/svgs/frameworks/dotnet-core.svg"
                      tooltip="Entity Framework Core"
                      title="Entity Framework Core"
                      modalContent={<EFCoreModal />}
                    >
                      <TabButton>Entity Fr...</TabButton>
                    </TabItem>
                    <TabItem
                      thumbnail="/svgs/frameworks/react.svg"
                      title="React"
                      modalContent={<ReactModal />}
                    >
                      <TabButton>React</TabButton>
                    </TabItem>
                    <TabItem
                      thumbnail="/svgs/frameworks/vuejs.svg"
                      title="Vue.js"
                      modalContent={<VueModal />}
                    >
                      <TabButton>Vue.js</TabButton>
                    </TabItem>
                    <TabItem
                      thumbnail={useColorModeValue(
                        "/svgs/frameworks/nextjs-black.svg",
                        "/svgs/frameworks/nextjs-white.svg"
                      )}
                      title="Next.js"
                      modalContent={<NextJSModal />}
                    >
                      <TabButton>Next.js</TabButton>
                    </TabItem>
                  </TabItemManager>
                </TabPanel>
                <TabPanel>
                  <TabItemManager>
                    <TabItem
                      thumbnail="/svgs/devops/docker.svg"
                      title="Docker"
                      modalContent={<DockerModal />}
                    >
                      <TabButton>Docker</TabButton>
                    </TabItem>
                    <TabItem
                      thumbnail="/svgs/devops/kubernetes.svg"
                      tooltip="Kubernetes"
                      title="Kubernetes"
                      modalContent={<KubernetesModal />}
                    >
                      <TabButton>Kubernet...</TabButton>
                    </TabItem>
                    <TabItem
                      thumbnail="/svgs/devops/github-actions.svg"
                      tooltip="GitHub Actions"
                      title="GitHub Actions"
                      modalContent={<GitHubActionsModal />}
                    >
                      <TabButton>GitHub A...</TabButton>
                    </TabItem>
                    <TabItem
                      thumbnail="/svgs/devops/jenkins.svg"
                      title="Jenkins"
                      modalContent={<JenkinsModal />}
                    >
                      <TabButton>Jenkins</TabButton>
                    </TabItem>
                    <TabItem
                      thumbnail="/svgs/devops/azure-pipelines.svg"
                      tooltip="Azure Pipelines"
                      title="Azure Pipelines"
                      modalContent={<AzurePipelinesModal />}
                    >
                      <TabButton>Azure Pi...</TabButton>
                    </TabItem>
                  </TabItemManager>
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
