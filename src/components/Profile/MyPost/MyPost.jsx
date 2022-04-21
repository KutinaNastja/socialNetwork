import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/state";
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
  const newPostElement = React.createRef();
  const addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  const onPostChange = () => {
    let text = newPostElement.current.value;
    let action = updateNewPostTextActionCreator(text);
    props.dispatch(action);
  };
  return (
    <div>
      <div className={s.MyPost}>
        <span>My posts</span>
        <textarea
          onChange={onPostChange}
          ref={newPostElement}
          value={props.newPostText}
        />
        <button onClick={addPost}>Add post</button>
      </div>
      <div className={s.posts}>{newPostDate}</div>
    </div>
  );
};
export default MyPost;
