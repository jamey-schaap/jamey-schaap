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
        <GoFitnessPreview />
      </Section>,
      <Section delay={0.1} key="sect-2">
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
        I have got no experience in Kubernetes right now, but I am going to
        start studying it in the near feature.
      </Text>
    }
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
        <GoFitnessPreview />
      </Section>,
      <Section delay={0.1} key="sect-2">
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
        , I setup a couple of proof of concept pipelines.
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
