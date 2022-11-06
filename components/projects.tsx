import { ReactNode } from "react";
import NextLink from "next/link";
import { Badge, Box, Heading, Link, useColorModeValue } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";

type ProjectProps = {
  children: ReactNode;
};

export const Title = ({ children }: ProjectProps) => (
  <Box>
    <NextLink href="/projects" passHref>
      <Link>Projects</Link>
    </NextLink>
    <Box as="span">
      {" "}
      <ChevronRightIcon />{" "}
    </Box>
    <Heading display="inline-block" as="h3" fontSize={20} mb={4}>
      {children}
    </Heading>
  </Box>
);

type SectionImageProps = {
  id: string;
};

export const HeadingImage = ({ id, ...props }: SectionImageProps) => (
  <Box
    display="flex"
    textAlign="center"
    justifyContent="center"
    w="180"
    h="101.25"
    my={3}
    {...props}
  >
    <Image
      src={`/svgs/projects/${id}.svg`}
      alt={id}
      style={{ borderRadius: "12px" }}
      width="100%"
      height="100%"
    />
  </Box>
);

export const Meta = ({ children }: { children: ReactNode }) => (
  <Badge colorScheme={useColorModeValue("blue", "orange")} mr={2}>
    {children}
  </Badge>
);
