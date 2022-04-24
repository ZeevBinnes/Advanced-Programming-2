import ContactsListResault from './ContactsListResault';
import SearchContacts from './SearchContacts';
import AddContact from './AddContact';
import { useState } from 'react';
import { GetContacts, GetNickName, GetPhoto } from '../../data/users';
import "./contacts.css"


function ContactsBar({user, setDisplayedContact}) {

    //var contacts = GetContacts(user);
    const [contacts, SetContacts] = useState(GetContacts(user));
    const [contactsToShow, setContactsToShow] = useState(GetContacts(user));

    const doSearch = function(q){
        setContactsToShow(contacts.filter((contact) => GetNickName(contact).includes(q)));
    }

    return(
        <aside className="sidebar col-4 limit_column_height">
            <div className="user_bar">
                <img src={GetPhoto(user)} className="proph_imgs"></img>
                <div className="chat__contact-wrapper">
					<h2 className="chat__contact-name"> {GetNickName(user)} </h2>
				</div>
                <AddContact user={user} contacts={contacts} setContacts={SetContacts} setContactsToShow={setContactsToShow} />
            </div>
            <SearchContacts doSearch={doSearch} />
            <ContactsListResault toShow={contactsToShow} user={user} setDisplayedContact={setDisplayedContact} />
        </aside>
    )
}

export default ContactsBar;