import { addPost, deletePost, profileReducer } from "./profileReducer";

let state = {
  posts: [
    {
      id: 1,
      message: "Hey, why nobody love me?",
      likesCount: 5,
      author:
        "https://v1.popcornnews.ru/k2/news/canvas/1200/upload/news/163495587791.jpg",
    },
    {
      id: 2,
      message: "it's our new program! Hey!",
      likesCount: 4,
      author:
        "https://i.pinimg.com/550x/4e/ff/93/4eff9351091a6fe866b0752d3966e691.jpg",
    },
  ],
};

it("length of posts should be incremented", () => {
  // 1. test data
  let action = addPost("New Post");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

it("message of  new posts should be correct", () => {
  // 1. test data
  let action = addPost("New Post");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[2].message).toBe("New Post");
});

it("after deleting length of message should be decrement", () => {
  // 1. test data
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(1);
});

it("after deleting length shouldn't be decrement if id is incorrect", () => {
  // 1. test data
  let action = deletePost(1000);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(2);
});
