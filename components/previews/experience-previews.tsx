import { useColorModeValue } from "@chakra-ui/react";
import { ProjectGridItem } from "../grid-item";

export const VirtualVaultsPreview = () => (
  <ProjectGridItem
    thumbnail={"/svgs/experience/virtual-vaults.svg"}
    title="Virtual Vaults"
    path="/experience/sweco"
  >
    Junior Fullstack Developer
  </ProjectGridItem>
);

export const SwecoPreview = () => (
  <ProjectGridItem
    thumbnail={
      "/svgs/experience/" +
      useColorModeValue("sweco-black", "sweco-white") +
      ".svg"
    }
    title="Sweco"
    path="/experience/sweco"
  >
    Intern Software Engineer Dev(Sec)Ops
  </ProjectGridItem>
);

export const HogeschoolRotterdamPreview = () => (
  <ProjectGridItem
    thumbnail="/svgs/experience/ruas.svg"
    title="Rotterdam University of Applied Sciences"
    path="/experience/ruas"
  >
    Bachelor, Computer Science
  </ProjectGridItem>
);

export const CalvijnVreewijkPreview = () => (
  <ProjectGridItem
    thumbnail="/svgs/experience/calvijn.svg"
    title="CSG Calvijn Veewijk"
    path="/experience/calvijn"
  >
    HAVO, Economy & Society - Highschool
  </ProjectGridItem>
);
