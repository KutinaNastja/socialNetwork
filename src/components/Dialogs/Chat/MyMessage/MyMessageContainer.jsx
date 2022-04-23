import React from "react";
import {
  addMyMessageActionCreator,
  updateNewMessageTextActionCreator,
} from "../../../../redux/dialogsReducer";
import { MyMessage } from "./MyMessage";

export const MyMessageContainer = (props) => {
  let state = props.store.getState().dialogsPage;
  const addMyMessage = () => {
    let action = addMyMessageActionCreator();
    props.store.dispatch(action);
  };

  const onMessageChange = (text) => {
    let action = updateNewMessageTextActionCreator(text);
    props.store.dispatch(action);
  };
  return (
    <MyMessage
      updateNewMessageText={onMessageChange}
      addMyMessage={addMyMessage}
      newMessageText={state.newMessageText}
    />
  );
};
