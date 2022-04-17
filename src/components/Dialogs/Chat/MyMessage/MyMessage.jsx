import React from "react";
import s from "./MyMessage.module.css";

export const MyMessage = (props) => {
  const newMyMessageElement = React.createRef();
  const addMyMessage = () => {
    props.addMyMessage();

  };

  const onMessageChahge = () => {
    let text = newMyMessageElement.current.value;
    props.updateNewMessageText(text);
  };

  return (
    <div className={s.addMyMessage}>
      <input
        onChange={onMessageChahge}
        className={s.message}
        ref={newMyMessageElement}
        value={props.state.newMessageText}
      />
      <button onClick={addMyMessage}>Add Message</button>
    </div>
  );
};
