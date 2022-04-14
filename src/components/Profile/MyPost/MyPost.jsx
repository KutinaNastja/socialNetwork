import React from "react";
import { POSTS_DATA } from "../../..";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {
  const newPostDate = props.posts.map((el, i) => (
    <Post
      key={i}
      message={el.message}
      likesCount={el.likesCount}
      author={el.author}
    />
  ));

  return (
    <div>
      <div className={s.MyPost}>
        <span>My posts</span>
        <textarea defaultValue="your news"></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>{newPostDate}</div>
    </div>
  );
};
export default MyPost;
