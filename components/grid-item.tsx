import {
  Box,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import NextLink from "next/link";
import Image from "next/image";

type ProjectGridItemProps = {
  id: string;
  title: string;
  thumbnail: string;
  children: ReactNode;
};

export const ProjectGridItem = ({
  id,
  title,
  thumbnail,
  children,
}: ProjectGridItemProps) => (
  <Box
    w="100%"
    textAlign="center"
    bg="whiteAlpha.200"
    py={2}
    borderRadius="12px"
    css={{
      "&:hover": {
        color: useColorModeValue("#3d7aed", "#ffdd99"),
      },
    }}
  >
    <NextLink href={`/projects/${id}`} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          style={{ borderRadius: "12px" }}
          width="180"
          height="101.25"
          // placeholder="blur"
        />
        <LinkOverlay href={`/projects/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);
