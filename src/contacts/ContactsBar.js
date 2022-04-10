import ContactsListResault from './ContactsListResault';
import SearchContacts from './SearchContacts';
import AddContact from './AddContact';
import { useState } from 'react';

function ContactsBar({userData}) {

    var contacts = userData.contacts;

    const [contactsToShow, setContactsToShow] = useState(contacts);

    const doSearch = function(q){
        setContactsToShow(contacts.filter((contact) => contact.id.includes(q)));
    }

    return(
        <div className="col-4 bg-light vh-100 p-0">
            <div className="head-bar list-group-item d-flex justify-content-between align-items-center">
                <img src={userData.photo} className="proph_imgs"></img>
                <span className="w-100 ms-3">{userData.id}</span>
                <AddContact />
            </div>
            <SearchContacts doSearch={doSearch} />
            <ul className="list-group">
                <ContactsListResault toShow={contactsToShow} />
            </ul>
        </div>
    )
}

export default ContactsBar;