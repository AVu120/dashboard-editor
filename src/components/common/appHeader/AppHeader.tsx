import React, { FC, ChangeEvent, Dispatch, SetStateAction } from "react";
import { Switch } from "@chakra-ui/switch";
import {
  FormControl,
  FormLabel,
  IconButton,
  MenuButton,
  Menu,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import styles from "./AppHeader.module.scss";
import { IWidgetPosition } from "../../../types/common";
import { AddIcon } from "@chakra-ui/icons";
// import { ColorModeSwitcher } from "../../../ColorModeSwitcher";

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
  const allWidgetOptions = [
    "Simple Line Chart",
    "Stacked Area Chart",
    "Mixed Bar Chart",
    "Stacked Bar Chart",
    "Simple Scatter Chart",
  ];

  const availableWidgetOptions = allWidgetOptions.filter(
    (option) => !layout.some((widget) => widget.i === option)
  );
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
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="add-widget-options"
            icon={<AddIcon />}
            variant="outline"
          />
          <MenuList>
            {availableWidgetOptions
              .filter((option) => !layout.some((widget) => widget.i === option))
              .map((option) => (
                <MenuItem onClick={() => addWidget(option)}>{option}</MenuItem>
              ))}
          </MenuList>
        </Menu>
      </nav>
      {/* <ColorModeSwitcher /> */}
    </header>
  );
};

export default AppHeader;
