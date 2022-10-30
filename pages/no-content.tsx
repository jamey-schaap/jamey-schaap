import { Box } from "@chakra-ui/react";
import {SectionHeading} from "../components/section";

const NoContent = () => (
  <>
    <Box
      style={{
        width: "100%",
        height: "0",
        paddingBottom: "73%",
        position: "relative",
      }}
    >
      <iframe
        src="https://giphy.com/embed/5lAtcHWPAYFdS"
        width="100%"
        height="100%"
        style={{ position: "absolute" }}
        className="giphy-embed"
        allowFullScreen
      ></iframe>
    </Box>
    <SectionHeading>
      There is no content yet, please check back at a later time!
    </SectionHeading>
  </>
);

export default NoContent;
