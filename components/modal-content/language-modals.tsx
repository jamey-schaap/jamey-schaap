import { Text } from "@chakra-ui/react";
import { ProjectGridItem } from "../grid-item";
import Section from "../section";
import ModalTemplate from "./modal-template";

export const GolangModal = () => (
  <ModalTemplate
    Title="Golang"
    Description={
      <Text>
        Golang is the most recent programming language I started learning. I
        have got around 3-4 months experience with the language. At this point
        in time it is my favorite language. I have been using Golang for a
        couple of my projects.
      </Text>
    }
    ProjectGridItems={[
      <Section delay={0.1} key="sect-1">
        <ProjectGridItem
          thumbnail="/svgs/projects/arcade.svg"
          title="Arcade"
          id="arcade"
        >
          Arcade is an arcade which has a couple of games like Hangman.
        </ProjectGridItem>
      </Section>,
      <Section delay={0.1} key="sect-2">
        <ProjectGridItem
          thumbnail="/svgs/projects/go-fitness.svg"
          title="Go Fitness"
          id="go-fitness"
        >
          Go Fitness is a platform to catalog and view exercises.
        </ProjectGridItem>
      </Section>,
      <Section delay={0.1} key="sect-3">
        <ProjectGridItem
          thumbnail="/svgs/projects/go-fitness.svg"
          title="Bookstore API"
          id="bookstore-api"
        >
          Go Fitness is a platform to catalog and view exercises.
        </ProjectGridItem>
      </Section>,
    ]}
  />
);

export const CSharpModal = () => (
  <ModalTemplate
    Title="C#"
    Description={
      <Text as="mark">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus
        rhoncus velit ac sollicitudin. Vivamus imperdiet mauris ac nisl maximus,
        vitae consectetur lorem aliquam. Suspendisse et aliquam mauris, eu
        pulvinar lectus. Vestibulum maximus est eu bibendum congue.
      </Text>
    }
    ProjectGridItems={[
      <Section delay={0.1} key="sect-1">
        <ProjectGridItem
          thumbnail="/svgs/projects/arcade.svg"
          title="Album API"
          id="album-api"
        >
          <Text as="mark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </ProjectGridItem>
      </Section>,
      <Section delay={0.1} key="sect-2">
        <ProjectGridItem
          thumbnail="/svgs/projects/go-fitness.svg"
          title="Song API"
          id="song-api"
        >
          <Text as="mark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </ProjectGridItem>
      </Section>,
      <Section delay={0.1} key="sect-3">
        <ProjectGridItem
          thumbnail="/svgs/projects/arcade.svg"
          title="Project C"
          id="project-c"
        >
          <Text as="mark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </ProjectGridItem>
      </Section>,
    ]}
  />
);

export const PythonModal = () => (
  <ModalTemplate
    Title="Python"
    Description={
      <Text as="mark">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus
        rhoncus velit ac sollicitudin. Vivamus imperdiet mauris ac nisl maximus,
        vitae consectetur lorem aliquam. Suspendisse et aliquam mauris, eu
        pulvinar lectus. Vestibulum maximus est eu bibendum congue.
      </Text>
    }
    ProjectGridItems={[
      <Section delay={0.1} key="sect-1">
        <ProjectGridItem
          thumbnail="/svgs/projects/arcade.svg"
          title="Project D"
          id="project-d"
        >
          <Text as="mark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </ProjectGridItem>
      </Section>,
      <Section delay={0.1} key="sect-2">
        <ProjectGridItem
          thumbnail="/svgs/projects/arcade.svg"
          title="Analysis 8 Assignment"
          id="anaylis-8-assignment"
        >
          <Text as="mark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </ProjectGridItem>
      </Section>,
    ]}
  />
);

export const TypescriptModal = () => (
  <ModalTemplate
    Title="Typescript"
    Description={
      <Text as="mark">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus
        rhoncus velit ac sollicitudin. Vivamus imperdiet mauris ac nisl maximus,
        vitae consectetur lorem aliquam. Suspendisse et aliquam mauris, eu
        pulvinar lectus. Vestibulum maximus est eu bibendum congue.
      </Text>
    }
    ProjectGridItems={[
      <Section delay={0.1} key="sect-1">
        <ProjectGridItem
          thumbnail="/svgs/projects/arcade.svg"
          title="Jaim-IO"
          id="jaim-io"
        >
          <Text as="mark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </ProjectGridItem>
      </Section>,
      <Section delay={0.1} key="sect-2">
        <ProjectGridItem
          thumbnail="/svgs/projects/go-fitness.svg"
          title="Project C"
          id="project-c"
        >
          <Text as="mark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </ProjectGridItem>
      </Section>,
      <Section delay={0.1} key="sect-3">
        <ProjectGridItem
          thumbnail="/svgs/projects/go-fitness.svg"
          title="Go Fitness"
          id="go-fitness"
        >
          <Text as="mark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </ProjectGridItem>
      </Section>,
    ]}
  />
);

export const SQLModal = () => (
  <ModalTemplate
    Title="SQL"
    Description={
      <Text as="mark">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam luctus
        rhoncus velit ac sollicitudin. Vivamus imperdiet mauris ac nisl maximus,
        vitae consectetur lorem aliquam. Suspendisse et aliquam mauris, eu
        pulvinar lectus. Vestibulum maximus est eu bibendum congue.
      </Text>
    }
    ProjectGridItems={[
      <Section delay={0.1} key="sect-1">
        <ProjectGridItem
          thumbnail="/svgs/projects/arcade.svg"
          title="Project D"
          id="project-d"
        >
          <Text as="mark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </ProjectGridItem>
      </Section>,
      <Section delay={0.1} key="sect-2">
        <ProjectGridItem
          thumbnail="/svgs/projects/arcade.svg"
          title="Analysis 8 Assignment"
          id="anaylis-8-assignment"
        >
          <Text as="mark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </ProjectGridItem>
      </Section>,
      <Section delay={0.1} key="sect-3">
        <ProjectGridItem
          thumbnail="/svgs/projects/go-fitness.svg"
          title="Go Fitness"
          id="go-fitness"
        >
          <Text as="mark">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </ProjectGridItem>
      </Section>,
    ]}
  />
);
