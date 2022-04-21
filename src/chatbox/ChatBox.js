import React, { useEffect, useRef, useState } from "react";
import $ from'jquery';
import "./ChatBox.css";
import { GetContacts, GetNickName, GetPhoto, GetChat, SendTextMessage } from '../data/users';
import ChatDisp from './ChatDisp';
import ChatDispA from "./ChatDispA";
import { formatDateTime } from "../formatDateTime";
import SendImage from "./SendImage";

function ChatBox({contact, user, did_data_change, set_did_data_change}) {

    var message_type = 'text';

    const lastMsgRef = useRef(null);

    const [input, setInput] = useState("")
    const sendMessage = (e) => {
        e.preventDefault();
        var currentTime = formatDateTime(new Date());
        console.log(currentTime)
        SendTextMessage(user, contact, currentTime, input);
        setInput("");
        set_did_data_change(!did_data_change);
    }

    const setType = function(type){
        message_type = type;
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
                <div className="chat_bar">
                    {/*<div className="btn-group dropup">
                        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bi bi-paperclip" id='add_file'></i>
                            <span className="caret"></span>
                            <span className="sr-only">Attach</span>
                        </button>
                        <ul className="dropdown-menu">
                            <li><i className="bi bi-camera-fill"></i></li>
                            <li><i className="bi bi-camera-video"></i></li>
                            <li><i className="bi bi-file-earmark-text"></i></li>
                        </ul>
                    </div>*/}
                    <div className="btn-group dropup">
                        <button type="button" className="btn btn-default dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="bi bi-paperclip" id='add_file'></i>
                        </button>
                        <ul className="dropdown-menu">
                           <SendImage setType={setType} setContent={setInput} />
                           <button><i className="bi bi-camera-video"></i></button>
                           <button><i className="bi bi-file-earmark-text"></i></button>
                        </ul>
                    </div>
                    <i className="bi bi-mic"></i>
                    <form>
                        <input value={input} onChange={e => setInput(e.target.value)} placeholder='Type a messege'
                            type="text" />
                        <button onClick={sendMessage}
                            type="submit">Send</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default ChatBox;