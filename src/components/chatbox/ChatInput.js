// noinspection JSCheckFunctionSignatures

import React, { useEffect, useRef, useState } from "react";
import Icon from "./Icon";
import useRecorder from "./useRecorder";
import { formatMinutes, formatSeconds } from "./formatTime";

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

	const { recorderState, ...handlers } = useRecorder({setFileUploaded});
	const { recordingMinutes, recordingSeconds, initRecording } = recorderState;
	const { startRecording, saveRecording, cancelRecording } = handlers;

	useEffect(() => {
		if (recorderState.audio){
			const rec = recorderState.audio;
			submitNewMessage("Audio", rec);
		}
	}, [recorderState.audio])

	function saveRec() {
			saveRecording();
	}


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
			if (messageType === 'text') {
				submitNewMessage(messageType, newMessage);
				setNewMessage('');
			} else {
				submitNewMessage(messageType, fileUploaded);
			}
		}
	};
    
	const pressSubmit = () => {
		if (messageType === 'text') {
			submitNewMessage(messageType, newMessage);
			setNewMessage('');
		} else if (fileUploaded != null) {
			submitNewMessage(messageType, fileUploaded, media.name);
			setFileUploaded(null);
		}
	}

	const determineMessageType = (key) => {
		if (key === 'attachBtn')
			setMessageType('text');
		if (key === 'Choose image')
			setMessageType('Image');
		else if (key === 'Choose document')
			setMessageType('File');
		else if (key === 'Choose room')
			setMessageType('Video')
	}

	return (
		initRecording ? (
			<div className="chat__input-wrapper">

				<div className="controls-container">
					<div className="recorder-display">
						<div className="recording-time">
						{initRecording && <div className="recording-indicator"></div>}
						<span>{formatMinutes(recordingMinutes)}</span>
						<span>:</span>
						<span>{formatSeconds(recordingSeconds)}</span>
						</div>
						{initRecording && (
						<div className="cancel-button-container">
							<button className="cancel-button" title="Cancel recording" onClick={cancelRecording}>
							<svg xmlns="http://www.w3.org/2000/svg" width="25" height="35" fill="currentColor" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg>
							</button>
						</div>
						)}
					</div>	
				</div>

				<button
				className="btn btn-default"
				title="Save recording"
				disabled={recordingSeconds === 0}
				onClick={saveRec}
				>
				<Icon id="send" className="chat__input-icon" size="2x" />
				</button>
			
			</div>
		  ) : (
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
                value={(messageType === 'text') ? newMessage : "Upload media"}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyDown={detectEnterPress}
				disabled={(messageType !== 'text')}
            />
			{newMessage || (messageType !== 'text') ? (
				<button aria-label="Send message" onClick={pressSubmit} className="btn btn-default">
					<Icon id="send" className="chat__input-icon" />
				</button>
			) : (<button aria-label="Record voice note" 
			onClick={startRecording} 
			className="btn btn-default">
				<Icon id="microphone" className="chat__input-icon" />
			</button>
				  )

		}
			
		</div>
		  )
	);
}

export default ChatInput;
