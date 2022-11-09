import { Link, ListItem, List, Text, ListIcon } from "@chakra-ui/react";
import { ProjectGridItem } from "../grid-item";
import Section from "../section";
import ModalTemplate from "./modal-template";
import NextLink from "next/link";
import { IoMdSchool } from "react-icons/io";
import {
  AlbumViewerPreview,
  Analysis8AssignmentPreview,
  ArcadePreview,
  BookstoreAPIPreview,
  GoFitnessPreview,
  JaimIOPreview,
  ProjectCPreview,
  ProjectDPreview,
  SongAPIPreview,
} from "../previews/project-previews";
import { GiSuitcase } from "react-icons/gi";

export const GolangModal = () => (
  <ModalTemplate
    title="Golang"
    description={
      <Text>
        Golang is the most recent programming language I started learning. I
        have got around 3-4 months experience with the language. At this point
        in time it is my favorite language. I have been using Golang for a
        couple of my projects.
      </Text>
    }
    projectGridItems={[
      <Section delay={0.1} key="sect-1">
        <ArcadePreview />
      </Section>,
      <Section delay={0.1} key="sect-2">
        <GoFitnessPreview />
      </Section>,
      <Section delay={0.1} key="sect-3">
        <BookstoreAPIPreview />
      </Section>,
    ]}
  />
);

export const CSharpModal = () => (
  <ModalTemplate
    title="C#"
    description={
      <Text>
        During the first 2 years of my computer science studies, I worked with
        and created a number of project with C#. C# together with Python is the
        language I am most familliar with, having around 2 years of expierence
        with the language.
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
        <AlbumViewerPreview />
      </Section>,
      <Section delay={0.1} key="sect-2">
        <SongAPIPreview />
      </Section>,
      <Section delay={0.1} key="sect-3">
        <ProjectCPreview />
      </Section>,
    ]}
  />
);

export const PythonModal = () => (
  <ModalTemplate
    title="Python"
    description={
      <Text>
        During the first 2 years of my computer science studies, I worked with
        and created a number of project with Python. Python together with C# is
        the language I am most familliar with, having around 2.5 years of
        expierence with the language.
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
        <ProjectDPreview />
      </Section>,
      <Section delay={0.1} key="sect-2">
        <Analysis8AssignmentPreview />
      </Section>,
    ]}
  />
);

export const TypescriptModal = () => (
  <ModalTemplate
    title="Typescript"
    description={
      <Text>
        I have been working with Typescript (and Javascript) for around 1.5
        years, using it in all my frontend projects. Personally, I prefer
        Typescript over Javascript. Typescript provides a rich and robust typing
        system, which I love to use.
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
        <JaimIOPreview />
      </Section>,
      <Section delay={0.1} key="sect-2">
        <ProjectCPreview />
      </Section>,
      <Section delay={0.1} key="sect-3">
        <GoFitnessPreview />
      </Section>,
    ]}
  />
);

export const SQLModal = () => (
  <ModalTemplate
    title="SQL"
    description={
      <Text>
        I have been working with SQL for around 1.5 years. I learned it in the
        first semeter of my second year of my computer sciences studies and I
        have been using it ever since.
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
        <ProjectDPreview />
      </Section>,
      <Section delay={0.1} key="sect-2">
        <Analysis8AssignmentPreview />
      </Section>,
      <Section delay={0.1} key="sect-3">
        <GoFitnessPreview />
      </Section>,
    ]}
  />
);

export const PowershellModal = () => (
  <ModalTemplate
    title="Powershell"
    description={
      <Text>
        During my internship at Sweco I created a Powershell plugin in order to
        send notifications of the statuses of Jenkins jobs to our Microsoft
        Teams Channel.
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
