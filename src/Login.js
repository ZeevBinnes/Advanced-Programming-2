import { useRef } from "react";
import {FindUser, GetUser, VerifyPassword} from "./data/users";

// this is only a basic screen, to see things can work
function Login({setUser, setRegister}) {

    const usernameTextBox = useRef(null)
    const passwordTextBox = useRef(null)

    const login = function(e){
        e.preventDefault();
        var userName = usernameTextBox.current.value;
        if (FindUser(userName)){
            if (VerifyPassword(userName, passwordTextBox.current.value))
                setUser(userName);
            else
                alert('wrong password')
        } else {
            alert('no such user')
        }
    }

    const registerButton = function(){setRegister(true);}

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
            </div>
            <button type="submit" onClick={login} className="btn btn-primary" data-toggle="collapse">Login</button>
            <div>
                don't have a user yet?
                <span className="linkFont" onClick={registerButton}> register now! </span>
            </div>
        </form>
        </div>
        )
        /*<form className="d-flex">
            <input ref={textBox} className="form-control me-2" placeholder="Type User Name" ></input>
            <button onClick={click} type="submit">login</button>
        </form>*/
        
    }

export default Login;