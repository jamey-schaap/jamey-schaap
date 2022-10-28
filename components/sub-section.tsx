import { Grid, GridItem } from "@chakra-ui/react";
import { ReactNode } from "react";

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

const SectionRow = ({ children, ...props }: BioProps) => (
  <Grid
    templateAreas={`
      "date info"
      `}
    gridTemplateColumns={"160px 1fr"}
    gap="0"
    {...props}
  >
    {children}
  </Grid>
);

export default SectionRow;