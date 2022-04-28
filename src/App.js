import React, {useState } from 'react';
import './App.css';
import UserApp from './components/UserApp';
import Login from './components/Login';
import Register from './components/Register';

function App() {

    const [userConnected, setUser] = useState(null);
    const [register, setRegister] = useState(false);


    if (userConnected == null) {
        if (!register) {
            return ( 
                <div className="app">
                     < Login setUser = { setUser } setRegister={setRegister} />
                </div>
            )
            }
            else {
                return (<div className="app"><Register setUser={setUser} setRegister={setRegister} /></div>)
            }
    } else {
        return (
            <div className="app">
                <UserApp user={userConnected}/>
            </div>
        );
    }
}

export default App;