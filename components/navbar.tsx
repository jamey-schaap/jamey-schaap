import { Box } from "@chakra-ui/react";
import { NextPage } from "next";
import { AppProps } from "next/app";

type NavProps = {
  path: string;
};

const NavBar: React.FC<NavProps> = ({ path }: NavProps) => {
  return <Box>Test</Box>;
};
export default NavBar;
