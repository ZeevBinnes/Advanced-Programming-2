import { useRef } from "react";
import {FindUser, GetUser, VerifyPassword} from "./data/users";

// this is only a basic screen, to see things can work
function Login({setUser, setRegister}) {

    const usernameTextBox = useRef(null)
    const passwordTextBox = useRef(null)

    const login = function(){
        var userName = usernameTextBox.current.value;
        if (FindUser(userName)){
            if (VerifyPassword(userName, passwordTextBox.current.value))
                setUser(userName);
            else
                alert('wrong password')
        } else {
            //// no such user
        }
    }

    const registerButton = function(){setRegister(true);}

    return(
        <form >
            <div className="mb-3">
                <label className="form-label">User Name</label>
                <input ref={usernameTextBox} type="username" className="form-control"></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input ref={passwordTextBox} type="password" className="form-control" id="exampleInputPassword1"></input>
            </div>
            <button type="button" onClick={login} className="btn btn-primary">Login</button>
            <div>
                don't have a user yet? register now! 
                <button type="button" onClick={registerButton} className="btn btn-primary">Register</button>
            </div>
        </form>
        )
        /*<form className="d-flex">
            <input ref={textBox} className="form-control me-2" placeholder="Type User Name" ></input>
            <button onClick={click} type="submit">login</button>
        </form>*/
    }

export default Login;