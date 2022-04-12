import React from "react";
import { NavLink } from "react-router-dom";
import s from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className = { navData => navData.isActive ? s.active : s.item }> Profil</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/dialogs" className = { navData => navData.isActive ? s.active : s.item }> Dialogs</NavLink>
      </div>
      <div className={s.item}>
        <a> Newsl</a>
      </div >
      <div className={s.item}>
        <a> Music</a>
      </div>
      <div className={s.item}>
        <a> Settings</a>
      </div>
    </nav>
  );
};
export default Navbar;