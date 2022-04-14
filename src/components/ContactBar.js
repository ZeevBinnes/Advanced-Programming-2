import ContactsListResault from '../contacts/ContactsListResault';
import { useState } from 'react';
import { GetContacts, GetNickName, GetPhoto } from '../data/users';

function ContactsBar({contact, setDisplayedContact}) {

    const [contactsToShow, setContactsToShow] = useState(GetContacts(contact));


    return(
        <div className="contact_bar">
            <div className="head-bar list-group-item d-flex justify-content-between align-items-center">
                <img src={GetPhoto(contact)} className="proph_imgs"></img>
                <div className="chat__contact-wrapper">
					<h5 className="chat__contact-name"> {GetNickName(contact)}</h5>
				</div>
            </div>
        </div>
    )
}
export default ContactsBar;