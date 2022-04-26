import React from "react";
import s from "./Users.module.css";

export const Users = (props) => {
    
  if (props.users.length === 0)
    props.setUsers([
      {
        id: 1,
        followed: false,
        fullName: "Tom",
        status: "Каждый охотник",
        location: { city: "СПБ", countru: "РФ" },
        img: "https://v1.popcornnews.ru/k2/news/canvas/1200/upload/news/163495587791.jpg",
      },
      {
        id: 2,
        followed: true,
        fullName: "Saoirse",
        status: "Желает знать",
        location: { city: "СПБ", countru: "РФ" },
        img: "https://m.buro247.ua/images/2018/09/saoirse-ronan-beauty-secrets-2.jpg",
      },
      {
        id: 3,
        followed: false,
        fullName: "Timothée",
        status: "Где",
        location: { city: "СПБ", countru: "РФ" },
        img: "https://i.pinimg.com/550x/4e/ff/93/4eff9351091a6fe866b0752d3966e691.jpg",
      },
      {
        id: 4,
        followed: true,
        fullName: "Sydney",
        status: "Сидит",
        location: { city: "СПБ", countru: "РФ" },
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1351772229.jpg?crop=0.668xw:1.00xh;0.207xw,0&resize=640:*",
      },
      {
        id: 5,
        followed: false,
        fullName: "Jacob",
        status: "Фазан",
        location: { city: "СПБ", countru: "РФ" },
        img: "https://www.famousbirthdays.com/headshots/jacob-elordi-2.jpg",
      },
    ]);

  return (
    <div>
      {props.users.map((user) => (
        <div key={user.id}>
          <div>
            <div>
              <img src={user.img} className={s.img} alt="" />
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
            <div>
              <div>
                <div>{user.fullName}</div>
                <div>{user.status}</div>
              </div>
              <div>
                {user.location.city}
                {user.location.countru}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
