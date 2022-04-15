import React from "react";
import { NavLink } from "react-router-dom";
import s from "./friends.module.css";

export let Friends = (props) => {
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