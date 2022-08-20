import React from "react";

import styles from "./newsPreview.module.scss";

interface NewsPreviewProps {
  title: string;
  subtitle: string;
  src: string;
}

export const NewsPreview: React.FC<NewsPreviewProps> = ({
  title,
  subtitle,
  src,
}) => {
  return (
    <div className={styles.newsPreview}>
      <span className={styles.subtitle}>{subtitle}</span>
      <span className={styles.title}>{title}</span>
      <div className={styles.imageWrapper}>
        <img src={src} alt="card news preview" />
      </div>
    </div>
  );
};
