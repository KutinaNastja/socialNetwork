import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://i.pinimg.com/550x/4e/ff/93/4eff9351091a6fe866b0752d3966e691.jpg"
        alt=""
      />
      {props.message}
      <div>
        {" "}
        <span>like</span>
        {props.likesCount}
      </div>
    </div>
  );
};
export default Post;
