import { useRef, useState } from "react";
import {AddUser, FindUser, GetUser, VerifyPassword} from "./data/users";

// this is only a basic screen, to see things can work
function Register({setUser, setRegister}) {

    const usernameTextBox = useRef(null)
    const passwordTextBox = useRef(null)
    const nickNameTextBox = useRef(null)

    const login = function(){setRegister(false);}

    const register = function(e){
        e.preventDefault();
        var userName = usernameTextBox.current.value;
        var password = passwordTextBox.current.value;
        var nickName = nickNameTextBox.current.value;
        if (FindUser(userName)) {
            alert('there is user with this username already')
        } else {
            if (!validate(userName, 3))
                alert('invalid username');
            else if (!validate(password, 4))
                alert('invalid password');
            else if (!validate(nickName, 3))
                alert('invalid nickname')
            else {
                AddUser(userName, password, nickName, profilePicture);
                setRegister(false);
                setUser(userName);
            }
        }
    }

    // can me split if we want different validations.
    const validate = function(text, len){
        if (text.length < len)
            return false;
        if (text.match(/^[0-9a-zA-Z]+$/))
            return true;
    }

    const [profilePicture, setProfilePicture] = useState();
    const handlePicture = (e) => {
        setProfilePicture(URL.createObjectURL(e.target.files[0]))
        document.getElementById('profile_mini_pic').classList.remove('collapse');
    }

    return(
        <div className="login">
        <form >
            <div className="mb-3">
                <label className="form-label">User Name</label>
                <input ref={usernameTextBox} type="username" className="form-control"></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input ref={passwordTextBox} type="password" className="form-control" id="exampleInputPassword1"></input>
                <div id="passwordHelp" class="form-text">at least 4 letters or numbers</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Display Name</label>
                <input ref={nickNameTextBox} type="nickName" className="form-control"></input>
            </div>
            <div className="mb-3">
                <label className="form-label">profile image path</label>
                <input type="file" className="form-control" id="uploadProfilePhoto" onChange={handlePicture}></input>
            </div>
            <button type="submit" onClick={register} className="btn btn-primary">Submit</button>
            <div>
            already have a user?
                <span className="linkFont" onClick={login}> login now! </span>
            </div>
        </form>
        </div>
        )
    }

export default Register;