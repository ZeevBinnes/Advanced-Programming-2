// noinspection JSPrimitiveTypeWrapperUsage

import React, { useRef, useState } from "react";
import { AddContactToUser, FindUser, GetContacts } from "../../data/users"

function AddContact({user, contacts, setContacts, setContactsToShow}) {
    
    const [errors, setErrors] = useState('');

    const addContactLogic = function () {
        setErrors('');
        const newContact = addBox.current.value;   
        if (contacts.includes(newContact))
            setErrors('you added this contact already')
        else if (user === newContact)
            setErrors('you can\'t add yourself as a contact')
        else if (FindUser(newContact)) {
            addBox.current.value = '';
            AddContactToUser(user, newContact);
        //    contacts.push(newContact);
            setContacts(GetContacts(user));
            setContactsToShow(GetContacts(user))
        } else {
            if (newContact !== ''){
                setErrors('no such user')
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
                                <input ref={addBox} onClick={addContactLogic} onKeyDown={(e)=>{if (e.key === "Enter") {e.preventDefault(); addContactLogic(e)}}} className="form-control me-2" type="Type-message" placeholder="Write contact's username here" aria-label="Type-message"></input>
                            </form>
                            <div className="err_alert" style={errors ? { display: "flex" } : { display: "none" }}>
                                {errors}
                            </div>
                        </div>
                        <div className="modal-footer">
                            {/*<button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>*/}
                            <button type="button" onClick={addContactLogic} className="btn btn-primary">Add Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddContact;