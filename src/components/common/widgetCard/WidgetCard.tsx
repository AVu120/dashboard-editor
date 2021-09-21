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
        <div></div>
        {isEditorModeOn && (
          <CloseButton onClick={() => deleteWidget(i)} size="sm" />
        )}
      </header>
      <div className={styles.body}>{i}</div>
    </div>
  );
};

export default WidgetCard;
