import React from "react";
import "./ChatBox.css";
import { GetNickName, GetPhoto, SendMessage } from '../../data/users';
import ChatDisp from "./ChatDisp";
import { formatDateTime } from "../formatDateTime";
import ChatInput from "./ChatInput";
import alt from '../../data/blank_contact.jpg'

function ChatBox({contact, user, did_data_change, set_did_data_change}) {

    const submitNewMessage = (message_type, input, fileName) => {
        const currentTime = formatDateTime(new Date());
        SendMessage(user, contact, currentTime, message_type, input, fileName);
        set_did_data_change(!did_data_change);
    }
        
    if (contact == null) {
        return (
            <div className="chatbox">
                <div className="fill"></div>
            </div>
        )

    } else {
        return (
            <div className="chatbox col-8 limit_column_height">
                <div className="chat_header">
                    <img src={GetPhoto(contact)} alt={alt} className="cont_imgs"></img>
                    <div className="chat_header_text">
                        <h2>{GetNickName(contact)}</h2>
                    </div>
                </div>
                <div className="chat_body chat__content">
                    <ChatDisp user={user} contact={contact} />
                </div>
                    <ChatInput submitNewMessage={submitNewMessage} />
            </div>
        );
    }
}

export default ChatBox;