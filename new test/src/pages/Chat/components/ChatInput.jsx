import React from "react";
import Icon from "components/Icon";

const attachButtons = [
	{ icon: "attachRooms", label: "Choose video", func: () => console.log("addVideo") },
	{ icon: "attachImage", label: "Choose image", func: () => console.log("addImage")},
];

const ChatInput = ({
	showAttach,
	setShowAttach,
	newMessage,
	setNewMessage,
	submitNewMessage,
}) => {
	const detectEnterPress = (e) => {
		if (e.key === "Enter" || e.keyCode === 13) {
			submitNewMessage();
		}
	};
	return (
		<div className="chat__input-wrapper">
			<div className="pos-rel">
				<button aria-label="Attach" onClick={() => setShowAttach(!showAttach)}>
					<Icon
						id="attach"
						className={`chat__input-icon ${
							showAttach ? "chat__input-icon--pressed" : ""
						}`}
					/>
				</button>

				<div
					className={`chat__attach ${showAttach ? "chat__attach--active" : ""}`}
				>
					{attachButtons.map((btn) => (
						<button onClick={btn.func}
							className="chat__attach-btn"
							aria-label={btn.label}
							key={btn.label}
						>
							<Icon id={btn.icon} className="chat__attach-icon" />
						</button>
					))}
				</div>
			</div>
			<input
				className="chat__input"
				placeholder="Type a message"
				value={newMessage}
				onChange={(e) => setNewMessage(e.target.value)}
				onKeyDown={detectEnterPress}
			/>
			{newMessage ? (
				<button aria-label="Send message" onClick={submitNewMessage}>
					<Icon id="send" className="chat__input-icon" />
				</button>
			) : (
				<button aria-label="Record voice note" onClick={() => console.log("record")}>
					<Icon id="microphone" className="chat__input-icon" />
				</button>
			)}
		</div>
	);
};

export default ChatInput;
