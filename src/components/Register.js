// noinspection JSCheckFunctionSignatures

import React, { useRef, useState } from "react";
import {AddUser, FindUser} from "../data/users";
import no_image from '../data/blank_contact.jpg'

// this is only a basic screen, to see things can work
function Register({setUser, setRegister}) {

    const usernameTextBox = useRef(null)
    const passwordTextBox = useRef(null)
    const nickNameTextBox = useRef(null)

    const [userNameErrors, setuserNameErrors] = useState('');
    const [passwordErrors, setpasswordErrors] = useState('');
    const [nicknameErrors, setnicknameErrors] = useState('');

    const login = function(){setRegister(false);}

    const register = function(e){
        e.preventDefault();
        let isErr = false;
        setuserNameErrors('');
        setpasswordErrors('');
        setnicknameErrors('');
        const userName = usernameTextBox.current.value;
        const password = passwordTextBox.current.value;
        const nickName = nickNameTextBox.current.value;
        if (FindUser(userName)) {
            setuserNameErrors('there is user with this username already')
            isErr = true;
        } else if (!validateUsername(userName))
            isErr = true;
        if (!validatePassword(password))
            isErr = true;
        if (!validateNickname(nickName))
            isErr = true;
        if (!isErr) {
            if (!profilePicture)
                AddUser(userName, password, nickName, no_image);
            else
                AddUser(userName, password, nickName, profilePicture);
            setRegister(false);
            setUser(userName);
        }
    }

    // can be split if we want different validations.
    const validateUsername = function(text){
        if (text.length < 3){
            setuserNameErrors('username should be at least 3 characters');
            return false;
        }
        if (!text.match(/^[\da-zA-Z ]+$/)){
            setuserNameErrors('username should contain only characters and numbers');
            return false;
        }
        if (text.search(/ /) > 0) {
            setuserNameErrors('username should not contain spaces');
            return false;
        }
        return true;
    }

    const validateNickname = function(text){
        if (text.length < 3){
            setnicknameErrors('Nickname should be at least 3 characters');
            return false;
        }
        if (!text.match(/^[\da-zA-Z ]+$/)){
            setnicknameErrors('Nickname should contain only words and numbers');
            return false;
        }
        return true;
    }

    const validatePassword = function(password) {
        let errList = '';
        if (password.length < 4) {
            errList=("Your password should be at least 4 characters");
        }
        else if (password.search(/[a-z]/i) < 0) {
            errList=("Your password should contain at least one letter");
        }
        else if (password.search(/\d/) < 0) {
            errList=("Your password should contain at least one digit");
        }
        if (errList){
            setpasswordErrors(errList);
            return false;
        }
        return true;
    }

    const [profilePicture, setProfilePicture] = useState();
    const handlePicture = (e) => {
        setProfilePicture(URL.createObjectURL(e.target.files[0]))
    //    document.getElementById('profile_mini_pic').classList.remove('collapse');
    }

    return(
        <div className="login">
        <form >
            <div className="mb-3">
                <label className="form-label">User Name</label>
                <input ref={usernameTextBox} type="username" className="form-control"></input>
            </div>
            <div className="mb-3 err_alert" style={userNameErrors ? {display: "flex"} : {display: "none"}}>
                {userNameErrors}
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input ref={passwordTextBox} type="password" className="form-control" id="exampleInputPassword1"></input>
                <div id="passwordHelp">at least 4 letters or numbers</div>
            </div>
            <div className="mb-3 err_alert" style={passwordErrors ? {display: "flex"} : {display: "none"}}>
                {passwordErrors}
            </div>
            <div className="mb-3">
                <label className="form-label">Display Name</label>
                <input ref={nickNameTextBox} type="nickName" className="form-control"></input>
            </div>
            <div className="mb-3 err_alert" style={nicknameErrors ? {display: "flex"} : {display: "none"}}>
                {nicknameErrors}
            </div>
            <div className="mb-3">
                <label className="form-label">profile image (optional)</label>
                <input type="file" accept="image/*" className="form-control" id="uploadProfilePhoto" onChange={handlePicture}></input>
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