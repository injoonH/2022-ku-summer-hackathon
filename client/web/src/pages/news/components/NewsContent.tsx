import React from "react";
import styles from "./newsContent.module.scss";

interface NewsContentProps {
  title: String;
  returnToPage: Function;
}

export const NewsContent: React.FC<NewsContentProps> = ({
  title,
  returnToPage,
}) => {
  const [curPage, setcurPage] = React.useState(1);

  let basePath = `src/assets/news/${title}/${title}-`;
  let endPath = ".png";

  const interact = (e: any) => {
    setcurPage(curPage + 1);
    if (curPage == 7) {
      returnToPage();
    }
  };

  return (
    <div className={styles.imageWrapper}>
      <img
        src={basePath + curPage + endPath}
        alt="card news content"
        onClick={interact}
      />
      <div className={styles.touchArea}>hihi</div>
    </div>
  );
};
