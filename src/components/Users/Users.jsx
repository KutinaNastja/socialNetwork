import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/human-bones.png";
import { NavLink } from "react-router-dom";
import axios from "axios";

export const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div className={s.pageNumber}>
        {pages.map((p) => {
          return (
            <span
              key={p}
              className={(props.currentPage === p && s.selectedPage) || ""}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.users.map((user) => (
        <div key={user.id}>
          <div className={s.item}>
            <div className={s.button}>
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={
                    user.photos.small != null ? user.photos.small : userPhoto
                  }
                  className={s.img}
                />
              </NavLink>
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      axios
                        .delete(
                          `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                          {
                            withCredentials: true,
                            headers: {
                              "API-Key": "88d7ae79-8db9-429a-adb2-6ff9c7634674",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode == 0) {
                            props.unfollow(user.id);
                          }
                        });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      axios
                        .post(
                          `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              "API-Key": "88d7ae79-8db9-429a-adb2-6ff9c7634674",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode == 0) {
                            props.follow(user.id);
                          }
                        });
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
        </div>
      ))}
    </div>
  );
};
