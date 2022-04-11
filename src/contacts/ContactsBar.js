import ContactsListResault from './ContactsListResault';
import SearchContacts from './SearchContacts';
import AddContact from './AddContact';
import { useState } from 'react';
import { GetContacts, GetNickName, GetPhoto } from '../data/users';

function ContactsBar({user, setDisplayedContact}) {

    var contacts = GetContacts(user);

    const [contactsToShow, setContactsToShow] = useState(GetContacts(user));

    const doSearch = function(q){
        setContactsToShow(contacts.filter((contact) => GetNickName(contact).includes(q)));
    }

    return(
        <div className="col-4 bg-light vh-100 p-0">
            <div className="head-bar list-group-item d-flex justify-content-between align-items-center">
                <img src={GetPhoto(user)} className="proph_imgs"></img>
                <span className="w-100 ms-3">{GetNickName(user)}</span>
                <AddContact />
            </div>
            <SearchContacts doSearch={doSearch} />
            <ul className="list-group">
                <ContactsListResault toShow={contactsToShow} user={user} setDisplayedContact={setDisplayedContact} />
            </ul>
        </div>
    )
}

export default ContactsBar;