import React, { FC } from "react";
import styles from "./WidgetCard.module.scss";
import { CloseButton } from "@chakra-ui/react";

interface IWidgetCardProps {
  deleteWidget: (i: string) => void;
  i: string;
  isEditorModeOn: boolean;
}
const WidgetCard: FC<IWidgetCardProps> = ({
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
        <div>{i}</div>
        {isEditorModeOn && <CloseButton onClick={() => deleteWidget(i)} />}
      </header>
    </div>
  );
};

export default WidgetCard;
