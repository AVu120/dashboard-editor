import React, { FC, ReactNode } from "react";
import styles from "./WidgetCard.module.scss";
import { CloseButton } from "@chakra-ui/react";
import SimpleLineChart from "../widgets/SimpleLineChart";
import StackedAreaChart from "../widgets/StackedAreaChart";
import MixedBarChart from "../widgets/MixedBarChart";
import StackedBarChart from "../widgets/StackedBarChart";
import SimpleScatterChart from "../widgets/SimpleScatterChart";

interface IWidgetCardProps {
  deleteWidget: (i: string) => void;
  i: string;
  isEditorModeOn: boolean;
}

interface IMap<T> {
  [key: string]: T;
}
const WidgetCard: FC<IWidgetCardProps> = ({
  deleteWidget,
  i,
  isEditorModeOn,
}) => {
  const displayedWidget: IMap<ReactNode> = {
    "Simple Line Chart": <SimpleLineChart />,
    "Stacked Area Chart": <StackedAreaChart />,
    "Mixed Bar Chart": <MixedBarChart />,
    "Stacked Bar Chart": <StackedBarChart />,
    "Simple Scatter Chart": <SimpleScatterChart />,
  };
  return (
    <div
      className={`${styles.WidgetCard} ${
        isEditorModeOn && styles.WidgetCardInEditMode
      }`}
    >
      <header
        className={`${styles.header} && ${
          !isEditorModeOn && styles.headerInReadOnlyMode
        }`}
      >
        {isEditorModeOn && <div></div>}
        <div className={styles.title}>{i}</div>
        {isEditorModeOn && (
          <CloseButton onClick={() => deleteWidget(i)} size="sm" />
        )}
      </header>
      <div className={styles.body}>{displayedWidget[i]}</div>
    </div>
  );
};

export default WidgetCard;
