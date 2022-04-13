import { useState } from 'react';
import './App.css';
import User_app from './User_app';
import Login from './Login';

function App() {

    const [userConnected, setUser] = useState(null);
    const [register, setRegister] = useState(false);


    if (userConnected == null) {
        if (!register) {
            return ( 
                <div className="app">
                     < Login setUser = { setUser }/>
                </div>
            )
            }
            else {
                return; // havn't dealt with it yet
            }
        } else {
            return (
                <div className="app">
                     < User_app user = { userConnected }/>
                </div>
                );
            }
        }

        export default App;