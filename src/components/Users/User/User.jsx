import React from "react";
import s from "./User.module.css";
import userPhoto from "../../../assets/images/human-bones.png";
import { NavLink } from "react-router-dom";

export const User = ({ user, followingInProgress, unfollow, follow }) => {
  return (
    <div className={s.item}>
      <div className={s.button}>
        <NavLink to={"/profile/" + user.id}>
          <img
            alt=""
            src={user.photos.small != null ? user.photos.small : userPhoto}
            className={s.img}
          />
        </NavLink>
        <div>
          {user.followed ? (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                unfollow(user.id);
              }}
            >
              Unfollow
            </button>
          ) : (
            <button
              disabled={followingInProgress.some((id) => id === user.id)}
              onClick={() => {
                follow(user.id);
              }}
            >
              Follow
            </button>
          )}
        </div>
      </div>
      <div className={s.personal}>
        <div>
          <div>{user.name}</div>
          <div className={s.status}>{user.status}</div>
        </div>
      </div>
    </div>
  );
};
