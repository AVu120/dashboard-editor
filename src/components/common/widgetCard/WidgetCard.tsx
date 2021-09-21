import React, { FC } from "react";
import styles from "./WidgetCard.module.scss";
import { CloseButton } from "@chakra-ui/react";

interface IWidgetCardProps {
  title: string;
  deleteWidget: (i: string) => void;
  i: string;
}
const WidgetCard: FC<IWidgetCardProps> = ({ title, deleteWidget, i }) => {
  return (
    <div className={styles.WidgetCard}>
      <header className={styles.header}>
        <div>{title}</div>
        <CloseButton onClick={() => deleteWidget(i)} />
      </header>
    </div>
  );
};

export default WidgetCard;
