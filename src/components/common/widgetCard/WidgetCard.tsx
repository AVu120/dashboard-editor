import React, { FC } from "react";
import styles from "./WidgetCard.module.scss";
import { CloseButton } from "@chakra-ui/react";

interface IWidgetCardProps {
  title: string;
  deleteWidget: (i: string) => void;
  i: string;
  isEditorModeOn: boolean;
}
const WidgetCard: FC<IWidgetCardProps> = ({
  title,
  deleteWidget,
  i,
  isEditorModeOn,
}) => {
  return (
    <div
      className={`${styles.WidgetCard} ${
        isEditorModeOn && styles.WidgetCardInEditMode
      }`}
    >
      <header className={styles.header}>
        <div>{title}</div>
        {isEditorModeOn && <CloseButton onClick={() => deleteWidget(i)} />}
      </header>
    </div>
  );
};

export default WidgetCard;
