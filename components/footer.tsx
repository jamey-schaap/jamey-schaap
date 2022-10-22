import { Box } from "@chakra-ui/react";

const Footer = () => (
  // @ts-ignore
  <Box align="center" opacity={0.4} fontSize="sm" pt="4">
    &copy; {new Date().getFullYear()} Jamey Schaap. All Rights Reserved.
  </Box>
);
export default Footer;
