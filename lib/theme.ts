import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode("#f0e7db", "#202023")(props),
    },
  }),
};

const components = {
  Link: {
    baseStyle: (props: any) => ({
      color: mode("#3d7aed", "#ffdd99")(props),
      textUnderlineOffset: 3,
    }),
  },
  Tooltip: {
    baseStyle: (props: any) => ({
      bg: mode("whiteAlpha.500", "whiteAlpha.200")(props),
      backdropFilter: "blur(10px)",
      color: mode("black", "white")(props),
      borderRadius: "lg",
      placement: "bottom",
    }),
  },
};

const fonts = {
  heading: "'M PLUS Rounded 1c'",
};

const colors = {
  grassTeal: "#88ccca",
};

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

const theme = extendTheme({ config, styles, components, fonts, colors });
export default theme;
