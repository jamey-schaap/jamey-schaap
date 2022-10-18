import { Box, Link, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { ReactNode } from "react";
import NextLink from "next/link";

type NavItemProps = {
  href: string;
  path: string;
  children: ReactNode;
};

const NavItem: React.FC<NavItemProps> = ({
  href,
  path,
  children,
  ...props
}) => {
  const active = path == href;
  const inactiveColor = useColorModeValue("gray200", "20202380");
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
        p={2}
        bg={active ? "20202380" : undefined}
        color={active ? "#202023" : inactiveColor}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default NavItem;
