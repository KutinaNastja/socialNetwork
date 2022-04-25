import React from "react";
import s from "./Dialogs.module.css";
import Ppl from "./Ppl/Ppl";
import Chat from "./Chat/Chat";
import { MyMessageContainer } from "./Chat/MyMessage/MyMessageContainer";

const Dialogs = (props) => {
  const NewPplData = props.posts.ppl.map((el, i) => (
    <Ppl key={i} name={el.name} img={el.img} id={el.id} />
  ));

  const NewChatData = props.posts.chat.map((el, i) => (
    <Chat key={i} messages={el.messages} img={el.img} />
  ));

  return (
    <div>
      <p>Dialogs</p>
      <div className={s.item}>
        <div className={s.Ppl}>{NewPplData}</div>
        <div className={s.chat}>
          {NewChatData}
          <MyMessageContainer />
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
