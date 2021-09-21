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
  const numberOfEmptyPanelsInGrid =
    // layout.length
    //   ? Math.max(...layout.map((widget) => widget.y)) * 24 + 24
    //   : 24;
    48;
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
