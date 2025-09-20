import {
  Box,
  chakra,
  Container,
  Divider,
  Heading,
  Image,
  Link,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import MainLayout from "../components/layouts/main";
import ArticleLayout from "../components/layouts/article";
import Layout from "../components/layouts/article";
import { NextPageWithLayout } from "./_app";
import { ReactElement, useContext } from "react";
import Section, {
  SectionDate,
  SectionHeading,
  SectionInfo,
  SectionRow,
} from "../components/section";
import TabItem, {
  TabButton,
  TabHeader,
  TabItemManager,
} from "../components/tab";
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
        <Container maxW={"xl"}>
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
                <Box w="115px" h="161px">
                  <Unselectable>
                    <ProfileImage
                      borderRadius="xl"
                      borderColor="whiteAlpha.700"
                      borderWidth={2}
                      borderStyle="solid"
                      width="100%"
                      height="100%"
                      src="/images/profile-picture.JPG"
                      alt="Profile image"
                      placeholder="true"
                    />
                  </Unselectable>
                </Box>
              </Box>
              <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                  Jamey Schaap
                </Heading>
                <Text as="i">
                  Junior Fullstack Developer at&nbsp;
                  <Link target="_blank" href="https://www.virtualvaults.com/">
                    Virtual Vaults
                  </Link>
                </Text>
                <Divider borderColor={dividerColor} />
                <Text as="i">Bachelor in Computer Science</Text>
                <Divider borderColor={dividerColor} />
                <Text as="i">Fitness & programming enthusiast</Text>
                <Divider borderColor={dividerColor} />
                <Text display="inline-flex" alignItems="center" gap={1} pr={10}>
                  <IoLogoGithub />
                  <Link target="_blank" href="https://github.com/jamey-schaap">
                    GitHub
                  </Link>
                </Text>
                <Text display="inline-flex" alignItems="center" gap={1}>
                  <IoLogoLinkedin />
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/in/jamey-schaap/"
                  >
                    LinkedIn
                  </Link>
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
            Hi! I am a full stack developer with around 1.5 years of
            professional experience, based in The Netherlands.
          </Box>
          <Section delay={0.2}>
            <SectionHeading>Education</SectionHeading>
            <Section>
              <SectionRow>
                <SectionDate>09-2023 to 02-2024</SectionDate>
                <SectionInfo>
                  <Text as="i">Minor Data Science</Text> at{" "}
                  <Link target="_blank" href="https://www.rotterdamuas.com/">
                    Rotterdam University of Applied Sciences
                  </Link>
                </SectionInfo>
              </SectionRow>
              <SectionRow>
                <SectionDate>02-2023 to 07-2023</SectionDate>
                <SectionInfo>
                  <Text as="i">Minor Software Engineering</Text> at{" "}
                  <Link target="_blank" href="https://www.rotterdamuas.com/">
                    Rotterdam University of Applied Sciences
                  </Link>
                </SectionInfo>
              </SectionRow>
              <SectionRow>
                <SectionDate>09-2020 to 07-2024</SectionDate>
                <SectionInfo>
                  <Text as="i">BSc Computer Science</Text> at{" "}
                  <Link target="_blank" href="https://www.rotterdamuas.com/">
                    Rotterdam University of Applied Sciences
                  </Link>
                </SectionInfo>
              </SectionRow>
              <SectionRow>
                <SectionDate>09-2019 to 03-2020</SectionDate>
                <SectionInfo>
                  <Text as="i">BSc Human Resource Management</Text> at{" "}
                  <Link target="_blank" href="https://www.rotterdamuas.com/">
                    Rotterdam University of Applied Sciences
                  </Link>
                </SectionInfo>
              </SectionRow>
              <SectionRow>
                <SectionDate>09-2018 to 12-2018</SectionDate>
                <SectionInfo>
                  <Text as="i">BSc Business IT management</Text> at{" "}
                  <Link target="_blank" href="https://www.rotterdamuas.com/">
                    Rotterdam University of Applied Sciences
                  </Link>
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
                      <SectionDate>
                        07-2024 to{" "}
                        <Text
                          as="i"
                          color={useColorModeValue("#3d7aed", "#ffdd99")}
                        >
                          present
                        </Text>
                      </SectionDate>
                      <SectionInfo>
                        <Text as="i">Junior Fullstack Developer</Text> at{" "}
                        <Link
                          target="_blank"
                          href="https://www.virtualvaults.com/"
                        >
                          Virtual Vaults
                        </Link>
                      </SectionInfo>
                    </SectionRow>

                    <SectionRow>
                      <SectionDate>02-2024 to 07-2024</SectionDate>
                      <SectionInfo>
                        <Text as="i">Graduate Intern</Text> at{" "}
                        <Link
                          target="_blank"
                          href="https://www.virtualvaults.com/"
                        >
                          Virtual Vaults
                        </Link>
                      </SectionInfo>
                    </SectionRow>

                    <SectionRow>
                      <SectionDate>07-2023 to 02-2024</SectionDate>
                      <SectionInfo>
                        <Text as="i">Administrative Assistant</Text> at{" "}
                        <Link target="_blank" href="https://www.mrestart.nl/">
                          M Restart
                        </Link>
                      </SectionInfo>
                    </SectionRow>

                    <SectionRow>
                      <SectionDate>08-2022 to 03-2023</SectionDate>
                      <SectionInfo>
                        <Text as="i">Intern Software Engineer DevOps</Text> at{" "}
                        <Link
                          target="_blank"
                          href="https://www.swecogroup.com/"
                        >
                          Sweco
                        </Link>
                      </SectionInfo>
                    </SectionRow>

                    <SectionRow>
                      <SectionDate>04-2019 to 09-2019</SectionDate>
                      <SectionInfo>
                        <Text as="i">Sales promotor</Text> at{" "}
                        <Link
                          target="_blank"
                          href="https://www.pepperminds.com/"
                        >
                          Pepperminds
                        </Link>
                      </SectionInfo>
                    </SectionRow>
                    <SectionRow>
                      <SectionDate>01-2019 to 06-2019</SectionDate>
                      <SectionInfo>
                        <Text as="i">Store clerk</Text> at{" "}
                        <Link target="_blank" href="https://www.ah.nl/over-ah">
                          Albert Heijn
                        </Link>
                      </SectionInfo>
                    </SectionRow>
                    <SectionRow>
                      <SectionDate>08-2018 to 09-2018</SectionDate>
                      <SectionInfo>
                        <Text as="i">Waiter & Bartender</Text> at{" "}
                        <Link href="https://venw.com/" target="_blank">
                          Verwiel en Wijngaard
                        </Link>
                      </SectionInfo>
                    </SectionRow>
                    <SectionRow>
                      <SectionDate>09-2017 to 06-2018</SectionDate>
                      <SectionInfo>
                        <Text as="i">Cashier & Customer service</Text> at{" "}
                        <Link
                          href="https://www.makro.nl/over-makro"
                          target="_blank"
                        >
                          Marko
                        </Link>
                      </SectionInfo>
                    </SectionRow>
                    <SectionRow>
                      <SectionDate>06-2015 to 06-2017</SectionDate>
                      <SectionInfo>
                        <Text as="i">Store clerk</Text> at{" "}
                        <Link target="_blank" href="https://www.ah.nl/over-ah">
                          Albert Heijn
                        </Link>
                      </SectionInfo>
                    </SectionRow>
                  </Section>
                </TabPanel>
                <TabPanel pl={0} pr={0} pb={0} pt={2.5}>
                  <Section>
                    <SectionRow columnWidth={70}>
                      <SectionDate>11-2022</SectionDate>
                      <SectionInfo>
                        <Text as="i">
                          Propedeutic Certificate in Computer Science
                        </Text>{" "}
                        at{" "}
                        <Link
                          href="https://www.rotterdamuas.com/"
                          target="_blank"
                        >
                          Rotterdam University of Applied Sciences
                        </Link>
                      </SectionInfo>
                    </SectionRow>
                    <SectionRow columnWidth={70}>
                      <SectionDate>11-2022</SectionDate>
                      <SectionInfo>
                        <Link
                          href="https://www.udemy.com/certificate/UC-b512d857-2377-4f19-a6aa-15b1a09474ce/"
                          target="_blank"
                          css={certificateLinkStyle}
                        >
                          <Text as="i">
                            Kubernetes for the Absolute Beginners - Hands-on
                          </Text>{" "}
                          at{" "}
                          <Link
                            href="https://www.udemy.com/course/learn-kubernetes/"
                            target="_blank"
                          >
                            Udemy
                          </Link>
                        </Link>
                      </SectionInfo>
                    </SectionRow>
                    <SectionRow columnWidth={70}>
                      <SectionDate>10-2022</SectionDate>
                      <SectionInfo>
                        <Link
                          href="https://ude.my/UC-50f4e1df-7750-4371-a1b4-aef72cbcd49f/"
                          target="_blank"
                          css={certificateLinkStyle}
                        >
                          <Text as="i">
                            The Complete SQL bootcamp 2022: Go from Zero to Hero
                          </Text>
                          at{" "}
                          <Link
                            href="https://www.udemy.com/course/the-complete-sql-bootcamp/"
                            target="_blank"
                          >
                            Udemy
                          </Link>
                        </Link>
                      </SectionInfo>
                    </SectionRow>
                    <SectionRow columnWidth={70}>
                      <SectionDate>01-2022</SectionDate>
                      <SectionInfo>
                        <Link
                          href="https://ude.my/UC-cfec9deb-dcad-4353-90e1-14cba7797642/"
                          target="_blank"
                          css={certificateLinkStyle}
                        >
                          <Text as="i">
                            C# Advanced Topics: Prepare for Technical Interviews
                          </Text>{" "}
                          at{" "}
                          <Link
                            href="https://www.udemy.com/course/csharp-advanced/"
                            target="_blank"
                          >
                            Udemy
                          </Link>
                        </Link>
                      </SectionInfo>
                    </SectionRow>
                    <SectionRow columnWidth={70}>
                      <SectionDate>01-2022</SectionDate>
                      <SectionInfo>
                        <Link
                          href="https://ude.my/UC-e484720a-0081-43b8-895f-137890c601b5/"
                          target="_blank"
                          css={certificateLinkStyle}
                        >
                          <Text as="i">
                            C# Intermediate: Classes, Interfaces and OOP
                          </Text>{" "}
                          at{" "}
                          <Link
                            href="https://www.udemy.com/course/csharp-intermediate-classes-interfaces-and-oop/"
                            target="_blank"
                          >
                            Udemy
                          </Link>
                        </Link>
                      </SectionInfo>
                    </SectionRow>
                    <SectionRow columnWidth={70}>
                      <SectionDate>10-2021</SectionDate>
                      <SectionInfo>
                        <Link
                          href="https://ude.my/UC-2624a9a1-0560-429c-a2c6-51f9784365d4/"
                          target="_blank"
                          css={certificateLinkStyle}
                        >
                          <Text as="i">
                            C# Basics for Beginners: Learn C# Fundamentals by
                            Coding
                          </Text>{" "}
                          at{" "}
                          <Link
                            href="https://www.udemy.com/course/csharp-tutorial-for-beginners/"
                            target="_blank"
                          >
                            Udemy
                          </Link>
                        </Link>
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
                      <TabButton>C#</TabButton>
                    </TabItem>
                    <TabItem
                      thumbnail="/svgs/languages/typescript.svg"
                      title="Typescript"
                      modalContent={<TypescriptModal />}
                    >
                      <TabButton>Typescript</TabButton>
                    </TabItem>
                    <TabItem
                      thumbnail="/svgs/languages/python.svg"
                      title="Python"
                      modalContent={<PythonModal />}
                    >
                      <TabButton>Python</TabButton>
                    </TabItem>
                    <TabItem
                      thumbnail="/svgs/languages/gopher.svg"
                      title="Golang"
                      modalContent={<GolangModal />}
                    >
                      <TabButton>Golang</TabButton>
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
