import { ChakraProvider, theme } from "@chakra-ui/react";
import React, { FC, useState } from "react";
import Editor from "./pages/editor/Editor";
import Dashboard from "./pages/dashboard/Dashboard";
import styles from "./App.module.scss";
import { NUMBER_OF_COLUMNS } from "../src/utils/constants";
import { IWidgetPosition } from "../src/types/common";
import AppHeader from "./components/common/appHeader/AppHeader";
import "./App.scss";
/**
 * TODO:
 * 1. Make placeholder app page. (DONE)
 * 2. Make placeholder editor page. (DONE)
 * 3. Make placeholder read page. (DONE)
 * 4. Put placeholder editor and read pages in app page. (DONE)
 * 5. Build switch in top-left corner to toggle between editor and read pages. (DONE)
 * 6. Switch to editor mode. (DONE)
 * 7. Make placeholder for widget component (DONE)
 * 8. Create add widget button with dropdown that allows you to toggle between chart types. (DONE)
 * 9. Create draggable/resizable grid with https://www.npmjs.com/package/react-grid-layout. (DONE)
 * 10. Make responsive and performant. (DONE)
 * 11. Create empty widget panel. (DONE)
 * 12. Make it 2 x 2 squares by default. (DONE)
 * 13. Make responsive and performant. (DONE)
 * 14. Make resizable/draggable (and make sure mouse icon corresponds to resize/drag region and hover turns border green). (DONE)
 * 15. Make the widget panel display the mock simple bar chart. (DONE)
 * 16. Mock multiples of this widget panel, make sure everything works. (DONE)
 * 17. Make responsive and performant. (DONE)
 * 18. Add a delete option which deletes the widget. (DONE)
 * 19. Make sure still responsive and performant. (DONE)
 * 20. Try and create a base of 6 * X matrix where 6 is a fixed
 *     number of columns and X is a number of rows which increments dynamically as more widgets are added to the board. Min 2 rows when dashboard is empty
 *     , otherwise it is X + 1 (e.g. 3 rows when 2 are populated with widgets where 3rd row is empty). (DONE)
 * 21. Try and create the background of empty panel tiles within react-grid-layout component. If can't do, create a fixed component for this and position it underneath the
 *     react-grid-layout component to look like a background. (DONE)
 * 21. Dashboards should not have empty rows. When widgets are deleted from the dashboard and empty rows are created – widgets below empty rows should shift to the top and fill up those empty rows. (DONE)
 * 22. Make dashboard empty on app mount. (DONE)
 * 23. Make 'add widget' button actually add the corresponding widget panel to the dashboard. (DONE)
 * 24. Make sure the added widget type is automatically removed from the 'add widget' button's dropdown options. (DONE)
 * 25. Add 4/5 more chart types with corresponding mock data. (DONE)
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
    setLayout([{ i, x: 0, y: 0, w: 2, h: 2 }]);
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
        <AppHeader
          {...{ isEditorModeOn, layout, setIsEditorModeOn, addWidget }}
        />
        <body className={styles.body}>
          {isEditorModeOn ? (
            <Editor
              layout={layout}
              setLayout={setLayout}
              deleteWidget={deleteWidget}
              isEditorModeOn={isEditorModeOn}
            />
          ) : (
            <Dashboard
              layout={layout}
              setLayout={setLayout}
              deleteWidget={deleteWidget}
              isEditorModeOn={isEditorModeOn}
            />
          )}
        </body>
      </div>
    </ChakraProvider>
  );
};
