import { GetChat, GetNickName, GetPhoto } from '../../data/users';
import ContactItem from './ContactItem'
import React from "react";

function ContactsListResault({user, toShow, setDisplayedContact}){
    const contactsListDisp = toShow.map((contact, key) =>{
        const nickName = GetNickName(contact);
        const photo = GetPhoto(contact);
        let chat =  GetChat(user, contact);
        let lastMessage;
        if (chat.length === 0)
            lastMessage = {time: '', content: '', type: 'text'};
        else
            lastMessage = chat[chat.length - 1];
        let content;
        if (lastMessage.type === 'text')
            content = lastMessage.content;
        else
            content = lastMessage.type;
        return <ContactItem 
            id={contact}
            name={nickName} 
            time={lastMessage.time} 
            lastMessage={content} 
            photo={photo}
            setDisplayedContact={setDisplayedContact} 
            key={key} />}
    );

    return(
        <div className='contacts_list'> {contactsListDisp} </div>
    );
}

export default ContactsListResault;