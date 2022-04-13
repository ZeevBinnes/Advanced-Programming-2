import React from 'react';
import "./ChatBox.css";
import { useState } from 'react';
import { GetContacts, GetNickName, GetPhoto } from '../data/users';
import ContactBar from './ContactBar';

function ChatBox(contact) {

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
                <img src='/lake.jpg' className="proph_imgs"></img>
                <div className="chat_header_text">
                    <h3>contact name</h3>
                </div>
    
            </div>
            <div className="chat_body">
                <p className={'chat_message ${true && "chat_message_outgoing"}'}>
                    messege
                    <span className='chat_time'>
                        13:09
                    </span>
                </p>
                
            </div> 
            <div className="chat_bar">
                <button></button>
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