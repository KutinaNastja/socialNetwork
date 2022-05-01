import { connect } from "react-redux";
import {
  addPost,
  updateNewPostText,
} from "../../../redux/profileReducer";
import { MyPost } from "./MyPost";

const mapStateToProps = (state) => {
  return {
    newPostText: state.profilePage.newPostText,
    posts: state.profilePage.posts,
  };
};

export const MyPostContainer = connect(mapStateToProps, {
  addPost,
  updateNewPostText,
})(MyPost);
