import React, { useState } from 'react';
import ContactsBar from './contacts/ContactsBar';
import ChatBox from './chatbox/ChatBox'

function UserApp({user}) {

    // add here a use State (maybe with ref) for updating user.
    const [did_data_change, set_did_data_change] = useState(false);

    // this useState updates the contact that should be showd in the chat box
    const [displayedContact, setDisplayedContact] = useState(null);

    return (
        <div className="user_app">
                <ContactsBar user={user} setDisplayedContact={setDisplayedContact} />
                <ChatBox contact={displayedContact} user={user}
                    did_data_change={did_data_change} set_did_data_change={set_did_data_change} />
        </div>
    );
}

export default UserApp;