import React from "react";
import s from "./App.module.css";

import Profile from "../components/Profile/Profile";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import Dialogs from "../components/Dialogs/Dialogs";
import { Route, BrowserRouter, Routes } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className={s.appWrapper}>
        <Header />
        <div className={s.item}>
          <Navbar />
          <div className={s.content}>
            <Routes>
              <Route path="/profile" element={<Profile />} />

              <Route path="/dialogs" element={<Dialogs />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
