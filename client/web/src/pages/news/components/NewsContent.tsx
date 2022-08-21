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
  const [wifiPwd, setwifiPwd] = React.useState("");

  let basePath = `src/assets/news/${title}/${title}-`;
  let endPath = ".png";

  if (curPage == 6) {
    setTimeout(() => {
      setcurPage(curPage + 1);
    }, 3000);
  }

  return (
    <div className={styles.imageWrapper}>
      <img
        src={basePath + curPage + endPath}
        alt="card news content"
        onClick={() => {
          if (curPage == 7) returnToPage();
        }}
      />
      <input
        type="text"
        id={styles.touchArea4}
        disabled={curPage != 4}
        onChange={(e) => {
          if (e.target.value === "123456") {
            e.target.value = "";
            setcurPage(curPage + 1);
          }
        }}
      ></input>
      <div
        id={styles.touchArea1}
        onClick={() => {
          if (curPage == 1) setcurPage(curPage + 1);
        }}
      ></div>
      <div
        id={styles.touchArea2}
        onClick={() => {
          if (curPage == 2) setcurPage(curPage + 1);
        }}
      ></div>
      <div
        id={styles.touchArea3}
        onClick={() => {
          if (curPage == 3) setcurPage(curPage + 1);
        }}
      ></div>

      <div
        id={styles.touchArea5}
        onClick={() => {
          if (curPage == 5) setcurPage(curPage + 1);
        }}
      ></div>
    </div>
  );
};
