function SendImage({user, contacts, setType, setContent}) {

    return(
        <div>
            <button type="submit" className="bi bi-camera-fill rounded-pill" id="send_image" data-bs-toggle="modal" data-bs-target="#addFile">
            </button>
        </div>
    );
}

export default SendImage;