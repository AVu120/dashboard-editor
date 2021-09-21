import React, { FC, Dispatch, SetStateAction } from "react";
import { IWidgetPosition } from "../../types/common";
import WidgetGrid from "../../components/common/widgetGrid/WidgetGrid";
import styles from "./Editor.module.scss";

interface IEditorProps {
  layout: IWidgetPosition[];
  setLayout: Dispatch<SetStateAction<IWidgetPosition[]>>;
  deleteWidget: (i: string) => void;
  isEditorModeOn: boolean;
}

const Editor: FC<IEditorProps> = ({
  layout,
  setLayout,
  deleteWidget,
  isEditorModeOn,
}) => {
  let numberOfEmptyPanelsInGrid = 12;

  /* Dashboard configuration interface should be represented by a 6 * X matrix where 6 is a fixed number of columns and X is a number of rows which increments 
  dynamically as more widgets are added to the dashboard. The minimal number of rows is 2 when a dashboard is empty, otherwise it is X + 1 additional empty row 
  when a dashboard is already populated with widgets (e.g. if 2 rows are occupied, display 3 with the 3rd being a completely empty row).
  */
  if (layout.length) {
    const maxWidgetYPosition = Math.max(...layout.map((widgdet) => widgdet.y));
    const maxHeightofHighestWidget = Math.max(
      ...layout
        .filter((widget) => widget.y === maxWidgetYPosition)
        .map((widget) => widget.h)
    );
    numberOfEmptyPanelsInGrid =
      (maxWidgetYPosition + maxHeightofHighestWidget + 1) * 6;
  }
  return (
    <>
      <div style={{ position: "relative" }}>
        <div className={styles.emptyPanelsgrid}>
          {Array.from({ length: numberOfEmptyPanelsInGrid }).map((_) => (
            <div className={styles.emptyPanel}></div>
          ))}
        </div>
      </div>
      <div className={styles.widgetLayout}>
        <WidgetGrid {...{ layout, setLayout, deleteWidget, isEditorModeOn }} />
      </div>
    </>
  );
};

export default Editor;
