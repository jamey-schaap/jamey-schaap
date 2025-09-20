import {
  Box,
  LinkBox,
  LinkOverlay,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import Image from "next/image";

type ProjectGridItemProps = {
  path: string;
  title: string;
  thumbnail: string;
  children: ReactNode;
};

export const ProjectGridItem = ({
  path,
  title,
  thumbnail,
  children,
}: ProjectGridItemProps) => (
  <Box
    w="100%"
    h="100%"
    textAlign="center"
    bg="whiteAlpha.200"
    py={2}
    borderRadius="12px"
    css={{
      "&:hover": {
        color: useColorModeValue("#3d7aed", "#ffdd99"),
        transition: "300ms ease",
        transform: "scale(0.95)",
      },
      "&:active": {
        transform: "scale(0.95)",
        transition: "200ms ease",
      },
    }}
  >
    <LinkBox
      cursor="pointer"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "4px",
        height: "100%",
      }}
    >
      <Image
        src={thumbnail}
        alt={title}
        style={{ borderRadius: "12px" }}
        width="120"
        height="120"
        // placeholder="blur"
      />
      <Box>
        <LinkOverlay href={path}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14} mx={2}>
          {children}
        </Text>
      </Box>
    </LinkBox>
  </Box>
);
