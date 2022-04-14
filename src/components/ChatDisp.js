import React from "react";
import formatTime from "./formatTime";

const ChatDisp = ({ lastMsgRef, messages: allMessages }) => {
	const dates = Object.keys(allMessages);

	return dates.map((date, dateIndex) => {
		const messages = allMessages[date];
		return (
			<div key={dateIndex}>
				<div className="chat__date-wrapper">
					<span className="chat__date"> {date}</span>
				</div>
				<div className="chat__msg-group">
					{messages.map((message, msgIndex) => {
						const assignRef = () =>
							dateIndex === dates.length - 1 && msgIndex === messages.length - 1
								? lastMsgRef
								: undefined;
						return (
							<>
								{message.image ? (
									<div
										className={`chat__msg chat__img-wrapper ${
											message.sender ? "chat__msg--rxd" : "chat__msg--sent"
										}`}
										ref={assignRef()}
									>
										<img src={message.content} alt="" className="chat__img" />
										<span className="chat__msg-footer">
											<span>{formatTime(message.time)}</span>
										</span>
									</div>

                            //\\ add files and sound

								) : message.sender ? (
									<p className="chat__msg chat__msg--rxd" ref={assignRef()}>
										<span>{message.content}</span>
										<span className="chat__msg-filler"> </span>
										<span className="chat__msg-footer">
											{formatTime(message.time)}
										</span>
									</p>
								) : (
									<p className="chat__msg chat__msg--sent" ref={assignRef()}>
										<span>{message.content}</span>
										<span className="chat__msg-filler"> </span>
										<span className="chat__msg-footer">
											<span> {formatTime(message.time)} </span>
											
										</span>
										
									</p>
								)}
							</>
						);
					})}
				</div>
			</div>
		);
	});
};

export default ChatDisp;
