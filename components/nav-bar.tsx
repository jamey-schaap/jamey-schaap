import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";
import Logo from "./logo";
import ThemeToggleButton from "./theme-toggle-button";
import { HamburgerIcon } from "@chakra-ui/icons";
import { IoLogoGithub } from "react-icons/io5";
import { ReactNode } from "react";

type NavItemProps = {
  href: string;
  path: string;
  target?: string;
  children: ReactNode;
};

const NavItem: React.FC<NavItemProps> = ({
  href,
  path,
  children,
  target = "_self",
  ...props
}) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  const activeColor = useColorModeValue("#3d7aed", "#ffdd99");
  return (
    <Link
      href={href}
      target={target}
      p={2}
      color={active ? activeColor : inactiveColor}
      css={{
        "&:active": {
          transform: "scale(0.85)",
          transition: "200ms ease",
        },
      }}
      {...props}
    >
      {children}
    </Link>
  );
};

type NavProps = {
  path: string;
};

const NavBar: React.FC<NavProps> = ({ path, ...props }: NavProps) => {
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
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
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <NavItem href="/projects" path={path}>
            Projects
          </NavItem>
          <NavItem href="/experience" path={path}>
            Experience
          </NavItem>
          <NavItem
            href="https://github.com/jamey-schaap/jamey-schaap"
            path={path}
            // @ts-ignore
            display="inline-flex"
            target="_blank"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            Source
          </NavItem>
        </Stack>
        {/* @ts-ignore */}
        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <Menu isLazy id="nav-bar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="options"
              />
              <MenuList bg={useColorModeValue("#f0e7db", "#202023")}>
                <MenuItem as={Link} href="/">About</MenuItem>
                <MenuItem as={Link} href="/projects">Projects</MenuItem>
                <MenuItem as={Link} href="/experience">Experience</MenuItem>
                <MenuItem
                  as={Link}
                  href="https://github.com/jamey-schaap/jamey-schaap"
                  display="inline-flex"
                  alignItems="center"
                  style={{ gap: 4 }}
                  pl={2}
                >
                  <IoLogoGithub />
                  Source
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
export default NavBar;
