import { GetChat, GetNickName, GetPhoto } from '../../data/users';
import ContactItem from './ContactItem'

function ContactsListResault({user, toShow, setDisplayedContact}){
    const contactsListDisp = toShow.map((contact, key) =>{
        var nickName = GetNickName(contact);
        var photo = GetPhoto(contact)
        let chat =  GetChat(user, contact);
        var lastMessage;
        if (chat.length == 0)
            lastMessage = {time: '', content: '', type: 'text'};
        else
            lastMessage = chat[chat.length - 1];
        var content;
        if (lastMessage.type == 'text')
            content = lastMessage.content;
        else
            content = "<"+lastMessage.type+"> "+lastMessage.fileName;
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
        <div className='contects_list'> {contactsListDisp} </div>
    );
}

export default ContactsListResault;