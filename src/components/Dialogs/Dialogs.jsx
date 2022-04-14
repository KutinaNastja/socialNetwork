import React from "react";
import s from "./Dialogs.module.css";
import Ppl from "./Ppl/Ppl";
import Chat from "./Chat/Chat";

const Dialogs = (props) => {
  const NewPplData = props.ppl.map((el, i) => (
    <Ppl key={i} name={el.name} id={el.id} />
  ));

  const NewChatData = props.chat.map((el, i) => (
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
