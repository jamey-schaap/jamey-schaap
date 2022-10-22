import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import theme from "../lib/theme";

type ChakraProps = {
  cookies: any;
  children: ReactNode;
};

const Chakra = ({ cookies, children }: ChakraProps) => {
  const colorModeManager =
    typeof cookies === "string"
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager;

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {children}
    </ChakraProvider>
  );
};

export default Chakra;
