import { ChakraProvider, theme } from "@chakra-ui/react";
import React, { FC } from "react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import styles from "./App.module.scss";

export const App: FC = () => (
  <ChakraProvider theme={theme}>
    <div className={styles.toggleDarkModeButtonContainer}>
      <ColorModeSwitcher
      // style={{ position: "fixed", top: "20px", right: "20px" }}
      />
    </div>
    <div>App Placeholder</div>
  </ChakraProvider>
);
