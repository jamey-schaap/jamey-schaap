import { Box, LinkBox, LinkOverlay, Text } from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode } from "react";
import NextLink from "next/link";

type ImageGridItemProps = {
  href: string;
  title?: string;
  thumbnail: string;
  children?: ReactNode;
};
const ImageGridItem = ({
  href,
  title,
  thumbnail: thumbnail,
  children
}: ImageGridItemProps) => (
  <Box w="100%" textAlign="center">
    <NextLink href={href} passHref scroll={false}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          width="180"
          height="101.25"
          style={{ borderRadius: "12px" }}
          loading="lazy"
        />
        <LinkOverlay href={href}>
          <Text mt={2}>{title}</Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);

export default ImageGridItem;
