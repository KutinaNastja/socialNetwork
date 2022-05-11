import React from "react";
import { ProfileStatus } from "../ProfileStatus";
import s from "./Personal.module.css";

const Personal = (props) => {
  return (
    <div>
      <div className={s.name}>{props.profile.fullName}</div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
      <div>{props.profile.contacts.vk}</div>
      <div>{props.profile.contacts.instagram}</div>
    </div>
  );
};

export default Personal;
