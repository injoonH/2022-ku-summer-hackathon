import React from "react";
import { FaQuestion } from "react-icons/fa";

import { FloatingButton, SearchBar } from "@/components";
import { NewsPreview } from "./components";

import newsPreview from "@/data/news-preview.json";

import styles from "./newsPage.module.scss";
import { NewsContent } from "./components/NewsContent";

export const NewsPage: React.FC = () => {
  const [userName, setuserName] = React.useState("김효정");
  const [curContent, setcurContent] = React.useState(-1);

  return (
    <>
      {curContent === 0 && (
        <NewsContent
          title={"wifi-connection"}
          returnToPage={() => setcurContent(-1)}
        ></NewsContent>
      )}
      <div className={styles.greetingContainer}>
        <span className={styles.userName}>{userName} 님,</span>
        <span className={styles.greetingMessage}>안녕하세요!</span>
      </div>
      <SearchBar />
      <p className={styles.questionMessage}>어떤 기능이 궁금하신가요?</p>
      <section className={styles.newsPreviewContainer}>
        {newsPreview.news.map(({ title, subtitle, img }, idx) => (
          <NewsPreview
            key={idx}
            title={title}
            subtitle={subtitle}
            src={`src/assets/news/preview/${img}`}
            onClick={() => setcurContent(idx)}
          />
        ))}
      </section>
    </>
  );
};
