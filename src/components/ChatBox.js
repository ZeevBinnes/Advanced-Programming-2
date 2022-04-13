import React from 'react';
import "./ChatBox.css";
import { useState } from 'react';
import { GetContacts, GetNickName, GetPhoto } from '../data/users';
import ContactBar from './ContactBar';

function ChatBox(contact) {

    if (contact == null) {
        return (
            <div className="chatbox">
            </div>
        )

    } else {
        return (
        <div className="chatbox">
            <div className="chat_header">
                <ContactBar contact={contact}/>
                {/*
                <img src={'lake.jpg'} className="proph_imgs"></img>
                <span className="ms-3"><h4>my name is</h4></span>
                */}
            </div>
            <div className="chat_body">
                

            </div> 
            <div className="chat_bar">
            </div>
        </div>
        );
    }
}

export default ChatBox;