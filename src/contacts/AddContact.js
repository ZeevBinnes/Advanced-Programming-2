import { useRef } from "react";
import { AddContactToUser, FindUser } from "../data/users";

function AddContact({user, contacts, setContacts, setContactsToShow}) {
    

    const addContactLogic = function () {
        var newContact = addBox.current.value;
        if (contacts.includes(newContact) || user == newContact){
//            console.log('includes already!')
            return;
        }
        if (FindUser(newContact)) {
            AddContactToUser(user, newContact);
            contacts.push(newContact);
            setContacts(contacts);
            setContactsToShow(contacts)
        } else {
//            console.log('no such user.....')
        }
    }

    const addBox = useRef('');

//    const checklIfEnter = e => {
//        if (e.KeyCode === 13)
//            addContactLogic();
//        return false;
//    }

    return(
        <div>
            <button type="button" className="bi bi-person-plus rounded-pill" id="add_contact" data-bs-toggle="modal" data-bs-target="#exampleModal">
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
                                <input ref={addBox} className="form-control me-2" type="Type-message" placeholder="Write contects username here" aria-label="Type-message"></input>
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