import React from "react";

const Header = ({ user }) => {
	return (
		<header className="header chat__header">
			<div className="chat__avatar-wrapper">
				<img src={user.profile_picture} alt={user?.name} className="avatar" />
			</div>

			<div className="chat__contact-wrapper">
				<h2 className="chat__contact-name"> {user?.name}</h2>
			</div>
		</header>
	);
};

export default Header;
