import { useState } from 'react';
import './App.css';
import User_app from './User_app';
import Login from './Login';
import Register from './Register';

function App() {

    const [userConnected, setUser] = useState(null);
    const [register, setRegister] = useState(false);

    if (userConnected == null) {
        if (!register) {
            return ( <Login setUser={setUser} setRegister={setRegister} />)
            }
            else {
                return (<Register setUser={setUser} setRegister={setRegister} />)
            }
        } else {
            return ( <User_app user = { userConnected } />);
            }
        }

        export default App;