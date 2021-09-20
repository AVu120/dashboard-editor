import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export const App = () => (
  <ChakraProvider theme={theme}>
    <ColorModeSwitcher
      style={{ position: "fixed", top: "20px", right: "20px" }}
    />
    <div>App Placeholder</div>
  </ChakraProvider>
);
