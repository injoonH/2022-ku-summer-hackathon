import React from "react";
import { Chat, ChatContainer } from "./components";
import { NewsPreview } from "@/pages/news/components";

import newsPreview from "@/data/news-preview.json";

import styles from "./home.module.scss";

export const Home: React.FC = () => {
  const news = newsPreview.news[1];

  return (
    <div className={styles.container}>
      <div className={styles.mascotWrapper}>
        <span>영웅이</span>
        <img
          className={styles.mascot}
          src="src/assets/mascot/mascot-front.png"
          alt="mascot front"
        />
      </div>
      <ChatContainer>
        <Chat
          text="이런 수업은 어떠세요?"
          posLeft
          item={
            <NewsPreview
              title={news.title}
              subtitle={news.subtitle}
              src={`src/assets/news/preview/${news.img}`}
            />
          }
        />
        <Chat text="안녕 영웅아" />
        <Chat text="효정 님, 안녕하세요 무엇을 도와드릴까요?" posLeft />
        <Chat text="오늘 날씨 어때?" />
      </ChatContainer>
    </div>
  );
};
