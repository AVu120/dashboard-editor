import React, { FC } from "react";
import styles from "./WidgetCard.module.scss";

interface IWidgetCardProps {
  title: string;
}
const WidgetCard: FC<IWidgetCardProps> = ({ title }) => {
  return (
    <div className={styles.WidgetCard}>
      <header className={styles.header}>
        <div>{title}</div>
        <button>Close</button>
      </header>
    </div>
  );
};

export default WidgetCard;
