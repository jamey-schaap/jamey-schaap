import { ReactNode } from "react";
import { Badge, Box, Heading, Link, useColorModeValue } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";
import Image from "next/image";

type ExperienceProps = {
  children: ReactNode;
};

export const Title = ({ children }: ExperienceProps) => (
  <Box>
    <Link href="/experience">Experience</Link>
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
    h="101"
    my={3}
    {...props}
  >
    <Image
      src={`/svgs/experience/${id}.svg`}
      alt={id}
      style={{ borderRadius: "12px" }}
      width={120}
      height={120}
    />
  </Box>
);

export const Meta = ({ children }: { children: ReactNode }) => (
  <Badge colorScheme={useColorModeValue("blue", "orange")} mr={2}>
    {children}
  </Badge>
);
