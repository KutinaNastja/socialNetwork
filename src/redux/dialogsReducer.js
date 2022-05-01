const ADD_MY_MESSAGE = "ADD-MY-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-POST-TEXT";

let initialState = {
  ppl: [
    {
      id: 1,
      name: "Tom",
      img: "https://v1.popcornnews.ru/k2/news/canvas/1200/upload/news/163495587791.jpg",
    },
    {
      id: 2,
      name: "Saoirse",
      img: "https://m.buro247.ua/images/2018/09/saoirse-ronan-beauty-secrets-2.jpg",
    },
    {
      id: 3,
      name: "Timothée",
      img: "https://i.pinimg.com/550x/4e/ff/93/4eff9351091a6fe866b0752d3966e691.jpg",
    },
    {
      id: 4,
      name: "Sydney",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1351772229.jpg?crop=0.668xw:1.00xh;0.207xw,0&resize=640:*",
    },
    {
      id: 5,
      name: "Jacob",
      img: "https://www.famousbirthdays.com/headshots/jacob-elordi-2.jpg",
    },
  ],
  chat: [
    {
      id: 1,
      messages: "Hi!",
      img: "https://v1.popcornnews.ru/k2/news/canvas/1200/upload/news/163495587791.jpg",
    },
    {
      id: 2,
      messages: "How are you?",
      img: "https://cdn1.intermedia.ru/img/news_x400/363527.jpg",
    },
    {
      id: 3,
      messages: "Hello!",
      img: "https://i.pinimg.com/550x/4e/ff/93/4eff9351091a6fe866b0752d3966e691.jpg",
    },
  ],
  newMessageText: "New Message",
};

export const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MY_MESSAGE: {
      let newMessage = {
        id: 4,
        messages: state.newMessageText,
        img: "https://cdn1.intermedia.ru/img/news_x400/363527.jpg",
      };
      return {
        ...state,
        chat: [...state.chat, newMessage],
        newMessageText: "",
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return { ...state, newMessageText: action.newText };
    }
    default:
      return state;
  }
};
export const addMyMessage = () => ({ type: ADD_MY_MESSAGE });
export const updateNewMessageText = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});
