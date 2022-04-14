import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";

function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log("rendered");
  });

  return <App posts={POSTS_DATA} ppl={PPL_DATA} chat={ CHAT_DATA}/>;
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<AppWithCallbackAfterRender />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export const POSTS_DATA = [
  {
    id: 1,
    message: "Hey, why nobody love me?",
    likesCount: 5,
    author:
      "https://v1.popcornnews.ru/k2/news/canvas/1200/upload/news/163495587791.jpg",
  },
  {
    id: 1,
    message: "it's our new program! Hey!",
    likesCount: 4,
    author:
      "https://i.pinimg.com/550x/4e/ff/93/4eff9351091a6fe866b0752d3966e691.jpg",
  },
];

export const PPL_DATA = [
  { id: 1, name: "Tom" },
  { id: 2, name: "Valera" },
  { id: 3, name: "Sveta" },
  { id: 4, name: "Dmitry" },
  { id: 5, name: "Viktor" },
];

export const CHAT_DATA = [
  {
    id: 1,
    messages: "Hi!",
    img: "https://v1.popcornnews.ru/k2/news/canvas/1200/upload/news/163495587791.jpg",
  },
  {
    id: 2,
    messages: "How are you?",
    img: "https://cdn1.intermedia.ru/img/news_x400/363527.jpg",
  },
  {
    id: 3,
    messages: "Hello!",
    img: "https://i.pinimg.com/550x/4e/ff/93/4eff9351091a6fe866b0752d3966e691.jpg",
  },
];
