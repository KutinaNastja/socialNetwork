import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import s from "./MyPost.module.css";
import Posts from "./Post/Post";

export const MyPost = (props) => {
  const addNewPost = (values) => {
    props.addPost(values.post);
  };
  const newPostDate = props.posts.map((el, i) => (
    <Posts
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
        <PostReduxForm onSubmit={addNewPost} />
      </div>
      <div className={s.posts}>{newPostDate}</div>
    </div>
  );
};

const PostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          className={s.message}
          placeholder={"My posts"}
          name={"post"}
          component={"input"}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};

const PostReduxForm = reduxForm({
  form: "post",
})(PostForm);
