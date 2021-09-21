import React, { FC, Dispatch, SetStateAction } from "react";
import { IWidgetPosition } from "../../types/common";
import WidgetGrid from "../../components/common/widgetGrid/WidgetGrid";

interface IDashboardProps {
  layout: IWidgetPosition[];
  setLayout: Dispatch<SetStateAction<IWidgetPosition[]>>;
  deleteWidget: (i: string) => void;
  isEditorModeOn: boolean;
}

const Dashboard: FC<IDashboardProps> = ({
  layout,
  setLayout,
  deleteWidget,
  isEditorModeOn,
}) => {
  return (
    <WidgetGrid
      {...{ layout, setLayout, deleteWidget }}
      isEditorModeOn={isEditorModeOn}
    />
  );
};

export default Dashboard;
