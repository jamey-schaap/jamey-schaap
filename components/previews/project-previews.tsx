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

export const AlbumAPIPreview = () => (
  <ProjectGridItem
    thumbnail="/svgs/projects/album-viewer.svg"
    title="Album API"
    path="/projects/album-viewer"
  >
    together with{" "}
    <NextLink href="/projects/album-viewer" passHref>
      <Link>Album Frontend</Link>
    </NextLink>{" "}
    creates an album viewer app.
  </ProjectGridItem>
);

export const AlbumFrontendPreview = () => (
  <ProjectGridItem
    thumbnail="/svgs/projects/album-viewer.svg"
    title="Album Frontend"
    path="/projects/album-viewer"
  >
    together with{" "}
    <NextLink href="/projects/album-viewer" passHref>
      <Link>Album API</Link>
    </NextLink>{" "}
    creates an album viewer app.
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

export const Analysis8AssignmentPreview = () => (
  <ProjectGridItem
    thumbnail="/svgs/projects/anaylis-8-assignment.svg"
    title="Analysis 8 Assignment"
    path="/projects/anaylis-8-assignment"
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
