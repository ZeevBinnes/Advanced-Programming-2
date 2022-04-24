import React, { useEffect, useRef, useState } from "react";
//import $ from'jquery';
import "./ChatBox.css";
import { GetContacts, GetNickName, GetPhoto, GetChat, SendMessage } from '../../data/users';
//import ChatDisp from './ChatDisp';
import ChatDispA from "./ChatDispA";
import { formatDateTime } from "../formatDateTime";
import ChatInput from "./ChatInput";

function ChatBox({contact, user, did_data_change, set_did_data_change}) {

//    const [showAttach, setShowAttach] = useState(false);
//	const [newMessage, setNewMessage] = useState("");
//    const submitNewMessage_o = () => {
	//	addNewMessage(user.id, newMessage);
//		setNewMessage("");
	//	scrollToLastMsg();
//	};

    var message_type = 'text';

//    const lastMsgRef = useRef(null);

    const submitNewMessage = (message_type, input) => {
        var currentTime = formatDateTime(new Date());
        SendMessage(user, contact, currentTime, message_type, input);
        set_did_data_change(!did_data_change);
    }
        
    if (contact == null) {
        return (
            <div className="chatbox">
            </div>
        )

    } else {
        return (
            <div className="chatbox col-8 limit_column_height">
                <div className="chat_header">
                    <img src={GetPhoto(contact)} className="cont_imgs"></img>
                    <div className="chat_header_text">
                        <h2>{GetNickName(contact)}</h2>
                    </div>
                </div>
                <div className="chat_body chat__content">
                    <ChatDispA user={user} contact={contact} />
                </div>
                    <ChatInput submitNewMessage={submitNewMessage} />
            </div>
        );
    }
}

export default ChatBox;