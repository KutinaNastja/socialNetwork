import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../assets/images/human-bones.png";

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
            <span key={p.id}
              className={props.currentPage === p && s.selectedPage}
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
        <div>
          <div className={s.item}>
            <div className={s.button}>
              <img
                src={user.photos.small != null ? user.photos.small : userPhoto}
                className={s.img}
              />
              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      props.unfollow(user.id);
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      props.follow(user.id);
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
