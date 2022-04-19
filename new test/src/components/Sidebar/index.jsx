import React from "react";
import { useState } from 'react';
import "./styles/main.css";
import avatar from "assets/images/profile-picture-girl-1.jpeg";
import Icon from "components/Icon";
import Contact from "./Contact";
import { GetContacts, GetNickName, GetPhoto } from 'data/users';

import { useUsersContext } from "context/usersContext";



const Sidebar = ({user, setDisplayedContact}) => {
	const { users: contacts } = useUsersContext();
	const [contacts_list, SetContacts] = useState(GetContacts(user));
	const [contactsToShow, setContactsToShow] = useState(GetContacts(user));

	const doSearch = function(q){
		setContactsToShow(contacts.filter((contact) => GetNickName(contact).includes(q)));
	}
	return (
		<aside className="sidebar">
			<header className="header">
				<div className="sidebar__avatar-wrapper">
					<img src={GetPhoto(user)} alt="Karen Okonkwo" className="avatar" />
				</div>
				<div className="chat__contact-wrapper">
					<h2 className="chat__contact-name"> {GetNickName(user)}</h2>
				</div>
				<div className="sidebar__actions">
					<button className="sidebar__action" aria-label="New chat">
						<Icon id="chat" className="sidebar__action-icon" />
					</button>
				</div>
			</header>
			<div className="search-wrapper">
				<div className="search-icons">
					<Icon id="search" className="search-icon" />
					<button className="search__back-btn">
						<Icon id="back" />
					</button>
				</div>
				<input className="search" placeholder="Search or start a new chat" />
			</div>
			<div className="sidebar__contacts">
				{contacts.map((contact, index) => (
					<Contact key={index} contact={contact} />
				))}
			</div>
		</aside>
	);
};

export default Sidebar;
