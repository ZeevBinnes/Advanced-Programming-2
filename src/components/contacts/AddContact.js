// noinspection JSPrimitiveTypeWrapperUsage

import { useRef } from "react";
import { AddContactToUser, FindUser, GetContacts } from "../../data/users"

function AddContact({user, contacts, setContacts, setContactsToShow}) {
    

    const addContactLogic = function (e) {
        e.preventDefault();
        const newContact = addBox.current.value;
        addBox.current.value = '';
        if (contacts.includes(newContact) || user == newContact){
            alert('you added this contact already')
            return;
        }
        if (FindUser(newContact)) {
            AddContactToUser(user, newContact);
        //    contacts.push(newContact);
            setContacts(GetContacts(user));
            setContactsToShow(GetContacts(user))
        } else {
            if (newContact != ''){
                alert('no such user')
            }
        }
    }

    const addBox = useRef('');


    return(
        <div>
            <button type="submit" className="bi bi-person-plus rounded-pill" id="add_contact" data-bs-toggle="modal" data-bs-target="#exampleModal">
            </button>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Add New Contact</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="d-flex" >
                                <input ref={addBox} onClick={addContactLogic} className="form-control me-2" type="Type-message" placeholder="Write contact's username here" aria-label="Type-message"></input>
                            </form>
                        </div>
                        <div className="modal-footer">
                            {/*<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
                            <button type="button" onClick={addContactLogic} className="btn btn-primary" data-bs-dismiss="modal">Add Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddContact;