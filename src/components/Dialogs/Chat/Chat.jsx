import React from "react";
import s from "./Chat.module.css";

let Chat=(props)=>{
    return <div className={s.chat}>
        <div className={s.item}>
            <img src="https://v1.popcornnews.ru/k2/news/canvas/1200/upload/news/163495587791.jpg" alt="" />
            <div>Hi! </div>
        </div>
        <div className={s.item}>
            <img src="https://cdn1.intermedia.ru/img/news_x400/363527.jpg" alt="" />
            <div>How are you?</div>
        </div>
    </div>
}
export default Chat;