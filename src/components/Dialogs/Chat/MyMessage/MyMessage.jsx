import React from "react";
import {
  addMyMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../../redux/state";
import s from "./MyMessage.module.css";

export const MyMessage = (props) => {
  const newMyMessageElement = React.createRef();
  const addMyMessage = () => {
    props.dispatch(addMyMessageActionCreator());
  };

  const onMessageChahge = () => {
    let text = newMyMessageElement.current.value;
    let action = updateNewMessageTextActionCreator(text);
    props.dispatch(action);
  };

  return (
    <div className={s.addMyMessage}>
      <input
        onChange={onMessageChahge}
        className={s.message}
        ref={newMyMessageElement}
        value={props.state.newMessageText}
      />
      <button onClick={addMyMessage}>Send</button>
    </div>
  );
};
