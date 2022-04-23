import React from "react";
import s from "./Profile.module.css";
import ppl from "../../ppl.png";
import Personal from "./Persinal/Personal";
import { MyPostContainer } from "./MyPost/MyPostContainer";

const Profile = (props) => {
  return (
    <div>
      <div className={s.ppl}>
        <img src={ppl} alt="ppl" />
      </div>
      <div className={s.name}>
        <div className={s.face}>
          <img
            src="https://cdn1.intermedia.ru/img/news_x400/363527.jpg"
            alt="Zendaya"
          />
        </div>
        <div>
          <Personal />
        </div>
      </div>
      <MyPostContainer store={props.store}/>
    </div>
  );
};
export default Profile;
