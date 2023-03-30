import {
  Button,
  Modal as ChakraModal,
  Box,
  SimpleGrid,
  useMediaQuery,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode, useEffect, useState } from "react";
import Overlay from "./overlay";
import Section from "./section";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

type ModalProps = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  children: ReactNode;
};

const Modal = ({ isOpen, onOpen, onClose, children }: ModalProps) => {
  const [overlay] = useState(<Overlay />);

  return (
    <>
      <ChakraModal isOpen={isOpen} onClose={onClose} size="lg">
        {overlay}
        {children}
      </ChakraModal>
    </>
  );
};

type ModalGridManagerProps = {
  children: ReactNode[];
};

export const ModalGridManager = ({ children }: ModalGridManagerProps) => {
  const [count, setCount] = useState<number>(0);
  const [decreaseDisabled, setDecreaseDisabled] = useState<boolean>(true);
  const [increaseDisabled, setIncreaseDisabled] = useState<boolean>(false);

  const base = 1;
  const other = 2;
  const [isMd] = useMediaQuery("(min-width: 48em)");
  const multiplier = isMd ? other : base;

  useEffect(() => {
    // From SM -> MD  | Math.floor(SM / 2) = MD
    if (isMd) {
      const newValue = Math.floor(count / 2);
      setCount(newValue);
      if (newValue <= 0) {
        setDecreaseDisabled(true);
      } else if (newValue >= children.length / multiplier) {
        setIncreaseDisabled(true);
      }
    }
    // From MD -> SM  | MD * 2 = SM
    else {
      const newValue = count * 2;
      setCount(newValue);
      if (newValue + 1 < children.length / multiplier) {
        setIncreaseDisabled(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMd]);

  const increaseCount = () => {
    if (count + 1 < children.length / multiplier) {
      setCount(count + 1);
      if (count + 2 >= children.length / multiplier) {
        setIncreaseDisabled(true);
      }
      setDecreaseDisabled(false);
    }
  };
  const decreaseCount = () => {
    if (count - 1 >= 0) {
      setCount(count - 1);
      if (count - 1 <= 0) {
        setDecreaseDisabled(true);
      }
      setIncreaseDisabled(false);
    }
  };

  const hoverColor = useColorModeValue("#3d7aed", "#ffdd99");

  return (
    <>
      <Section delay={0}>
        <Box pb={4}>
          <SimpleGrid columns={[base, base, other]} gap={6} pt={1}>
            {children[count * multiplier]}
            {isMd && children[count * multiplier + 1]}
          </SimpleGrid>
          {children.length > 2 && (
            <SimpleGrid columns={2} gap={6} pt={4}>
              <Button
                onClick={() => decreaseCount()}
                isDisabled={decreaseDisabled}
                css={
                  decreaseDisabled
                    ? {}
                    : {
                        "&:hover": {
                          color: hoverColor,
                          transition: "300ms ease",
                          transform: "scale(0.95)",
                        },
                        "&:active": {
                          transform: "scale(0.85)",
                          transition: "200ms ease",
                        },
                      }
                }
              >
                <BiLeftArrow />
              </Button>

              <Button
                onClick={() => increaseCount()}
                isDisabled={increaseDisabled}
                css={
                  increaseDisabled
                    ? {}
                    : {
                        "&:hover": {
                          color: hoverColor,
                          transition: "300ms ease",
                          transform: "scale(0.95)",
                        },
                        "&:active": {
                          transform: "scale(0.85)",
                          transition: "200ms ease",
                        },
                      }
                }
              >
                <BiRightArrow />
              </Button>
            </SimpleGrid>
          )}
        </Box>
      </Section>
    </>
  );
};

export default Modal;
