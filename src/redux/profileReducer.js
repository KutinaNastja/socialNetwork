const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
  posts: [
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
  ],
  newPostText: "New Post",
  profile: null,
};

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 10,
        author: "https://cdn1.intermedia.ru/img/news_x400/363527.jpg",
      };
      return { ...state, posts: [...state.posts, newPost], newPostText: "" };
    }
    case UPDATE_NEW_POST_TEXT: {
      return { ...state, newPostText: action.newText };
    }
    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }
    default:
      return state;
  }
};

export const addPost = () => ({ type: ADD_POST });
export const updateNewPostText = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
});
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
