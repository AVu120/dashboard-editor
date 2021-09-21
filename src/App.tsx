import {
  ChakraProvider,
  FormControl,
  FormLabel,
  theme,
  IconButton,
} from "@chakra-ui/react";
import React, { FC, ChangeEvent, useState } from "react";
import { Switch } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Editor from "./pages/editor/Editor";
import Dashboard from "./pages/dashboard/Dashboard";
import styles from "./App.module.scss";
import { NUMBER_OF_COLUMNS } from "../src/utils/constants";
import { IWidgetPosition } from "../src/types/common";
import { AddIcon } from "@chakra-ui/icons";
/**
 * TODO write function
 * 1. Make placeholder app page. (DONE)
 * 2. Make placeholder editor page. (DONE)
 * 3. Make placeholder read page. (DONE)
 * 4. Put placeholder editor and read pages in app page. (DONE)
 * 5. Build switch in top-left corner to toggle between editor and read pages. (DONE)
 * 6. Switch to editor mode. (DONE)
 * 7. Make placeholder for widget component (DONE)
 * 8. Create chart component with https://www.npmjs.com/package/recharts starting with simple bar chart with mock data.
 * 9. Create stacked bar chart with mock data.
 * 10. Create add widget button with dropdown that allows you to toggle between chart types.
 * 11. Create draggable/resizable grid with https://www.npmjs.com/package/react-grid-layout. (DONE)
 * 12. Make responsive and performant. (DONE)
 * 13. Create empty widget panel. (DONE)
 * 14. Make it 2 x 2 squares by default. (DONE)
 * 15. Make responsive and performant. (DONE)
 * 16. Make resizable/draggable (and make sure mouse icon corresponds to resize/drag region and hover turns border green). (DONE)
 * 17. Make the widget panel display the mock simple bar chart.
 * 18. Mock multiples of this widget panel, make sure everything works. (DONE)
 * 19. Make responsive and performant.
 * 20. Add a menu icon dropdown in the top-right corner of each widget.
 * 21. Add a delete option which deletes the widget. (DONE)
 * 22. Make sure still responsive and performant.
 * 23. Try and create a base of 6 * X matrix where 6 is a fixed
 *     number of columns and X is a number of rows which increments dynamically as more widgets are added to the board. Min 2 rows when dashboard is empty
 *     , otherwise it is X + 1 (e.g. 3 rows when 2 are populated with widgets where 3rd row is empty).
 * 24. Try and create the background of empty panel tiles within react-grid-layout component. If can't do, create a fixed component for this and position it underneath the
 *     react-grid-layout component to look like a background.
 * 25. Dashboards should not have empty rows. When widgets are deleted from the dashboard and empty rows are created – widgets below empty rows should shift to the top and fill up those empty rows.
 * 26. Make dashboard empty on app mount.
 * 27. Make 'add widget' button actually add the corresponding widget panel to the dashboard.
 * 28. Make sure the added widget type is automatically removed from the 'add widget' button's dropdown options.
 * 29. Add 4/5 more chart types with corresponding mock data.
 * 30. Add a fetch function/api-calling service/module which exports a fetch-data-for-this-widget-type function to the editor page. This will basically mock a call to
 * the backend and simulate a tiny delay (e.g. 2s) as if the backend was actually real.
 * 31. When you click a dropdown option of the 'add widget' button, display a new widget panel with a loading skeleton inside it that renders the 'real' chart inside it after the fake 2s delay.
 * 32. Write a ton of tests.
 */
export const App: FC = () => {
  const [isEditorModeOn, setIsEditorModeOn] = useState(true);
  const [layout, setLayout] = useState<IWidgetPosition[]>([]);

  /**
   * @description Add a new widget add the end of the current widget layout.
   * @param i index/identifer of widget
   */
  const addWidget = (i: string): void => {
    if (layout.length) {
      const lastWidgetPosition = layout[layout.length - 1];
      return setLayout(
        (currentLayout: IWidgetPosition[]): IWidgetPosition[] => [
          ...currentLayout,
          {
            i,
            x:
              lastWidgetPosition.x >= NUMBER_OF_COLUMNS - 2
                ? 0
                : lastWidgetPosition.x + 2,
            y:
              lastWidgetPosition.x >= NUMBER_OF_COLUMNS - 2
                ? lastWidgetPosition.y + 2
                : lastWidgetPosition.y,
            w: 2,
            h: 2,
          },
        ]
      );
    }
    setLayout([{ i: "0", x: 0, y: 0, w: 2, h: 2 }]);
  };

  /**
   * @description Delete widget.
   * @param i index/identifer of widget
   */
  const deleteWidget = (i: string): void =>
    setLayout((currentLayout) =>
      currentLayout.filter((widget) => widget.i !== i)
    );

  return (
    <ChakraProvider theme={theme}>
      <div className={styles.App}>
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
        <body className={styles.body}>
          {isEditorModeOn ? (
            <Editor
              layout={layout}
              setLayout={setLayout}
              deleteWidget={deleteWidget}
            />
          ) : (
            <Dashboard />
          )}
        </body>
      </div>
    </ChakraProvider>
  );
};
