//import alt from '../../data/blank_contact.jpg'

import React from 'react'
function ContactItem({id, name, time, lastMessage, photo, setDisplayedContact}) {

    const clickedContact = function(){
        setDisplayedContact(id);
    }

    return(
        <li className="chat_list_item list-group-item d-flex justify-content-between align-items-center container-fluid"
            onClick={clickedContact}>
            <img src={photo} alt={" "} className="proph_imgs"></img>
            <div className="contacts_content">
                <div className="contacts_spaces">
                    <span className="fs-5 name_in_chat_list col-sm-10">{name}</span>
                    <span className="hour_and_time col-sm-2">{time}</span>
                </div>
                <span className="contacts_spaces message_preview"
                    title={lastMessage}>{lastMessage}</span>
            </div>
        </li>
    );
}
export default ContactItem;