import React from "react";
import s from "./Personal.module.css";

const Personal = () => {
  return (
    <div>
      <div className={s.name}>Zendaya</div>
      <div>Date of Birth: 01.09.1996</div>
      <div>City: California</div>
    </div>
  );
};

export default Personal;
