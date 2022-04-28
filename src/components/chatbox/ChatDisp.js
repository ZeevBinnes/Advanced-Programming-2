import React from "react";
import { GetChat } from "../../data/users";
import formatTime from "./formatTime";

function ChatDisp ({user, contact}) {
    const chat = GetChat(user, contact);

    const chat_disp = chat.map((message, key) => {
        const content = message.content;
        if (message.type === 'text'){
            return (
                <div className="chat__msg-group" key={key}>
                    <p className={`chat__msg ${message.sender ? "chat__msg--rxd" : "chat__msg--sent"}`}>
                        <span className="mes">{content}</span>
                        <span className="chat__msg-filler"> </span>
                        <span className="chat__msg-footer">
                            {formatTime(message.time)}
                        </span>
                    </p>
                </div>
            )
        } else if (message.type === 'Image') {
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
        } else if (message.type === 'Video') {
            return (
                <div className="chat__msg-group" key={key}>
                    <div className={`chat__msg chat__img-wrapper ${message.sender ? "chat__msg--rxd" : "chat__msg--sent"}`}>
                        <video src={message.content} className="chat__img" controls />
                        <span className="chat__msg-footer">
                            {formatTime(message.time)}
                        </span>
                    </div>
                </div>
            )
        } else if (message.type === 'File') {
            return (
                <div className="chat__msg-group" key={key}>
                    <div className={`chat__msg ${message.sender ? "chat__msg--rxd" : "chat__msg--sent"}`}>
                        {/*<iframe src={message.content} width="800px" height="2100px" />*/}
                        <div>
                            <a href={message.content} download={message.fileName} id='fileDownload'>
                                <button type="button" className="btn btn-primary bi bi-file-earmark-arrow-down"></button>
                            </a>
                            {" "+message.fileName}
                        </div>
                        <span className="chat__msg-filler"> </span>
                        <span className="chat__msg-footer">
                            {formatTime(message.time)}
                        </span>
                    </div>
                </div>
            )
        } else if (message.type === 'Audio') {
            return (
            <div className="chat__msg-group" key={key}>
            <div className={`chat__msg ${message.sender ? "chat__msg--rxd" : "chat__msg--sent"}`}>
                <audio controls src={message.content} />
                <span className="chat__msg-filler"> </span>
                <span className="chat__msg-footer">
                    {formatTime(message.time)}
                </span>
            </div>
        </div>)
        } else {
            return("")
        }
    }
    
    );
    return(chat_disp);
}

export default ChatDisp;
