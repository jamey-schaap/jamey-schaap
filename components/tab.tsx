import {
  Box,
  Button,
  LinkBox,
  Tab,
  Text,
  Tooltip,
  useColorModeValue,
} from "@chakra-ui/react";
import Image from "next/image";
import { ReactNode, useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Modal from "./modal";
import Unselectable from "./unselectable";

type TabItemProps = {
  title?: string;
  modalContent?: ReactNode;
  tooltip?: string;
  thumbnail: string;
  children?: ReactNode;
};

const TabItem = ({
  title,
  modalContent,
  thumbnail,
  tooltip,
  children,
}: TabItemProps) => {
  const [hover, SetHover] = useState<boolean>(false);
  return (
    <Modal title={title} content={modalContent}>
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
            <Box
              color={useColorModeValue("black", "white")}
              css={{
                "&:hover": {
                  textDecoration: "none",
                  color: useColorModeValue("#3d7aed", "#ffdd99"),
                },
              }}
            >
              <Text mt={2} fontSize={14}>
                {children}
              </Text>
            </Box>
          </LinkBox>
        </Tooltip>
      </Box>
    </Modal>
  );
};

type TabButtonProps = {
  children: ReactNode;
};

export const TabButton = ({ children }: TabButtonProps) => (
  <Button leftIcon={<AiOutlineDoubleRight />} borderRadius="lg" width="7.5rem">
    {children}
  </Button>
);

type TabHeaderProps = {
  children: ReactNode;
};

export const TabHeader = ({ children, ...props }: TabHeaderProps) => {
  const [active, SetActive] = useState<boolean>(false);
  return (
    <Tab
      _selected={{
        borderBottomColor: useColorModeValue("#525252", "#fff"),
        borderRadius: "2px",
        fontWeight: "bold",
        textColor: useColorModeValue("#000", "#fff"),
      }}
      onMouseDown={() => SetActive(true)}
      onMouseUp={() => SetActive(false)}
      css={{
        p: {
          transform: active ? "scale(0.85)" : "scale(1)",
          transition: "200ms ease",
        },
      }}
      {...props}
    >
      {children}
    </Tab>
  );
};

export default TabItem;
