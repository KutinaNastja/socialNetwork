import React from "react";
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from "../../../redux/profileReducer";
import { MyPost } from "./MyPost";

export const MyPostContainer = (props) => {
  let state = props.store.getState().profilePage;
  const addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  const onPostChange = (text) => {
    let action = updateNewPostTextActionCreator(text);
    props.store.dispatch(action);
  };
  return (
    <MyPost
      updateNewPostText={onPostChange}
      addPost={addPost}
      posts={state.posts}
      newPostText={state.newPostText}
    />
  );
};
