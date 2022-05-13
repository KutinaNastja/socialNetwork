import React from "react";
import s from "./Post.module.css";

const Posts = (props) => {
  return (
    <div className={s.item}>
      <img src={props.author} alt="" />
      {props.message}
      <div>
        {" "}
        <span>like</span>
        {props.likesCount}
      </div>
    </div>
  );
};
export default Posts;
