import {
  Box,
  Link,
  LinkBox,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import NextLink from "next/link";
import { ReactNode, useState } from "react";

type ImageGridItemProps = {
  href: string;
  title?: string;
  tooltip?: string;
  thumbnail: string;
  children?: ReactNode;
};

const ImageGridItem = ({
  href,
  title,
  thumbnail,
  tooltip,
  children,
}: ImageGridItemProps) => {
  const [hover, SetHover] = useState<boolean>(false);
  return (
    <Box
      w="100%"
      textAlign="center"
      onMouseEnter={() => SetHover(true)}
      onMouseLeave={() => SetHover(false)}
      css={{
        "&:active": {
          transform: "scale(0.85)",
          transition: "200ms ease",
        },
      }}
    >
      <NextLink href={href} passHref scroll={false}>
        <Link
          color={useColorModeValue("black", "white")}
          css={{
            "&:hover": {
              textDecoration: "none",
              color: useColorModeValue("#3d7aed", "#ffdd99"),
            },
          }}
        >
          <Tooltip label={tooltip}>
            <LinkBox cursor="pointer">
              <Image
                src={thumbnail}
                alt={title}
                // Resolution 1920x1080
                width="180"
                height="101.25"
                style={
                  hover
                    ? {
                        transition: "200ms ease",
                        transform: hover ? "scale(0.85)" : "",
                      }
                    : { transition: "200ms ease" }
                }
                loading="lazy"
              />
              <Text mt={2} overflow="visible">
                {title}
              </Text>
              <Text fontSize={14}>{children}</Text>
            </LinkBox>
          </Tooltip>
        </Link>
      </NextLink>
    </Box>
  );
};

export default ImageGridItem;
