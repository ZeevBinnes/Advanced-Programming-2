import { useRef } from "react";
import {FindUser, GetUser} from "./data/users";

// this is only a basic screen, to see things can work
function Login({setUser}) {

    const textBox = useRef(null)

    const click = function(){
        var userName = textBox.current.value;
        if (FindUser(userName))
            setUser(userName);
    }

    return(
        <form className="login">
            <input ref={textBox} className="form-control me-2" placeholder="Type User Name" ></input>
            <button onClick={click} type="submit">login</button>
        </form>
    )
}

export default Login;