import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = () => {
  let postsData = [
    {
      id: 1,
      message: "Hey, why nobody love me?",
      likesCount: 5,
      author:
        "https://v1.popcornnews.ru/k2/news/canvas/1200/upload/news/163495587791.jpg",
    },
    {
      id: 1,
      message: "it's our new program! Hey!",
      likesCount: 4,
      author:
        "https://i.pinimg.com/550x/4e/ff/93/4eff9351091a6fe866b0752d3966e691.jpg",
    },
  ];
  let newPostDate = postsData.map((el) => (
    <Post message={el.message} likesCount={el.likesCount} author={el.author} />
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
