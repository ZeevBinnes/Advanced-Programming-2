import React from "react";
import { GetChat } from "../data/users";
import formatTime from "./formatTime";

function ChatDispA ({user, contact}) {
    const chat = GetChat(user, contact);

    const chat_disp = chat.map((message, key) => {
        var content = message.content;
        return(
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
    }
    
    );
    return(chat_disp);
};

export default ChatDispA;
