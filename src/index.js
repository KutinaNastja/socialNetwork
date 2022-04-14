import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App/App";
import reportWebVitals from "./reportWebVitals";
import { state } from "./redux/state";


function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log("rendered");
  });

  return <App  state={state}/>
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<AppWithCallbackAfterRender />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

