import React from "react";

import styles from "./chatContainer.module.scss";

export const ChatContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <div className={styles.chatContainer}>{children}</div>;
};
