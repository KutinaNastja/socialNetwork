import React from "react";
import s from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { DialogsContainer } from "../components/Dialogs/DialogsContainer";
import { NavbarContainer } from "../components/Navbar/NavbarContainer";
import UsersContainer from "../components/Users/UsersContainer";
import ProfileContainer from "../components/Profile/ProfileContainer";
import HeaderContainer from "../components/Header/HeaderConrainer";
import { Login } from "../components/Login/Login";

const App = () => {
  return (
    <div className={s.appWrapper}>
      <HeaderContainer />
      <div className={s.item}>
        <NavbarContainer />
        <div className={s.content}>
          <Routes>
            <Route path="/profile" element={<ProfileContainer />} />

            <Route path="/profile/:userId" element={<ProfileContainer />} />

            <Route path="/dialogs" element={<DialogsContainer />} />

            <Route path="/users" element={<UsersContainer />} />

            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
