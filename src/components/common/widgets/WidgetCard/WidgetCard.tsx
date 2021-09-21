import React, { FC, Dispatch, SetStateAction } from "react";
import styles from "./WidgetCard.module.scss";
import { CloseButton } from "@chakra-ui/react";
import { IWidgetPosition } from "../../../../types/common";
interface IWidgetCardProps {
  title: string;
  deleteWidget: Dispatch<SetStateAction<IWidgetPosition[]>>;
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
