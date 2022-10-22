import {
  Box,
  Link,
  LinkBox,
  LinkOverlay,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";
import NextLink from "next/link";
import { useColorModeValue } from "@chakra-ui/react";
import styled from "@emotion/styled";
type ImageGridItemProps = {
  href: string;
  title?: string;
  tooltip?: string;
  thumbnail: string;
  children?: ReactNode;
};

const OnHoverLinkStyle = {
  "&:hover": {
    textDecoration: "none",
    color: "teal",
  },
};

const ImageGridItem = ({
  href,
  title,
  thumbnail,
  tooltip,
  children,
}: ImageGridItemProps) => (
  <Box w="100%" textAlign="center">
    <NextLink href={href} passHref scroll={false}>
      <Link color={useColorModeValue("black", "white")} css={OnHoverLinkStyle}>
        <Tooltip
          label={tooltip}
          bg={useColorModeValue("whiteAlpha.500", "whiteAlpha.200")}
          css={{ backdropFilter: "blur(10px)" }}
          color={useColorModeValue("black", "white")}
          borderRadius="lg"
          placement="bottom"
        >
          <LinkBox cursor="pointer">
            <Image
              src={thumbnail}
              alt={title}
              // Resolution 1920x1080
              width="180"
              height="101.25"
              style={{ borderRadius: "12px" }}
              loading="lazy"
            />
            <Text mt={2}>{title}</Text>
            <Text fontSize={14}>{children}</Text>
          </LinkBox>
        </Tooltip>
      </Link>
    </NextLink>
  </Box>
);

export default ImageGridItem;
