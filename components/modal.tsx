import {
  Button,
  Modal as ChakraModal,
  Box,
  SimpleGrid,
  useMediaQuery,
  useColorModeValue,
  ModalFooter,
} from "@chakra-ui/react";
import { ReactNode, useState } from "react";
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
      <ChakraModal isCentered isOpen={isOpen} onClose={onClose} size="lg">
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

  const base = 1;
  const other = 2;
  const [isMd] = useMediaQuery("(min-width: 48em)");
  const multiplier = isMd ? other : base;

  const increaseCount = () => {
    const condition = count + 1 < children.length / multiplier;
    if (condition) {
      setCount(count + 1);
      if (!condition) {
        
      }
    }
  };
  const decreaseCount = () => {
    if (count - 1 >= 0) {
      setCount(count - 1);
    }
  };

  const decreaseDisabled = (): boolean => count - 1 < 0;
  const increaseDisabled = (): boolean =>
    count + 1 >= children.length / multiplier;

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
                isDisabled={decreaseDisabled()}
                css={{
                  "&:hover": {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    color: useColorModeValue("#3d7aed", "#ffdd99"),
                  },
                  "&:active": {
                    transform: "scale(0.85)",
                    transition: "200ms ease",
                  },
                }}
              >
                <BiLeftArrow />
              </Button>

              <Button
                onClick={() => increaseCount()}
                isDisabled={increaseDisabled()}
                css={{
                  "&:hover": {
                    // eslint-disable-next-line react-hooks/rules-of-hooks
                    color: useColorModeValue("#3d7aed", "#ffdd99"),
                  },
                  "&:active": {
                    transform: "scale(0.85)",
                    transition: "200ms ease",
                  },
                }}
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
