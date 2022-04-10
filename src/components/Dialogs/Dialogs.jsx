import React from "react";
import s from "./Dialogs.module.css";
import Ppl from "./Ppl/Ppl";
import Chat from "./Chat/Chat";

const Dialogs = (props) => {
  return (
    <div>
      <p>Dialogs</p>
      <div className={s.item}>
        <div className="Ppl">
          <Ppl name="Tom" id="1" />
          <Ppl name="Sveta" id="2" />
          <Ppl name="Valera" id="3" />
          <Ppl name="Dmitry" id="4" />
          <Ppl name="Viktor" id="5" />
        </div>
        <Chat />
      </div>
    </div>
  );
};
export default Dialogs;
