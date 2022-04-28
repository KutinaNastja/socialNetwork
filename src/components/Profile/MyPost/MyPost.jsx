import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

export const MyPost = (props) => {
  const newPostDate = props.posts.map((el, i) => (
    <Post
      key={i}
      message={el.message}
      likesCount={el.likesCount}
      author={el.author}
    />
  ));
  const newPostElement = React.createRef();

  const onAddPost = () => {
    props.addPost();
  };
  const onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text);
  };
  return (
    <div>
      <div className={s.MyPost}>
        <span>My posts</span>
        <input
        className={s.message}
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <button onClick={onAddPost}>Add post</button>
      </div>
      <div className={s.posts}>{newPostDate}</div>
    </div>
  );
};
