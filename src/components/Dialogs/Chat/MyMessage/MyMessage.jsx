import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import s from "./MyMessage.module.css";

export const MyMessage = (props) => {
  const addNewMessage = (values) => {
    props.addMyMessage(values.message);
  };

  return (
    <div className={s.addMyMessage}>
      <MessageReduxForm onSubmit={addNewMessage} />
    </div>
  );
};

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          className={s.message}
          placeholder={"Message"}
          name={"message"}
          component={"input"}
        />
      </div>
      <div>
        <button>Send</button>
      </div>
    </form>
  );
};

const MessageReduxForm = reduxForm({
  form: "message",
})(MessageForm);
