import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Header.module.css";

export const Header = (props) => {
  return (
    <header className={s.logo}>
      <div className={s.header}>
        {" "}
        <img
          src="https://cdn-icons-png.flaticon.com/512/3069/3069469.png"
          alt="Logo"
        />
        <div className={s.login}>
          {props.isAuth ? (
            <div>
              {props.login} <button onClick={props.logout}>Log out</button>
            </div>
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </div>
      </div>
    </header>
  );
};
