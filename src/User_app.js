import { useState } from 'react';
import ContactsBar from './contacts/ContactsBar';
import { GetNickName } from './data/users';
import ChatBox from './components/ChatBox'

function User_app({user}) {
    // add here a use State (maybe with ref) for updating user.

    // this useState updates the contact that should be showd in the chat box
    const [displayedContact, setDisplayedContact] = useState(null);

    return (
        <div className="user_app">
                <ContactsBar user={user} setDisplayedContact={setDisplayedContact} />
                <ChatBox contact={displayedContact} user={user}/>
        </div>
    );
}

export default User_app;