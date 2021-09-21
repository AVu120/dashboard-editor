import React, { FC, useState } from "react";
import WidgetCard from "../../components/common/widgets/WidgetCard/WidgetCard";
import RGL, { WidthProvider } from "react-grid-layout";
import "react-grid-layout/css/styles.css";

const ReactGridLayout = WidthProvider(RGL);

const Editor: FC = () => {
  const initialLayout = [
    { i: "a", x: 0, y: 0, w: 1, h: 1 },
    { i: "b", x: 1, y: 0, w: 1, h: 1 },
    { i: "c", x: 2, y: 0, w: 1, h: 1 },
    { i: "d", x: 3, y: 0, w: 1, h: 1 },
    { i: "e", x: 4, y: 0, w: 1, h: 1 },
    { i: "f", x: 5, y: 0, w: 1, h: 1 },
    { i: "g", x: 0, y: 1, w: 1, h: 1 },
    { i: "h", x: 1, y: 1, w: 1, h: 1 },
    { i: "i", x: 2, y: 1, w: 1, h: 1 },
    { i: "j", x: 3, y: 1, w: 1, h: 1 },
    { i: "k", x: 4, y: 1, w: 1, h: 1 },
    { i: "l", x: 5, y: 1, w: 1, h: 1 },
  ];
  const [layout, setLayout] = useState(initialLayout);

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
          <WidgetCard title={item.i} data-grid={item} />
        </div>
      ))}
    </ReactGridLayout>
  );
};

export default Editor;
