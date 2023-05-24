import { Link } from "@chakra-ui/react";
import NextLink from "next/link";
import { ProjectGridItem } from "../grid-item";

export const ArcadePreview = () => (
  <ProjectGridItem
    thumbnail="/svgs/projects/arcade.svg"
    title="Arcade"
    path="/projects/arcade"
  >
    is an arcade which has a couple of games like Hangman.
  </ProjectGridItem>
);

export const GoFitnessPreview = () => (
  <ProjectGridItem
    thumbnail="/svgs/projects/go-fitness.svg"
    title="Go Fitness"
    path="/projects/go-fitness"
  >
    is a platform to catalog and view exercises.
  </ProjectGridItem>
);

export const BookstoreAPIPreview = () => (
  <ProjectGridItem
    thumbnail="/svgs/projects/bookstore-api.svg"
    title="Bookstore API"
    path="/projects/bookstore-api"
  >
    is an API which handels book from and to a database.
  </ProjectGridItem>
);

export const AlbumViewerPreview = () => (
  <ProjectGridItem
    thumbnail="/svgs/projects/album-viewer.svg"
    title="Album Viewer"
    path="/projects/album-viewer"
  >
    is an application to view music albums.
  </ProjectGridItem>
);

export const SongAPIPreview = () => (
  <ProjectGridItem
    thumbnail="/svgs/projects/song-api.svg"
    title="Song API"
    path="/projects/song-api"
  >
    is an API I created based on the Album API, but improved.
  </ProjectGridItem>
);

export const ProjectCPreview = () => (
  <ProjectGridItem
    thumbnail="/svgs/projects/project-c.svg"
    title="Project C"
    path="/projects/project-c"
  >
    is a joint project, a blood draw application, created for{" "}
    <NextLink href="https://www.star-shl.nl/patient/" passHref>
      <Link target="_blank">Star-shl</Link>
    </NextLink>
    .
  </ProjectGridItem>
);

export const ProjectDPreview = () => (
  <ProjectGridItem
    thumbnail="/svgs/projects/project-d.svg"
    title="Project D"
    path="/projects/project-d"
  >
    is a joint project, a POC dashboard for{" "}
    <NextLink href="https://www.alten.com/" passHref>
      <Link target="_blank">Alten</Link>
    </NextLink>{" "}
    and{" "}
    <NextLink href="https://chengetawildlife.org/" passHref>
      <Link target="_blank">Chengeta Wildlife</Link>
    </NextLink>
    .
  </ProjectGridItem>
);

export const Analysis7AssignmentPreview = () => (
  <ProjectGridItem
    thumbnail="/svgs/projects/analysis-7-assignment.svg"
    title="Analysis 7 Assignment"
    path="/projects/analysis-7-assignment"
  >
    is a joint project. It is a card game which implements certain design
    patterns.
  </ProjectGridItem>
);

export const Analysis8AssignmentPreview = () => (
  <ProjectGridItem
    thumbnail="/svgs/projects/analysis-8-assignment.svg"
    title="Analysis 8 Assignment"
    path="/projects/analysis-8-assignment"
  >
    is a joint project. It is an application that safely implements SQL
    handling.
  </ProjectGridItem>
);

export const JaimIOPreview = () => (
  <ProjectGridItem
    thumbnail="/svgs/projects/jaim-io.svg"
    title="Jaim-IO"
    path="/projects/jaim-io"
  >
    is the website your looking at right now! My portfolio.
  </ProjectGridItem>
);

export const JenkinsMSTeamsIntegrationPreview = () => (
  <ProjectGridItem
    thumbnail="/svgs/projects/jenkins-msteams-integration.svg"
    title="Jenkins & Microsoft Teams integration"
    path="/projects/jenkins-msteams-integration"
  >
    is an integration between Jenkins and Microsoft Teams.
  </ProjectGridItem>
);

export const SpartanFitnessPreview = () => (
  <ProjectGridItem
    thumbnail="/svgs/projects/spartan-fitness.svg"
    title="SpartanFitness"
    path="/projects/spartan-fitness"
  >
    is platform to catalog exercises, muscle groups and workouts.
  </ProjectGridItem>
);
