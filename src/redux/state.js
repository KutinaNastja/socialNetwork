let renderEntireTree = () => {
  console.log("State Changed");
};

export const state = {
  profilePage: {
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
  },
  dialogsPage: {
    ppl: [
      {
        id: 1,
        name: "Tom",
        img: "https://v1.popcornnews.ru/k2/news/canvas/1200/upload/news/163495587791.jpg",
      },
      {
        id: 4,
        name: "Saoirse",
        img: "https://m.buro247.ua/images/2018/09/saoirse-ronan-beauty-secrets-2.jpg",
      },
      {
        id: 2,
        name: "Timothée",
        img: "https://i.pinimg.com/550x/4e/ff/93/4eff9351091a6fe866b0752d3966e691.jpg",
      },
      {
        id: 5,
        name: "Sydney",
        img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1351772229.jpg?crop=0.668xw:1.00xh;0.207xw,0&resize=640:*",
      },
      {
        id: 3,
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
  },
};
export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 10,
    author: "https://cdn1.intermedia.ru/img/news_x400/363527.jpg",
  };
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = "";
  renderEntireTree(state);
};
export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;

  renderEntireTree(state);
};
export let addMyMessage = () => {
  let newMessage = {
    id: 4,
    messages: state.dialogsPage.newMessageText,
    img: "https://cdn1.intermedia.ru/img/news_x400/363527.jpg",
  };
  state.dialogsPage.chat.push(newMessage);
  state.dialogsPage.newMessageText = "";
  renderEntireTree(state);
};
export let updateNewMessageText = (newText) => {
  state.dialogsPage.newMessageText = newText;

  renderEntireTree(state);
};

export const subscribe = (observer) => {
  renderEntireTree = observer;
};
