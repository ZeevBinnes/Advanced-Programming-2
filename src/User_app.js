import ContactsBar from './contacts/ContactsBar';

function User_app({user}) {
    // add here a use State (maybe with ref) for updating user.
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <ContactsBar user={user} />
                    <div className="col-8 chat-box position-relative">
                        contacts name here
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