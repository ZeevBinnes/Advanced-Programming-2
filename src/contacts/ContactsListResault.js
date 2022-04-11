import { GetChat, GetNickName, GetPhoto } from '../data/users';
import ContactItem from './ContactItem'
import { GetUser } from '../data/users';

function ContactsListResault({user, toShow, setDisplayedContact}){
    const contactsListDisp = toShow.map((contact, key) =>{
        var nickName = GetNickName(contact);
        var photo = GetPhoto(contact)
        let chat =  GetChat(user, contact);
        var lastMessage = chat[chat.length - 1];
        return <ContactItem 
            id={contact}
            name={nickName} 
            time={lastMessage.time} 
            lastMessage={lastMessage.content} 
            photo={photo}
            setDisplayedContact={setDisplayedContact} 
            key={key} />}
    );

    return(
        <div> {contactsListDisp} </div>
    );
}

export default ContactsListResault;