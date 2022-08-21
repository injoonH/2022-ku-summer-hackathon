import React from "react";
import { FaMicrophone, FaStop } from "react-icons/fa";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { Chat, ChatContainer } from "./components";
import { NewsPreview } from "@/pages/news/components";

import newsPreview from "@/data/news-preview.json";

import styles from "./home.module.scss";

export const Home: React.FC = () => {
  const news = newsPreview.news[1];
  const [chats, setChats] = React.useState([
    {
      text: "이런 수업은 어떠세요?",
      posLeft: true,
      item: {
        title: news.title,
        subtitle: news.subtitle,
        src: `src/assets/news/preview/${news.img}`,
      },
    },
    { text: "안녕 영웅아", posLeft: false },
    { text: "효정 님, 안녕하세요! 무엇을 도와드릴까요?", posLeft: true },
    { text: "오늘 날씨 어때?", posLeft: false },
  ]);
  const { transcript, listening, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  if (!browserSupportsSpeechRecognition)
    return <span>기기가 음성 인식을 지원하지 않습니다.</span>;

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
        {chats.map((chat, idx) => (
          <Chat
            key={idx}
            text={chat.text}
            posLeft={chat.posLeft}
            item={
              chat.item ? (
                <NewsPreview
                  title={chat.item.title}
                  subtitle={chat.item.subtitle}
                  src={chat.item.src}
                />
              ) : undefined
            }
          />
        ))}
      </ChatContainer>
      <div className={styles.micWrapper}>
        <div
          className={styles.mic}
          onClick={async () => {
            if (!listening) {
              SpeechRecognition.startListening();
              return;
            }
            SpeechRecognition.stopListening();

            console.log("save", { text: transcript });

            const res = await fetch("http://192.168.100.104:80/character", {
              method: "POST",
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                text: transcript,
              }),
            });
            const json = await res.json();

            console.log("response", json.contents);

            setChats((currChats) => [
              ...currChats,
              transcript === ""
                ? { text: "목소리가 잘 들리지 않아요.", posLeft: true }
                : { text: transcript, posLeft: false },
              { text: json.contents, posLeft: true },
            ]);
          }}
        >
          {listening ? <FaStop /> : <FaMicrophone />}
        </div>
      </div>
    </div>
  );
};
