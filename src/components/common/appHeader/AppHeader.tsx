import React, { FC, ChangeEvent, Dispatch, SetStateAction } from "react";
import { Switch } from "@chakra-ui/switch";
import { FormControl, FormLabel, IconButton } from "@chakra-ui/react";
import styles from "./AppHeader.module.scss";
import { IWidgetPosition } from "../../../types/common";
import { AddIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "../../../ColorModeSwitcher";

interface IAppHeaderProps {
  isEditorModeOn: boolean;
  setIsEditorModeOn: Dispatch<SetStateAction<boolean>>;
  addWidget: (i: string) => void;
  layout: IWidgetPosition[];
}
const AppHeader: FC<IAppHeaderProps> = ({
  isEditorModeOn,
  layout,
  setIsEditorModeOn,
  addWidget,
}) => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="editor-mode" mb="0">
            Editor Mode
          </FormLabel>
          <Switch
            id="editor-mode"
            isChecked={isEditorModeOn}
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              setIsEditorModeOn(e.target.checked)
            }
          />
        </FormControl>
        <IconButton
          className={styles.addWidgetButton}
          onClick={() =>
            addWidget(
              layout.length
                ? (Number(layout[layout.length - 1].i) + 1).toString()
                : "0"
            )
          }
          aria-label="Add Widget"
          icon={<AddIcon />}
        />
      </nav>
      <ColorModeSwitcher />
    </header>
  );
};

export default AppHeader;
