import { Link, useColorModeValue } from "@chakra-ui/react";
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
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");
  const activeColor = useColorModeValue("#3d7aed", "#ffdd99");
  return (
    <NextLink href={href} passHref scroll={false}>
      <Link
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
    </NextLink>
  );
};

export default NavItem;
