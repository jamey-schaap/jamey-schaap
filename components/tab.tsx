import {
  Box,
  Button,
  Center,
  Fade,
  LinkBox,
  SimpleGrid,
  Tab,
  Text,
  Tooltip,
  useColorModeValue,
  useDisclosure,
  useMediaQuery,
  useToast,
} from "@chakra-ui/react";
import Image from "next/image";
import { ReactElement, ReactNode, useState } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";
import Modal from "./modal";
import Overlay from "./overlay";
import Unselectable from "./unselectable";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import Section from "./section";
import { IconType } from "react-icons";

type TabButtonProps = {
  children: ReactNode;
};

export const TabButton = ({ children, ...props }: TabButtonProps) => (
  <Button
    leftIcon={<AiOutlineDoubleRight />}
    borderRadius="lg"
    width="7.5rem"
    {...props}
  >
    {children}
  </Button>
);

type TabButtonMoreProps = {
  title: string;
  icon: ReactElement<IconType>;
  onClick: () => void;
};

export const TabActionButton = ({
  title,
  icon,
  onClick,
  ...props
}: TabButtonMoreProps) => {
  const hoverColor = useColorModeValue("#3d7aed", "#ffdd99");
  return (
    <Button
      borderRadius="lg"
      width="100%"
      height="2rem"
      onClick={() => onClick()}
      css={{
        "&:hover": {
          color: hoverColor,
          transform: "scale(0.90)",
          transition: "200ms ease",
        },
        "&:hover:active": {
          transform: "scale(0.80)",
          transition: "200ms ease",
        },
      }}
      {...props}
    >
      {title}
      {icon}
    </Button>
  );
};

type TabItemManagerProps = {
  children: ReactNode[];
};

export const TabItemManager = ({ children }: TabItemManagerProps) => {
  const [rows, setRows] = useState<number>(2);

  const base = 2;
  const other = 3;
  const [isSm] = useMediaQuery("(min-width: 30em)");
  const cols = isSm ? other : base;

  const overflow =
    !(children.length % cols == 0 && children.length - cols <= rows) &&
    children.length > rows * cols;

  const increaseIndex = () => {
    if (children.length > rows * cols) {
      if (overflow) setRows(rows + 1);
    }
  };
  const decreaseIndex = () => {
    if (rows - 1 >= 0) setRows(rows - 1);
  };
  let shownItems = children.slice(0, rows * cols);

  let keyCounter = 0;
  const delay = 0.1;
  return (
    <>
      <SimpleGrid columns={[base, other, other]} gap={6} pb={4}>
        {shownItems.map((item) => (
          <Section delay={0.1} key={`tab-item-sect-${keyCounter++}`}>
            {item}
          </Section>
        ))}
      </SimpleGrid>
      {!(cols * rows === cols * 2) && (
        <Section delay={delay}>
          <TabActionButton
            onClick={decreaseIndex}
            title="Show less"
            icon={<BiChevronUp />}
            // @ts-ignore
            mt={2}
          />
        </Section>
      )}
      {overflow && (
        <Section delay={delay}>
          <TabActionButton
            onClick={increaseIndex}
            title="Show more"
            icon={<BiChevronDown />}
            // @ts-ignore
            mt={2}
          />
        </Section>
      )}
    </>
  );
};

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [, setOverlay] = useState(<Overlay />);

  const toast = useToast();
  const toastId = `no-modal-toast-${title}`;
  return (
    <>
      {modalContent && (
        <Modal isOpen={isOpen} onOpen={onOpen} onClose={onClose}>
          {modalContent}
        </Modal>
      )}
      <Box
        w="100%"
        textAlign="center"
        onMouseEnter={() => SetHover(true)}
        onMouseLeave={() => SetHover(false)}
        onClick={() => {
          if (modalContent) {
            setOverlay(<Overlay />);
            onOpen();
          } else if (!toast.isActive(toastId)) {
            toast({
              id: toastId,
              title: `No modal available for ${title}.`,
              description: "Work in progresss!",
              status: "error",
              isClosable: true,
              duration: 5000,
              variant: "subtle",
              position: "bottom-right",
            });
          }
        }}
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
                alt={title ?? ""}
                // Resolution 1920x1080
                width="180"
                height="101"
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
    </>
  );
};

export default TabItem;
