import { Link, ListItem, List, Text, ListIcon } from "@chakra-ui/react";
import Section from "../section";
import ModalTemplate from "./modal-template";
import NextLink from "next/link";
import { IoMdSchool } from "react-icons/io";
import {
  AlbumViewerPreview,
  GoFitnessPreview,
  JaimIOPreview,
  ProjectCPreview,
  SongAPIPreview,
  SpartanFitnessPreview
} from "../previews/project-previews";

export const DotNetModal = () => (
  <ModalTemplate
    title=".NET"
    description={
      <Text>
        During the first 2 years of my computer science studies, I worked with
        and created a number of project in .NET Core 3.1, .NET 5 and .NET 6 in
        C#.
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
        <AlbumViewerPreview />
      </Section>,
      <Section delay={0.1} key="sect-3">
        <SongAPIPreview />
      </Section>,
      <Section delay={0.1} key="sect-4">
        <ProjectCPreview />
      </Section>,
    ]}
  />
);

export const ASPNETCoreModal = () => (
  <ModalTemplate
    title="ASP.NET Core"
    description={
      <Text>
        I started working with ASP.NET Core and Entity Framework Core in the
        second year of my computer science studies and have create a number of
        projects with the framework.
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
        <AlbumViewerPreview />
      </Section>,
      <Section delay={0.1} key="sect-3">
        <SongAPIPreview />
      </Section>,
      <Section delay={0.1} key="sect-4">
        <ProjectCPreview />
      </Section>,
    ]}
  />
);

export const EFCoreModal = () => (
  <ModalTemplate
    title="Entity Framework Core"
    description={
      <Text>
        I started working with Entity Framework Core and ASP.NET Core in the
        second year of my computer science studies and have create a number of
        projects with the framework.
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
        <AlbumViewerPreview />
      </Section>,
      <Section delay={0.1} key="sect-3">
        <SongAPIPreview />
      </Section>,
    ]}
  />
);

export const ReactModal = () => (
  <ModalTemplate
    title="React"
    description={
      <Text>
        I followed a course in React in the second year of my computer science
        studies. Next to this React is the framework I have mostly used for my
        personal projects.
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
        <SongAPIPreview />
      </Section>,
      <Section delay={0.1} key="sect-3">
        <AlbumViewerPreview />
      </Section>,
      <Section delay={0.1} key="sect-4">
        <GoFitnessPreview />
      </Section>,
    ]}
  />
);

export const VueModal = () => (
  <ModalTemplate
    title="Vue.js"
    description={
      <Text>
        Vue is the framework me and my project group used for a web application
        we created at the first semester of the second year.
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
        <ProjectCPreview />
      </Section>,
    ]}
  />
);

export const NextJSModal = () => (
  <ModalTemplate
    title="Next.js"
    description={
      <Text>
        Next.js is the framework I most recently picked up. This portfolio is my
        first project in Next.js (v12.3.1) and at the moment this is my favorite
        frontend framework. I am looking forward to Next.js 13!
      </Text>
    }
    projectGridItems={[
      <Section delay={0.1} key="sect-1">
        <JaimIOPreview />
      </Section>,
    ]}
  />
);
