import { createContext, useContext, useEffect, useState } from "react";
import contacts from "data/contacts";

const UsersContext = createContext();

const useUsersContext = () => useContext(UsersContext);

const UsersProvider = ({ children }) => {

	const [users, setUsers] = useState(contacts);

	const _updateUserProp = (userId, prop, value) => {
		setUsers((users) => {
			const usersCopy = [...users];
			let userIndex = users.findIndex((user) => user.id === userId);
			const userObject = usersCopy[userIndex];
			usersCopy[userIndex] = { ...userObject, [prop]: value };
			return usersCopy;
		});
	};


	const setUserAsUnread = (userId) => {
		_updateUserProp(userId, "unread", 0);
	};

	const addNewMessage = (userId, message, type) => {
		let userIndex = users.findIndex((user) => user.id === userId);
		const usersCopy = [...users];
		const newMsgObject = {
			type: type,
			content: message,
			sender: null,
			time: new Date().toLocaleTimeString(),
			status: "delivered",
		};

		usersCopy[userIndex].messages.TODAY.push(newMsgObject);
		setUsers(usersCopy);

	};

	return (
		<UsersContext.Provider value={{ users, setUserAsUnread, addNewMessage }}>
			{children}
		</UsersContext.Provider>
	);
};

export { useUsersContext, UsersProvider };
