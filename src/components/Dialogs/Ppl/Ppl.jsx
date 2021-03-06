import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Ppl.module.css";

let Ppl = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={s.item}>
      <div>
        <NavLink to={path}>
          <div className={s.item}>
            <img className={s.img} src={props.img} />
            <div className={s.name}>{props.name}</div>
          </div>
        </NavLink>
      </div>
    </div>
  );
};
export default Ppl;
