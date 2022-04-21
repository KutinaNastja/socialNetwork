import "./index.css";
import { store } from "./redux/state";
import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

export const renderEntireTree = (state) => {
  root.render(<App state={state} dispatch={store.dispatch.bind(store)} />);
};
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

renderEntireTree(store.getState());
store.subscribe(renderEntireTree);
