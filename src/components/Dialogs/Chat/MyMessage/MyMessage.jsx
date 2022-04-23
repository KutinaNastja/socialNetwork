import React from "react";
import s from "./MyMessage.module.css";

export const MyMessage = (props) => {
  const newMyMessageElement = React.createRef();

  const addMyMessage = () => {
    props.addMyMessage();
  };
  const onMessageChange = () => {
    let text = newMyMessageElement.current.value;
    props.updateNewMessageText(text);
  };
  return (
    <div className={s.addMyMessage}>
      <input
        onChange={onMessageChange}
        className={s.message}
        ref={newMyMessageElement}
        value={props.newMessageText}
      />
      <button onClick={addMyMessage}>Send</button>
    </div>
  );
};
