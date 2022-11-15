import {
  Box,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import Experience from "../../pages/experience";
import { ModalGridManager } from "../modal";
import Section, { SectionHeading } from "../section";

type TemplateProps = {
  title: string;
  description: ReactNode;
  projectGridItems?: ReactNode[];
  experience?: ReactNode;
  certificates?: ReactNode;
};

const ModalTemplate = ({
  title,
  description,
  projectGridItems,
  certificates,
  experience,
}: TemplateProps) => {
  return (
    <>
      <ModalContent bg={useColorModeValue("#f0e7db", "#202023")}>
        <ModalHeader pb={0}>
          <Section delay={0.1}>
            <SectionHeading>{title}</SectionHeading>
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
            <Box mb={5}>{description}</Box>
            {experience && (
              <>
                <SectionHeading>Experience</SectionHeading>
                <Box mb={5}>{experience}</Box>
              </>
            )}
            {certificates && (
              <>
                <SectionHeading>Certificates</SectionHeading>
                <Box mb={5}>{certificates}</Box>
              </>
            )}
            {projectGridItems && (
              <>
                <SectionHeading>Projects</SectionHeading>
                <ModalGridManager>{projectGridItems}</ModalGridManager>
              </>
            )}
          </Section>
        </ModalBody>
      </ModalContent>
    </>
  );
};

export default ModalTemplate;
