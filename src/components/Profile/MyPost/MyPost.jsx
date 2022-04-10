import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

// let posts = [
//   {
//     message: "Hey, why nobody love me?",
//     author:
//       "https://v1.popcornnews.ru/k2/news/canvas/1200/upload/news/163495587791.jpg",
//   },
//   {
//     message: "it's our new program! Hey!",
//     author:
//       "https://i.pinimg.com/550x/4e/ff/93/4eff9351091a6fe866b0752d3966e691.jpg",
//   },
// ];

const MyPost = () => {
  return (
    <div>
      <div className={s.MyPost}>
        <span>My posts</span>
        <textarea defaultValue="your news"></textarea> 
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post message="Hey, why nobody love me?" likesCount=" 5" />
        <Post message="it's our new program! Hey!" likesCount=" 4" />
      </div>
    </div>
  );
};
export default MyPost;
