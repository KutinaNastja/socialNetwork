import React from "react";
import s from "./Chat.module.css";

let Chat = (props) => {
  return (
    <div className={s.chat}>
      <div className={s.item}>
        <img src={props.img} alt="" />
        <div>{props.messages}</div>
      </div>
    </div>
  );
};
export default Chat;
