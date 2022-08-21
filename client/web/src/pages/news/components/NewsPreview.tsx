import React from "react";

import styles from "./newsPreview.module.scss";

interface NewsPreviewProps {
  title: string;
  subtitle: string;
  src: string;
  onClick: Function;
}

export const NewsPreview: React.FC<NewsPreviewProps> = ({
  title,
  subtitle,
  src,
  onClick,
}) => {
  return (
    <div className={styles.newsPreview} onClick={() => onClick()}>
      <span className={styles.subtitle}>{subtitle}</span>
      <span className={styles.title}>{title}</span>
      <div className={styles.imageWrapper}>
        <img src={src} alt="card news preview" />
      </div>
    </div>
  );
};
