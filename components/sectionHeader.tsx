import { Divider, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

type SectionHeadingProps = {
  children: ReactNode | undefined;
};
const SectionHeading = ({ children, ...props }: SectionHeadingProps) => (
  <>
    <Heading
      as="h3"
      fontSize={20}
      marginTop={3}
      marginBottom={1}
      // @ts-ignore
      align="center"
      {...props}
    >
      {children}
    </Heading>
    <Divider
      orientation="horizontal"
      borderTop="4px solid #525252;"
      borderRadius="lg"
      marginBottom="2"
    />
  </>
);

export default SectionHeading;
