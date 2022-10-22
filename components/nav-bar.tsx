import { Box, Container, Stack, useColorModeValue } from "@chakra-ui/react";
import NavItem from "./nav-item";
import ThemeToggleButton from "./theme-toggle-button";

type NavProps = {
  path: string;
};

const NavBar: React.FC<NavProps> = ({ path, ...props }: NavProps) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("##202023", "#20202380")}
      css={{ backdropFilter: "blur(10px)" }}
      zIndex={2}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        flexWrap="wrap"
        // @ts-ignore
        align="center"
        justify="space-between"
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <NavItem href="/" path={path}>
            Jamey Schaap
          </NavItem>
          <NavItem href="/projects" path={path}>
            Projects
          </NavItem>
        </Stack>
        {/* @ts-ignore */}
        <Box flex={1} align="right">
          <ThemeToggleButton />
        </Box>
      </Container>
    </Box>
  );
};
export default NavBar;
