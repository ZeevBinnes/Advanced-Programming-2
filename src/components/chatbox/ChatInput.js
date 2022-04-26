import React, { useEffect, useRef, useState } from "react";
import Icon from "./Icon";

const attachButtons = [
	{ icon: "attachRooms", label: "Choose room" },
	//{ icon: "attachContacts", label: "Choose contact" },
	{ icon: "attachDocument", label: "Choose document" },
	//{ icon: "attachCamera", label: "Use camera" },
	{ icon: "attachImage", label: "Choose image" },
];

function ChatInput({submitNewMessage}) {
	
	const [fileUploaded, setFileUploaded] = useState(null);	
	const [showAttach, setShowAttach] = useState(false);
	const [newMessage, setNewMessage] = useState("");
	const [messageType, setMessageType] = useState("text")

	const [media, setMedia] = useState();
	useEffect( ()=>{
		if (media) {
			const reader = new FileReader();
			reader.onloadend = ()=>{
				setFileUploaded(reader.result);
			}
			reader.readAsDataURL(media);
		}
	},[media]);
	
	// for pressing on icons for upload
	const fileInputRef = useRef();
	
	const detectEnterPress = (e) => {
		if (e.key === "Enter" || e.keyCode === 13) {
			e.preventDefault();
			if (messageType == 'text') {
				submitNewMessage(messageType, newMessage);
				setNewMessage('');
			} else {
				submitNewMessage(messageType, fileUploaded);
			}
		}
	};
    
	const pressSubmit = () => {
		if (messageType == 'text') {
			submitNewMessage(messageType, newMessage);
			setNewMessage('');
		} else if (fileUploaded != null) {
			submitNewMessage(messageType, fileUploaded, media.name);
			setFileUploaded(null);
		}
	}

	const determineMessageType = (key) => {
		if (key == 'attachBtn')
			setMessageType('text');
		if (key == 'Choose image')
			setMessageType('image');
		else if (key == 'Choose document')
			setMessageType('file');
		else if (key == 'Choose room')
			setMessageType('video')
	}

	return (
		<div className="chat__input-wrapper">
			<div className="pos-rel">
				<button className="btn btn-default" aria-label="Attach" 
					onClick={() => {
						setShowAttach(!showAttach);
						determineMessageType('attachBtn')}}>
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
                        <div>
						<button
							className="btn btn-default chat__attach-btn form-control"
							type="file"
							aria-label={btn.label}
							key={btn.label}
							onClick={function(e){
								e.preventDefault();
								determineMessageType(btn.label);
								fileInputRef.current.click();
							}}
						>
							<Icon id={btn.icon} className="chat__attach-icon" />
						</button>
						<input 
							type="file" 
							style={{display: "none"}} 
							ref={fileInputRef}
							onChange={(e) => {
								const file = e.target.files[0];
								if (file){
									setMedia(file);
								} else
									setMedia(null);
							}}
							 />
                        </div>
					))}
				</div>
			</div>
			<input
                className="chat__input"
                placeholder="Type a message"
                value={(messageType == 'text') ? newMessage : "UPLOAD MEDIA..."}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={detectEnterPress}
				disabled={(messageType == 'text') ? false : true}
            />
			{newMessage || (messageType != 'text') ? (
				<button aria-label="Send message" onClick={pressSubmit} className="btn btn-default">
					<Icon id="send" className="chat__input-icon" />
				</button>
			) : (
				<button aria-label="Record voice note" className="btn btn-default">
					<Icon id="microphone" className="chat__input-icon" />
				</button>
			)}
		</div>
	);
};

export default ChatInput;
