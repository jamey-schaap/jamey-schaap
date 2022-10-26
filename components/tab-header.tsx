import { Tab, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";

type TabHeaderProps = {
  children: ReactNode;
};

const TabHeader = ({ children, ...props }: TabHeaderProps) => (
  <Tab
    _selected={{
      borderBottomColor: useColorModeValue("#525252", "#fff"),
      borderRadius: "2px",
      fontWeight: "bold",
      textColor: useColorModeValue("#000", "#fff"),
      "&:active p": {
        transform: "scale(0.85)",
        transition: "200ms ease",
      },
    }}
    {...props}
  >
    {children}
  </Tab>
);

export default TabHeader;
