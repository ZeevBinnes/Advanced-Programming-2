import ContactsListResault from './ContactsListResault';
import SearchContacts from './SearchContacts';
import AddContact from './AddContact';
import { useState } from 'react';
import { GetContacts, GetNickName, GetPhoto } from '../data/users';

function ContactsBar({user, setDisplayedContact}) {

    //var contacts = GetContacts(user);
    const [contacts, SetContacts] = useState(GetContacts(user));
    const [contactsToShow, setContactsToShow] = useState(GetContacts(user));

    const doSearch = function(q){
        setContactsToShow(contacts.filter((contact) => GetNickName(contact).includes(q)));
    }

    return(
        <div className="contacts_bar">
            <div className="user_bar">
                <img src={GetPhoto(user)} className="proph_imgs"></img>
                <span className="w-100 ms-3">{GetNickName(user)}</span>
                <AddContact user={user} contacts={contacts} setContacts={SetContacts} setContactsToShow={setContactsToShow} />
            </div>
            <SearchContacts doSearch={doSearch} />
            <ContactsListResault toShow={contactsToShow} user={user} setDisplayedContact={setDisplayedContact} />
        </div>
    )
}

export default ContactsBar;