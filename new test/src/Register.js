import { useRef } from "react";
import {AddUser, FindUser, GetUser, VerifyPassword} from "./data/users";

// this is only a basic screen, to see things can work
function Register({setUser, setRegister}) {

    const usernameTextBox = useRef(null)
    const passwordTextBox = useRef(null)
    const nickNameTextBox = useRef(null)
    const profileImageBox = useRef(null)

    const login = function(){setRegister(false);}

    const register = function(){
        var userName = usernameTextBox.current.value;
        var password = passwordTextBox.current.value;
        var nickName = nickNameTextBox.current.value;
        var profImgSrc = profileImageBox.current.value;
    //    var profImg = URL.createObjectURL(profImgSrc.files[0])
    //    profImg.src = profImgSrc.fileName;
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
                AddUser(userName, password, nickName, profImgSrc);
            //    setRegister(false);
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

    return(
        <div className="login">
        <form>
            <div className="mb-3">
                <label className="form-label">User Name</label>
                <input ref={usernameTextBox} type="username" className="form-control"></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input ref={passwordTextBox} type="password" className="form-control" id="exampleInputPassword1"></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Display Name</label>
                <input ref={nickNameTextBox} type="nickName" className="form-control"></input>
            </div>
            <div className="mb-3">
                <label className="form-label">profile image path</label>
                <input ref={profileImageBox} type="file" className="form-control"></input>
            </div>
            <button type="button" onClick={register} className="btn btn-primary">Submit</button>
            <div>
                already have a user? login now! 
                <button type="button" onClick={login} className="btn btn-primary">go to Login</button>
            </div>
        </form>
        </div>
        )
        /*<form className="d-flex">
            <input ref={textBox} className="form-control me-2" placeholder="Type User Name" ></input>
            <button onClick={click} type="submit">login</button>
        </form>*/
    }

export default Register;