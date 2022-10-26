import { Button, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import { AiOutlineDoubleRight } from "react-icons/ai";

type TabButtonProps = {
  children: ReactNode;
};

const TabButton = ({ children }: TabButtonProps) => (
  <Button leftIcon={<AiOutlineDoubleRight />} borderRadius="lg" width="7.5rem">
    {children}
  </Button>
);

export default TabButton;
