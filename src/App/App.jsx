import React from "react";
import s from "./App.module.css";
import Profile from "../components/Profile/Profile";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import { DialogsContainer } from "../components/Dialogs/DialogsContainer";

const App = () => {
  return (
    <div className={s.appWrapper}>
      <Header />
      <div className={s.item}>
        {/* <Navbar /> */}
        <div className={s.content}>
          <Routes>
            <Route path="/profile" element={<Profile />} />

            <Route path="/dialogs" element={<DialogsContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
