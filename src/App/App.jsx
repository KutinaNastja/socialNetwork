import React from "react";
import s from "./App.module.css";
import Profile from "../components/Profile/Profile";
import Header from "../components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { DialogsContainer } from "../components/Dialogs/DialogsContainer";
import { NavbarContainer } from "../components/Navbar/NavbarContainer";
import UsersContainer from "../components/Users/UsersContainer";

const App = () => {
  return (
    <div className={s.appWrapper}>
      <Header />
      <div className={s.item}>
        <NavbarContainer />
        <div className={s.content}>
          <Routes>
            <Route path="/profile" element={<Profile />} />

            <Route path="/dialogs" element={<DialogsContainer />} />

            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
