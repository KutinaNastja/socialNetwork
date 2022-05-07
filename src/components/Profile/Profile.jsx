import React from "react";
import s from "./Profile.module.css";
import ppl from "../../ppl.png";
import Personal from "./Persinal/Personal";
import { MyPostContainer } from "./MyPost/MyPostContainer";
import { Preloader } from "../common/Preloader/Preloader";
import userPhoto from "../../assets/images/human-bones.png";


export const Profile = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.ppl}>
        <img src={ppl} alt="ppl" />
      </div>
      <div className={s.name}>
        <div className={s.face}>
          <img
            src={
              props.profile.photos.large != null
                ? props.profile.photos.large
                : userPhoto
            }
            alt="Zendaya"
          />
        </div>
        <div>
          <Personal profile={props.profile} />
        </div>
      </div>
      <MyPostContainer />
    </div>
  );
};
