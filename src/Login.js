import {GetUser} from "./data/users";

// this is only a basic screen, to see things can work
function Login({setUser}) {

    const click = function(){
        setUser(GetUser('Bracha Achronah'));
    }

    return(
        <div>
            <button onClick={click}>click to login</button>
        </div>
    )
}

export default Login;