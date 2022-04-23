import React from "react";
import s from "./App.module.css";
import Profile from "../components/Profile/Profile";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Dialogs from "../components/Dialogs/Dialogs";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className={s.appWrapper}>
        <Header />
        <div className={s.item}>
          <Navbar state={props.state.dialogsPage} />
          <div className={s.content}>
            <Routes>
              <Route
                path="/profile"
                element={<Profile store={props.store} />}
              />

              <Route
                path="/dialogs"
                element={
                  <Dialogs
                    state={props.state.dialogsPage}
                    store={props.store}
                  />
                }
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
