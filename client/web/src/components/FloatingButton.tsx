import React from "react";

import styles from "./floatingButton.module.scss";

interface FloatingButtonProps {
  icon: React.ReactNode;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({ icon }) => {
  return <button className={styles.button}>{icon}</button>;
};
