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
import Unselectable from "./unselectable";

type TabItemProps = {
  href: string;
  title?: string;
  tooltip?: string;
  thumbnail: string;
  children?: ReactNode;
};

const TabItem = ({
  href,
  title,
  thumbnail,
  tooltip,
  children,
}: TabItemProps) => {
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
          target="_blank"
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
              <Unselectable>
                <Image
                  src={thumbnail}
                  alt={title}
                  // Resolution 1920x1080
                  width="180"
                  height="101.25"
                  loading="lazy"
                  style={
                    hover
                      ? {
                          transition: "200ms ease",
                          transform: hover ? "scale(0.85)" : "",
                        }
                      : { transition: "200ms ease" }
                  }
                />
              </Unselectable>
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

export default TabItem;
