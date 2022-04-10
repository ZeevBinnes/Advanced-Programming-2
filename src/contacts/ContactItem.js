function ContactItem({id, time, lastMessage, photo}) {
    return(
        <li className="chat_list_item list-group-item d-flex justify-content-between align-items-center container-fluid">
            <img src={photo} className="proph_imgs"></img>
            <div className="col-sm-10">
                <div className="row">
                    <span className="fs-5 name_in_chat_list col-sm-10">{id}</span>
                    <span className="hour_and_time col-sm-2">{time}</span>
                </div>
                <div className="row">
                    <span className="message_preview"
                        title={lastMessage}>{lastMessage}</span>
                </div>
            </div>
        </li>
    );
}
export default ContactItem;