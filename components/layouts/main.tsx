import { Box, Container } from "@chakra-ui/react";
import { Router } from "next/router";
import { ReactNode } from "react";
import NavBar from "../navBar";

type MainProps = {
  router?: Router;
  children?: ReactNode;
};

const Main = ({ children, router }: MainProps) => {
  const path = router ? router.asPath : "";
  return (
    <Box as="main" pb={8}>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Jamey's homepage" />
      <meta name="author" content="Jamey Schaap" />
      <meta name="author" content="jaim-io" />

      <NavBar path={path} />

      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  );
};

export default Main;
