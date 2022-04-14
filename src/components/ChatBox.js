import React, { useEffect, useRef, useState } from "react";
import $ from'jquery';
import "./ChatBox.css";
import { GetContacts, GetNickName, GetPhoto, GetChat } from '../data/users';
import ChatDisp from './ChatDisp';

function ChatBox({contact} ,{user}) {

    const lastMsgRef = useRef(null);

    const [input, setInput] = useState("")
    const sendMessage = (e) => {
        e.preventDefault();
        console.log('You typed >>>>', input)
        setInput("");
    }
        
        
    if (contact == null) {
        return (
            <div className="chatbox">
            </div>
        )

    } else {
        return (
            <div className="chatbox">
                <div className="chat_header">
                    <img src={GetPhoto(contact)} className="proph_imgs"></img>
                    <div className="chat_header_text">
                        <h3>{GetNickName(contact)}</h3>
                    </div>

                </div>
                <div className="chat_body">
                { 
                    <p className='chat_message ${true && "chat_message_outgoing"}'>
                        messege
                        <span className='chat_time'>
                            13:09
                        </span>
                    </p>
                }
                </div>
                <div className="chat_bar">
                    <div class="btn-group dropup">
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span class="caret"></span>
                            <span class="sr-only">Attach</span>
                        </button>
                        <ul class="dropdown-menu">
                            
                        </ul>
                    </div>
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