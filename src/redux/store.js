// import { dialogsReducer } from "./dialogsReducer";
// import { profileReducer } from "./profileReducer";

// export let store = {
//   _state: {
//     profilePage: {
//       posts: [
//         {
//           id: 1,
//           message: "Hey, why nobody love me?",
//           likesCount: 5,
//           author:
//             "https://v1.popcornnews.ru/k2/news/canvas/1200/upload/news/163495587791.jpg",
//         },
//         {
//           id: 1,
//           message: "it's our new program! Hey!",
//           likesCount: 4,
//           author:
//             "https://i.pinimg.com/550x/4e/ff/93/4eff9351091a6fe866b0752d3966e691.jpg",
//         },
//       ],
//       newPostText: "New Post",
//     },
//     dialogsPage: {
//       ppl: [
//         {
//           id: 1,
//           name: "Tom",
//           img: "https://v1.popcornnews.ru/k2/news/canvas/1200/upload/news/163495587791.jpg",
//         },
//         {
//           id: 4,
//           name: "Saoirse",
//           img: "https://m.buro247.ua/images/2018/09/saoirse-ronan-beauty-secrets-2.jpg",
//         },
//         {
//           id: 2,
//           name: "Timothée",
//           img: "https://i.pinimg.com/550x/4e/ff/93/4eff9351091a6fe866b0752d3966e691.jpg",
//         },
//         {
//           id: 5,
//           name: "Sydney",
//           img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-1351772229.jpg?crop=0.668xw:1.00xh;0.207xw,0&resize=640:*",
//         },
//         {
//           id: 3,
//           name: "Jacob",
//           img: "https://www.famousbirthdays.com/headshots/jacob-elordi-2.jpg",
//         },
//       ],
//       chat: [
//         {
//           id: 1,
//           messages: "Hi!",
//           img: "https://v1.popcornnews.ru/k2/news/canvas/1200/upload/news/163495587791.jpg",
//         },
//         {
//           id: 2,
//           messages: "How are you?",
//           img: "https://cdn1.intermedia.ru/img/news_x400/363527.jpg",
//         },
//         {
//           id: 3,
//           messages: "Hello!",
//           img: "https://i.pinimg.com/550x/4e/ff/93/4eff9351091a6fe866b0752d3966e691.jpg",
//         },
//       ],
//       newMessageText: "New Message",
//     },
//   },
//   _callSubscriber() {
//     console.log("this Changed");
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },
//   getState() {
//     return this._state;
//   },

//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
//     this._callSubscriber(this._state);
//   },
// };
