import {useState } from 'react';
import './App.css';
import User_app from './components/User_app';
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
                <User_app user={userConnected}/>
            </div>
        );
    }
}

export default App;