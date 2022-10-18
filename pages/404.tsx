import NextLink from "next/link";
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";

const NotFound: React.FC = () => {
  return (
    <Container>
      <Heading as="h1">Not found</Heading>
      <Text>The page you&apos;re looking for was not found.</Text>
      <Divider my={6} />
      {/* @ts-ignore */}
      <Box my={6} align="center">
        <NextLink href="/" passHref>
          <Button colorScheme="20202380">Return to home</Button>
        </NextLink>
      </Box>
    </Container>
  );
};

export default NotFound;
