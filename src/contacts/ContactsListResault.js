import { GetChat, GetNickName, GetPhoto } from '../data/users';
import ContactItem from './ContactItem'
import { GetUser } from '../data/users';

function ContactsListResault({param}){
    var user = param[0];
    var toShow = param[1];
    const contactsListDisp = toShow.map((contact, key) =>{
        var nickName = GetNickName(contact);
        var photo = GetPhoto(contact)
        let chat =  GetChat(user, contact);
        var lastMessage = chat[chat.length - 1];
        return <ContactItem 
            id={nickName} 
            time={lastMessage.time} 
            lastMessage={lastMessage.content} 
            photo={photo} 
            key={key} />}
    );

    return(
        <div> {contactsListDisp} </div>
    );
}

export default ContactsListResault;