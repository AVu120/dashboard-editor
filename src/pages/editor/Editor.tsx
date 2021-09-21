import React, { FC, Dispatch, SetStateAction } from "react";
import { IWidgetPosition } from "../../types/common";
import WidgetGrid from "../../components/common/widgetGrid/WidgetGrid";

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
  return (
    <WidgetGrid {...{ layout, setLayout, deleteWidget, isEditorModeOn }} />
  );
};

export default Editor;
