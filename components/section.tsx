import {
  chakra,
  Divider,
  Grid,
  GridItem,
  Heading,
  shouldForwardProp,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { ReactNode } from "react";

const StyledDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => {
    return shouldForwardProp(prop) || prop === "transition";
  },
});

type SectionProps = {
  children: ReactNode;
  delay?: number;
};

const Section = ({ children, delay = 0 }: SectionProps) => (
  <StyledDiv
    initial={{ y: 10, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    // @ts-ignore
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </StyledDiv>
);

type BioProps = {
  children: ReactNode;
};

export const SectionDate = ({ children, ...props }: BioProps) => (
  <GridItem fontWeight="bold" area={"date"} {...props}>
    {children}
  </GridItem>
);

export const SectionInfo = ({ children, ...props }: BioProps) => (
  <GridItem pl="1" area={"info"} {...props}>
    {children}
  </GridItem>
);

type SectionRowProps = { columnWith?: number } & BioProps;

export const SectionRow = ({
  children,
  columnWith = 160,
  ...props
}: SectionRowProps) => (
  <Grid
    templateAreas={`
      "date info"
      `}
    gridTemplateColumns={`${columnWith}px 1fr`}
    gap="0"
    {...props}
  >
    {children}
  </Grid>
);

type SectionHeadingProps = {
  children: ReactNode | undefined;
};

export const SectionHeading = ({ children, ...props }: SectionHeadingProps) => (
  <>
    <Heading
      as="h3"
      fontSize={20}
      marginTop={3}
      marginBottom={2}
      // @ts-ignore
      align="center"
      {...props}
    >
      {children}
    </Heading>
    <Divider
      orientation="horizontal"
      borderTop="2px solid #525252;"
      borderRadius="lg"
      marginBottom="2"
    />
  </>
);

export default Section;
