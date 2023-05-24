import { Link, ListItem, List, Text, ListIcon } from "@chakra-ui/react";
import Section from "../section";
import ModalTemplate from "./modal-template";
import NextLink from "next/link";
import { GiSuitcase } from "react-icons/gi";
import { IoMdSchool } from "react-icons/io";
import {
  AlbumViewerPreview,
  BookstoreAPIPreview,
  GoFitnessPreview,
  ProjectDPreview,
  SongAPIPreview,
  SpartanFitnessPreview,
} from "../previews/project-previews";

export const DockerModal = () => (
  <ModalTemplate
    title="Docker"
    description={
      <Text>
        In the last quarter of the second year I followed a course in cloud
        development where I learned Docker. Since then I have used Docker in
        most of my personal projects.
      </Text>
    }
    experience={
      <List>
        <ListItem>
          <ListIcon as={IoMdSchool} />
          <NextLink href="https://www.rotterdamuas.com/" passHref>
            <Link target="_blank">
              Rotterdam University of Applied Sciences
            </Link>
          </NextLink>
        </ListItem>
      </List>
    }
    projectGridItems={[
      <Section delay={0.1} key="sect-1">
        <SpartanFitnessPreview />
      </Section>,
      <Section delay={0.1} key="sect-2">
        <GoFitnessPreview />
      </Section>,
      <Section delay={0.1} key="sect-3">
        <ProjectDPreview />
      </Section>,
      <Section delay={0.1} key="sect-4">
        <AlbumViewerPreview />
      </Section>,
      <Section delay={0.1} key="sect-5">
        <BookstoreAPIPreview />
      </Section>,
      <Section delay={0.1} key="sect-6">
        <SongAPIPreview />
      </Section>,
    ]}
  />
);

export const KubernetesModal = () => (
  <ModalTemplate
    title="Kubernetes"
    description={
      <Text>
        I recently completed a beginner course in Kubernetes and I am planning
        to use Kubernetes in my next project.
      </Text>
    }
    certificates={
      <List>
        <ListItem>
          <ListIcon as={IoMdSchool} />
          <NextLink
            href="https://www.udemy.com/certificate/UC-b512d857-2377-4f19-a6aa-15b1a09474ce/"
            passHref
          >
            <Link target="_blank">
              Kubernetes for the Absolute Beginners - Hands-on
            </Link>
          </NextLink>
        </ListItem>
      </List>
    }
    projectGridItems={[
      <Section delay={0.1} key="sect-1">
        <SpartanFitnessPreview />
      </Section>,
    ]}
  />
);

export const GitHubActionsModal = () => (
  <ModalTemplate
    title="GitHub Actions"
    description={
      <Text>
        In the last quarter of the second year I followed a course in cloud
        development where I learned GitHub Actions. Since then I have used
        GitHub Actions in most of my personal projects.
      </Text>
    }
    experience={
      <List>
        <ListItem>
          <ListIcon as={IoMdSchool} />
          <NextLink href="https://www.rotterdamuas.com/" passHref>
            <Link target="_blank">
              Rotterdam University of Applied Sciences
            </Link>
          </NextLink>
        </ListItem>
      </List>
    }
    projectGridItems={[
      <Section delay={0.1} key="sect-1">
        <SpartanFitnessPreview />
      </Section>,
      <Section delay={0.1} key="sect-2">
        <GoFitnessPreview />
      </Section>,
      <Section delay={0.1} key="sect-3">
        <SongAPIPreview />
      </Section>,
      <Section delay={0.1} key="sect-4">
        <AlbumViewerPreview />
      </Section>,
      <Section delay={0.1} key="sect-5">
        <ProjectDPreview />
      </Section>,
      <Section delay={0.1} key="sect-6">
        <BookstoreAPIPreview />
      </Section>,
    ]}
  />
);

export const AzurePipelinesModal = () => (
  <ModalTemplate
    title="Azure Pipelines"
    description={
      <Text>
        During my internship at{" "}
        <NextLink href="https://www.swecogroup.com/" passHref>
          <Link target="_blank">Sweco</Link>
        </NextLink>
        , I setup a number of proof of concept pipelines in Azure Pipelines and
        obtained some insights into the use template pipelines in Azure
        Pipelines.
      </Text>
    }
    experience={
      <List>
        <ListItem>
          <ListIcon as={GiSuitcase} />
          <NextLink href="https://www.swecogroup.com/" passHref>
            <Link target="_blank">Sweco</Link>
          </NextLink>
        </ListItem>
      </List>
    }
  />
);

export const JenkinsModal = () => (
  <ModalTemplate
    title="Jenkins"
    description={
      <Text>
        During my internship at{" "}
        <NextLink href="https://www.swecogroup.com/" passHref>
          <Link target="_blank">Sweco</Link>
        </NextLink>
        , I created and worked on multiple Jenkins pipelines regarding CI/CD,
        automation and integration.
      </Text>
    }
    experience={
      <List>
        <ListItem>
          <ListIcon as={GiSuitcase} />
          <NextLink href="https://www.swecogroup.com/" passHref>
            <Link target="_blank">Sweco</Link>
          </NextLink>
        </ListItem>
      </List>
    }
  />
);
