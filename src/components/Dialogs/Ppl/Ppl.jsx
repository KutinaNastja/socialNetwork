import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Ppl.module.css";


let Ppl = (props) => {
    let path = "/dialogs/" + props.id;
  return (
    <div className={s.item}>
      <ul>
        <li>
          <NavLink to={path}>{props.name}</NavLink>
        </li>
      </ul>
    </div>
  );
};
export default Ppl;
