import { Tab, useColorModeValue } from "@chakra-ui/react";
import { ReactNode, useState } from "react";

type TabHeaderProps = {
  children: ReactNode;
};

const TabHeader = ({ children, ...props }: TabHeaderProps) => {
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
      // borderColor="#525252"
      {...props}
    >
      {children}
    </Tab>
  );
};

export default TabHeader;
