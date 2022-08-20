import React from "react";
import classNames from "classnames";

import styles from "./chat.module.scss";

interface ChatProps {
  text: string;
  posLeft?: boolean;
  item?: React.ReactNode;
}

export const Chat: React.FC<ChatProps> = ({ text, posLeft = false, item }) => {
  return (
    <div
      className={classNames({
        [styles.chatWrapper]: true,
        [styles.chatWrapperLeft]: posLeft,
      })}
    >
      {posLeft ? (
        <div className={styles.mascotImageWrapper}>
          <img
            className={styles.mascotImage}
            src="src/assets/mascot/mascot-side-face.png"
            alt="mascot side face"
          />
        </div>
      ) : null}
      <div className={styles.chat}>
        <p>{text}</p>
        {item}
      </div>
    </div>
  );
};
