import {
  Box,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { ProjectGridItem } from "../grid-item";
import { ModalGridManager } from "../modal";
import Section, { SectionHeading } from "../section";

type TemplateProps = {
  Title: string;
  Description: ReactNode;
  ProjectGridItems: ReactNode[];
};

const ModalTemplate = ({ Title, Description, ProjectGridItems }: TemplateProps) => {
  return (
    <>
      <ModalContent bg={useColorModeValue("#f0e7db", "#202023")}>
        <ModalHeader pb={0}>
          <Section delay={0.1}>
            <SectionHeading>{Title}</SectionHeading>
          </Section>
        </ModalHeader>
        <ModalCloseButton
          css={{
            "&:hover": {
              color: useColorModeValue("#3d7aed", "#ffdd99"),
            },
          }}
        />
        <ModalBody pt={0}>
          <Section delay={0.1}>
            <Box mb={5}>{Description}</Box>
            <SectionHeading>Projects</SectionHeading>
          </Section>
          <ModalGridManager>{ProjectGridItems}</ModalGridManager>
        </ModalBody>
      </ModalContent>
    </>
  );
};

export default ModalTemplate;
