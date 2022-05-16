import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import { maxLengthCreator, required } from "../../../../utils/validators/validators";
import { Input } from "../../../common/FormsControls/FormsControls";
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

const maxLength30 = maxLengthCreator(30);

const MessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          placeholder={"Message"}
          name={"message"}
          component={Input}
          validate={[required, maxLength30]}
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
