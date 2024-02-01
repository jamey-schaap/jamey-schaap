import { Link, ListItem, List, Text, ListIcon } from "@chakra-ui/react";
import { ProjectGridItem } from "../grid-item";
import Section from "../section";
import ModalTemplate from "./modal-template";
import NextLink from "next/link";
import { IoMdSchool } from "react-icons/io";
import {
  AlbumViewerPreview,
  Analysis7AssignmentPreview,
  Analysis8AssignmentPreview,
  ArcadePreview,
  BookstoreAPIPreview,
  GoFitnessPreview,
  JaimIOPreview,
  JenkinsMSTeamsIntegrationPreview,
  RiskFactorPreview,
  ProjectCPreview,
  ProjectDPreview,
  SongAPIPreview,
  SpartanFitnessPreview,
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
        language I am most familliar with, having around 3 years of expierence
        with the language.
      </Text>
    }
    certificates={
      <List>
        <ListItem>
          <ListIcon as={IoMdSchool} />
          <NextLink
            href="https://www.udemy.com/certificate/UC-2624a9a1-0560-429c-a2c6-51f9784365d4/"
            passHref
          >
            <Link target="_blank">
              C# Basics for Beginners: Learn C# Fundamentals by Coding
            </Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <ListIcon as={IoMdSchool} />
          <NextLink
            href="https://www.udemy.com/certificate/UC-e484720a-0081-43b8-895f-137890c601b5/"
            passHref
          >
            <Link target="_blank">
              C# Intermediate: Classes, Interfaces and OOP
            </Link>
          </NextLink>
        </ListItem>
        <ListItem>
          <ListIcon as={IoMdSchool} />
          <NextLink
            href="https://www.udemy.com/certificate/UC-cfec9deb-dcad-4353-90e1-14cba7797642/"
            passHref
          >
            <Link target="_blank">
              C# Advanced Topics: Prepare for Technical Interviews
            </Link>
          </NextLink>
        </ListItem>
      </List>
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
        <Analysis7AssignmentPreview />
      </Section>,
      <Section delay={0.1} key="sect-4">
        <SongAPIPreview />
      </Section>,
      <Section delay={0.1} key="sect-5">
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
        During the first 2 years of my computer science studies and during the minor in Data Science I followed, I worked with
        and created a number of project with Python. Python together with C# is
        the language I am most familliar with, having around 3 years of
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
        <RiskFactorPreview />
      </Section>,
      <Section delay={0.1} key="sect-2">
        <ProjectDPreview />
      </Section>,
      <Section delay={0.1} key="sect-3">
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
        <SpartanFitnessPreview />
      </Section>,
      <Section delay={0.1} key="sect-3">
        <ProjectCPreview />
      </Section>,
      <Section delay={0.1} key="sect-4">
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
    certificates={
      <List>
        <ListItem>
          <ListIcon as={IoMdSchool} />
          <NextLink
            href="https://www.udemy.com/certificate/UC-50f4e1df-7750-4371-a1b4-aef72cbcd49f/"
            passHref
          >
            <Link target="_blank">
              The Complete SQL bootcamp 2022: Go from Zero to Hero
            </Link>
          </NextLink>
        </ListItem>
      </List>
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
        During my internship at{" "}
        <NextLink href="https://www.swecogroup.com/" passHref>
          <Link target="_blank">Sweco</Link>
        </NextLink>{" "}
        I created an integration between Microsoft Teams and Jenkins in order to
        inform the developers about the results of Jenkins builds.
        <br />
        <br />
        Next to this project I used PowerShell scripting to amount automate
        certian tasks, like creating an estimation of lines of codes of certain
        repos using CLOC.
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
    projectGridItems={[
      <Section delay={0.1} key="sect-1">
        <JenkinsMSTeamsIntegrationPreview />
      </Section>,
    ]}
  />
);

export const BashModal = () => (
  <ModalTemplate
    title="Bash"
    description={
      <Text>
        I followed a course in Bash scripting in the first year of my computer
        science studies. Next to this I have done some minor bash scripting in
        personal projects and during my internship at{" "}
        <NextLink href="https://www.swecogroup.com/" passHref>
          <Link target="_blank">Sweco</Link>
        </NextLink>
        .
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
  />
);
