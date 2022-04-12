import React from "react";
import s from "./Dialogs.module.css";
import Ppl from "./Ppl/Ppl";
import Chat from "./Chat/Chat";

const Dialogs = (props) => {
  let PplData = [
    { id: 1, name: "Tom" },
    { id: 2, name: "Valera" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Dmitry" },
    { id: 5, name: "Viktor" },
  ];

  let NewPplData = PplData.map((el,i) => <Ppl key={i} name={el.name} id={el.id} />);

  let ChatData = [
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

  let NewChatData = ChatData.map((el,i) => (
    <Chat key={i} messages={el.messages} img={el.img} />
  ));

  return (
    <div>
      <p>Dialogs</p>
      <div className={s.item}>
        <div className="Ppl">{NewPplData}</div>
        <div className={s.chat}>{NewChatData}</div>
      </div>
    </div>
  );
};
export default Dialogs;
