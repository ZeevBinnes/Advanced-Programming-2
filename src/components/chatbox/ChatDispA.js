import React from "react";
import { GetChat } from "../../data/users";
import formatTime from "./formatTime";

function ChatDispA ({user, contact}) {
    const chat = GetChat(user, contact);

    const chat_disp = chat.map((message, key) => {
        var content = message.content;
        if (message.type == 'text'){
            return (
                <div className="chat__msg-group" key={key}>
                    <p className={`chat__msg ${message.sender ? "chat__msg--rxd" : "chat__msg--sent"}`}>
                        <span>{content}</span>
                        <span className="chat__msg-filler"> </span>
                        <span className="chat__msg-footer">
                            {formatTime(message.time)}
                        </span>
                    </p>
                </div>
            )
        } else if (message.type == 'image') {
            return (
                <div className="chat__msg-group" key={key}>
                    <div className={`chat__msg chat__img-wrapper ${message.sender ? "chat__msg--rxd" : "chat__msg--sent"}`}>
                        <img src={message.content} alt="" className="chat__img" />
                        <span className="chat__msg-footer">
                            {formatTime(message.time)}
                        </span>
                    </div>
                </div>
            )
        } else if (message.type == 'video') {
            return (
                <div className="chat__msg-group" key={key}>
                    <div className={`chat__msg chat__img-wrapper ${message.sender ? "chat__msg--rxd" : "chat__msg--sent"}`}>
                        <video src={message.content} alt="" className="chat__img" controls />
                        <span className="chat__msg-footer">
                            {formatTime(message.time)}
                        </span>
                    </div>
                </div>
            )
        } else if (message.type == 'file') {
            return (
                <div className="chat__msg-group" key={key}>
                    <div className={`chat__msg chat__img-wrapper ${message.sender ? "chat__msg--rxd" : "chat__msg--sent"}`}>
                    <iframe src={message.content} width="800px" height="2100px" />
                        <span className="chat__msg-footer">
                            {formatTime(message.time)}
                        </span>
                    </div>
                </div>
            )
        } else if (message.type == 'audio') {
            return (<div></div>) /* (
                <div className="chat__msg-group" key={key}>
                    <div className={`chat__msg chat__img-wrapper ${message.sender ? "chat__msg--rxd" : "chat__msg--sent"}`}>
                    <iframe src={message.content} width="800px" height="2100px" />
                        <span className="chat__msg-footer">
                            {formatTime(message.time)}
                        </span>
                    </div>
                </div>
            )*/
        }
    }
    
    );
    return(chat_disp);
};

export default ChatDispA;