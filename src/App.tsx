import { ChakraProvider, theme } from "@chakra-ui/react";
import React, { FC, ChangeEvent, useState } from "react";
import { Switch } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import Editor from "./pages/editor/Editor";
import Dashboard from "./pages/dashboard/Dashboard";
import styles from "./App.module.scss";

/**
 * TODO write function
 * 1. Make placeholder app page. (DONE)
 * 2. Make placeholder editor page. (DONE)
 * 3. Make placeholder read page. (DONE)
 * 4. Put placeholder editor and read pages in app page. (DONE)
 * 5. Build switch in top-left corner to toggle between editor and read pages. (DONE)
 * 6. Switch to editor mode. (DONE)
 * 7. Make placeholder for widget component
 * 8. Create chart component with https://www.npmjs.com/package/recharts starting with simple bar chart with mock data.
 * 9. Create stacked bar chart with mock data.
 * 10. Create add widget button with dropdown that allows you to toggle between chart types.
 * 11. Create draggable/resizable grid with https://www.npmjs.com/package/react-grid-layout.
 * 12. Make responsive and performant.
 * 13. Create empty widget panel.
 * 14. Make it 2 x 2 squares by default.
 * 15. Make responsive and performant.
 * 16. Make resizable/draggable (and make sure mouse icon corresponds to resize/drag region and hover turns border green).
 * 17. Make the widget panel display the mock simple bar chart.
 * 18. Mock multiples of this widget panel, make sure everything works.
 * 19. Make responsive and performant.
 * 20. Add a menu icon dropdown in the top-right corner of each widget.
 * 21. Add a delete option which deletes the widget.
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

  return (
    <ChakraProvider theme={theme}>
      <header className={styles.header}>
        <nav>
          Editor Mode{" "}
          <Switch
            isChecked={isEditorModeOn}
            onChange={(e: ChangeEvent<HTMLInputElement>): void =>
              setIsEditorModeOn(e.target.checked)
            }
          />
        </nav>
        <ColorModeSwitcher />
      </header>
      <body className={styles.body}>
        {isEditorModeOn ? <Editor /> : <Dashboard />}
      </body>
    </ChakraProvider>
  );
};
