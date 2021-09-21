import React, { FC, Dispatch, SetStateAction } from "react";
import RGL, { WidthProvider } from "react-grid-layout";
import { IWidgetPosition } from "../../../types/common";
import WidgetCard from "../widgetCard/WidgetCard";
import "react-grid-layout/css/styles.css";

const ReactGridLayout = WidthProvider(RGL);

interface IEditorProps {
  layout: IWidgetPosition[];
  setLayout: Dispatch<SetStateAction<IWidgetPosition[]>>;
  deleteWidget: (i: string) => void;
  isEditorModeOn: boolean;
}

const WidgetGrid: FC<IEditorProps> = ({
  layout,
  setLayout,
  deleteWidget,
  isEditorModeOn,
}) => {
  return (
    <ReactGridLayout
      className="layout"
      layout={layout}
      cols={6}
      isDraggable={isEditorModeOn}
      isResizable={isEditorModeOn}
      onLayoutChange={(layout) => setLayout(layout)}
    >
      {layout.map((item) => (
        <div key={item.i}>
          <WidgetCard
            title={item.i}
            data-grid={item}
            deleteWidget={deleteWidget}
            i={item.i}
            isEditorModeOn={isEditorModeOn}
          />
        </div>
      ))}
    </ReactGridLayout>
  );
};

export default WidgetGrid;
