import { GetPhoto } from '../data/users';
import ContactItem from './ContactItem'

function ContactsListResault( {toShow} ){
    const contactsListDisp = toShow.map((contact, key) =>{
        var id = contact.id;
        var photo = GetPhoto(contact.id)
        var lastMessage = contact.chat[contact.chat.length -1];
        return <ContactItem id={id} time={lastMessage.time} lastMessage={lastMessage.content} photo={photo} key={key} />}
    );

    return(
        <div> {contactsListDisp} </div>
    );
}

export default ContactsListResault;