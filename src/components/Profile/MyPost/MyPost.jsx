import React from "react";
import { reduxForm } from "redux-form";
import { Field } from "redux-form";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import { Input } from "../../common/FormsControls/FormsControls";
import s from "./MyPost.module.css";
import Posts from "./Post/Post";

const maxLength10 = maxLengthCreator(10);

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
          placeholder={"My posts"}
          name="post"
          component={Input}
          validate={[required, maxLength10]}
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
