import { useState } from 'react';
import ContactsBar from './contacts/ContactsBar';
import { GetNickName } from './data/users';

function User_app({user}) {
    // add here a use State (maybe with ref) for updating user.

    // this useState updates the contact that should be showd in the chat box
    const [displayedContact, setDisplayedContact] = useState('');

    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <ContactsBar user={user} setDisplayedContact={setDisplayedContact} />
                    <div className="col-8 chat-box position-relative">
                        {GetNickName(displayedContact)}
                        <div className='position-absolute bottom-0 start-0'>
                            <form className="d-flex">
                                <i className="bi bi-paperclip" id='add_file'></i>
                                <input className="form-control me-2" type="Type-message" placeholder="Type message here" aria-label="Type-message"></input>
                                <button className="btn btn-outline-success" type="submit">Send</button>
                            </form>
                        </div>
                        <div className='col-sm-12 chat-box'>
                            chat box here
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default User_app;