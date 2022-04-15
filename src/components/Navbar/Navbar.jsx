import React from "react";
import { NavLink } from "react-router-dom";
import { Friends } from "./friends/friends";
import s from "./Navbar.module.css";

const Navbar = (props) => {
  const friends = props.state.ppl.map((el, i) => (
    <Friends key={i} name={el.name} img={el.img} id={el.id} />
  ));
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
      <div className={s.itemFriend}>
        <a>Friends</a>
        <div className={s.friends}>{friends}</div>
      </div>
      
    </nav>
  );
};
export default Navbar;
