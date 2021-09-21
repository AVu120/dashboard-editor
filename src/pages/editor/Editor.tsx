import React, { FC, Dispatch, SetStateAction } from "react";
import WidgetCard from "../../components/common/widgets/WidgetCard/WidgetCard";
import RGL, { WidthProvider } from "react-grid-layout";
import { IWidgetPosition } from "../../types/common";
import "react-grid-layout/css/styles.css";

const ReactGridLayout = WidthProvider(RGL);

interface IEditorProps {
  layout: IWidgetPosition[];
  setLayout: Dispatch<SetStateAction<IWidgetPosition[]>>;
  deleteWidget: Dispatch<SetStateAction<IWidgetPosition[]>>;
}

const Editor: FC<IEditorProps> = ({ layout, setLayout, deleteWidget }) => {
  return (
    <ReactGridLayout
      className="layout"
      layout={layout}
      cols={6}
      isDraggable
      isResizable
      onLayoutChange={(layout) => setLayout(layout)}
    >
      {layout.map((item) => (
        <div key={item.i}>
          <WidgetCard
            title={item.i}
            data-grid={item}
            deleteWidget={deleteWidget}
            i={item.i}
          />
        </div>
      ))}
    </ReactGridLayout>
  );
};

export default Editor;
