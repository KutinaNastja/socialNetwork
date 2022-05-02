import React from "react";
import s from "./Personal.module.css";

const Personal = (props) => {
  return (
    <div>
      <div className={s.name}>{props.profile.fullName}</div>
      <div>{props.profile.aboutMe}</div>
      <div>{props.profile.lookingForAJobDescription}</div>
      <div>{props.profile.contacts.vk}</div>
      <div>{props.profile.contacts.instagram}</div>
    </div>
  );
};

export default Personal;
